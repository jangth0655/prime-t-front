import { NextResponse } from "next/server";

type RefreshToken = {
  access_token: string;
  token_type: string;
  detail: string;
};

export async function GET(req: Request) {
  const accessToken = req.headers.get("Authorization");
  if (!accessToken) {
    return NextResponse.json(
      {
        error: "Unauthorized",
        isSuccess: false,
      },
      {
        status: 401,
      }
    );
  }
  try {
    const res: RefreshToken = await (
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/dev/refresh_token`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
    ).json();

    if (res.detail) {
      return NextResponse.json(
        {
          error: "Not authorized",
          isSuccess: false,
        },
        {
          status: 401,
        }
      );
    }
    return NextResponse.json(
      {
        isSuccess: true,
        data: res.access_token,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Server Error",
        isSuccess: false,
      },
      {
        status: 500,
      }
    );
  }
}
