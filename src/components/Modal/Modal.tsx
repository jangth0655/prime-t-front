import Portal from "../Portal";

type Props = {
  children: React.ReactNode;
  isActive: boolean;
};

export default function Modal({ children, isActive }: Props) {
  return isActive ? (
    <Portal>
      <div className="fixed bg-black opacity-50 left-0 right-0 top-0 bottom-0 z-50" />
      <div className="fixed z-50 bottom-0 w-full">{children}</div>
    </Portal>
  ) : null;
}
