interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const SendBtn = ({ children, onClick }: Props) => {
  return (
    <button
      className="bg-blue-100 w-32 rounded-lg p-2 hover:bg-blue-200 transition font-semibold"
      type="submit"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default SendBtn;
