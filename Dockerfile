FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk update && apk add --no-cache libc6-compat vim bash

FROM deps AS builder
WORKDIR /usr/src/app
RUN yarn set version berry
RUN echo 'nodeLinker: pnp' >> .yarnrc.yml

COPY . .

# gloabl package install, build
RUN yarn
RUN yarn build
RUN yarn build-storybook

# local production package install
RUN echo 'enableGlobalCache: false' >> .yarnrc.yml
RUN yarn workspaces focus --production

FROM base AS runner
WORKDIR /usr/src/app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# next build file copy
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static

# yarn pnp file copy
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.yarn ./.yarn
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.pnp* ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/yarn.lock ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.yarnrc.yml ./

USER nextjs

# storybook
COPY --from=builder /usr/src/app/storybook-static ./public/storybook

EXPOSE 3000
ENV PORT 3000

CMD ["yarn", "node", "server.js"]