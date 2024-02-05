import { forwardRef } from "react";
import Modal from "./Modal";

type Props = {
  isActive: boolean;
  height: string;
  bgColor?: string;
  children: React.ReactNode;
  bottom?: string;
};

const BottomModal = forwardRef<HTMLDivElement, Props>(
  ({ isActive, height, bgColor, children, bottom }, ref) => {
    return (
      <Modal isActive={isActive}>
        <div
          ref={ref}
          style={{
            height,
            bottom,
          }}
          className={`${
            bgColor || "bg-white"
          } min-w-[22.5rem] rounded-t-lg fixed z-50 w-full`}
        >
          {children}
        </div>
      </Modal>
    );
  }
);

export default BottomModal;

BottomModal.displayName = "BottomModal";
