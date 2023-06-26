import { ChangeEvent } from "react";

interface FormInputProps {
  name: string;
  placeholder: string;
  type: "text" | "email" | "tel";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormInput = ({
  name,
  placeholder,
  type,
  onChange,
  required,
}: FormInputProps) => {
  return (
    <input
      onChange={onChange}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className={`mb-[19px] font-raleway uppercase text-[17px] border-b-[1px] p-[11px] placeholder-black font-light w-full outline-none`}
      required={required}
    />
  );
};

export default FormInput;
