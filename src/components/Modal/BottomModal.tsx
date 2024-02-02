import { forwardRef } from "react";
import Modal from "./Modal";

type Props = {
  isActive: boolean;
  height: string;
  bgColor?: string;
  children: React.ReactNode;
};

const BottomModal = forwardRef<HTMLDivElement, Props>(
  ({ isActive, height, bgColor, children }, ref) => {
    return (
      <Modal isActive={isActive}>
        <div
          ref={ref}
          style={{
            height,
          }}
          className={`${bgColor || "bg-white"} min-w-[22.5rem] rounded-t-lg`}
        >
          {children}
        </div>
      </Modal>
    );
  }
);

export default BottomModal;

BottomModal.displayName = "BottomModal";
