interface ButtonProps {
  text: string;
  version?: "medium" | "small" | "search";
  onClick?: () => void;
}

const Button = ({ text, version = "medium", onClick }: ButtonProps) => {
  const getStyle = (version: string) => {
    if (version === "medium") {
      return "text-[28px] font-bebasNeue border-2 pt-[22px] px-[40px] pb-[16px]";
    }

    if (version === "small") {
      return "text-[17px] font-bebasNeue border-2 py-[8px] px-[16px] leading-3";
    }

    return "text-[16px] font-bebasNeue border-2 py-[8px] px-[16px] leading-3";
  };
  return (
    <button className={getStyle(version)} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
