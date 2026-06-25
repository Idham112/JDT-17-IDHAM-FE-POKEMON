interface Props {
  btnText: string;
  onClick: () => void;
  className?: string;
}

const Button = ({ btnText, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`w-full border border-white/15 bg-white/10 px-3 py-1.5 font-['Press_Start_2P'] text-[8px] uppercase tracking-wider text-white/90 cursor-pointer transition-colors hover:bg-white/20 ${className ?? ""}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
