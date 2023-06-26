interface ButtonProps {
  text: string;
  version?: "medium" | "small";
}

const Button = ({ text, version = "medium" }: ButtonProps) => {
  return (
    <button
      className={
        version === "medium"
          ? "text-[28px] font-bebasNeue border-2 pt-[22px] px-[40px] pb-[16px]"
          : "text-[17px] font-bebasNeue border-2 py-[8px] px-[16px] leading-3"
      }
    >
      {text}
    </button>
  );
};

export default Button;
