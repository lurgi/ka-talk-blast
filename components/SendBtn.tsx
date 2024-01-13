import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const SendBtn = ({ children, onClick, disabled = false }: Props) => {
  return (
    <button
      disabled={disabled}
      className={twMerge(
        "bg-blue-100 w-32 rounded-lg p-2 transition font-semibold",
        disabled ? "opacity-50" : "hover:bg-blue-200"
      )}
      type="submit"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default SendBtn;
