import { cls } from "@/utils/cls";

// 추후 구매자 정보 받아와야햠
type Props = {
  label: string;
  value: string;
  isPorkHub?: boolean;
};

export default function BuyerInfo({ label, value, isPorkHub }: Props) {
  return (
    <div className="space-x-2 flex items-center">
      <p
        className={cls(
          isPorkHub
            ? ""
            : "text-body-s leading-body-s font-regular text-slate-S400"
        )}
      >
        {label}
      </p>
      <p
        className={cls(
          isPorkHub
            ? ""
            : "text-slate-s600 text-body-s font-regular leading-body-s",
          ""
        )}
      >
        {value}
      </p>
    </div>
  );
}
