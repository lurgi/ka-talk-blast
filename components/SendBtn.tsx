interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const SendBtn = ({ children, onClick, disabled = false }: Props) => {
  return (
    <button
      disabled={disabled}
      className="bg-blue-100 w-32 rounded-lg p-2 hover:bg-blue-200 transition font-semibold"
      type="submit"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default SendBtn;
