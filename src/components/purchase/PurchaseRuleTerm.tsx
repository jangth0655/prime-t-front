import CheckBox from "../common/CheckBox";

type Props = {
  checked: boolean;
  onCheck: () => void;
};

export default function PurchaseRuleTerm({ checked, onCheck }: Props) {
  return (
    <div className="px-4">
      <p className="py-6 text-body-s leading-body-s text-slate-S500 border-b-[1px] border-b-slate-S200">
        규정 약관에 대한 설명입니다.규정 약관에 대한 설명입니다.규정 약관에 대한
        설명입니다.
      </p>

      <div className="pt-4 pb-10">
        <div
          onClick={onCheck}
          className="py-2 min-w-[20.5rem] bg-slate-S200 rounded-lg flex items-center cursor-pointer"
        >
          <CheckBox checked={checked} />
          <p className="text-body leading-body">규정에 대해 동의합니다.</p>
        </div>
      </div>
    </div>
  );
}
