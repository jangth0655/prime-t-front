import { cls } from "@/utils/cls";

type Props = {
  isDark?: boolean;
};

export default function DetailProductNotice({ isDark }: Props) {
  return (
    <ul className="space-y-4 p-4">
      {list.map((item) => (
        <li key={item.key} className={cls(isDark ? "" : "", "", "space-y-2")}>
          <p
            className={cls(
              isDark ? "" : "text-black",
              "text-body leading-body font-regular "
            )}
          >
            {item.title}
          </p>
          <p
            className={cls(
              isDark ? "" : "text-slate-S600 bg-slate-S200",
              "text-body leading-body font-regular p-4"
            )}
          >
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

const list = [
  {
    title: "취소 정책",
    description: "취소 시 환불이나 상품에 대한 처리 등에 대한 내용입니다.",
    key: "cancel",
  },
  {
    title: "거래 시 유의 사항",
    description: "거래 수수료 안내, 서비스 관련 유의사항에 대한 내용입니다.",
    key: "notice",
  },
];
