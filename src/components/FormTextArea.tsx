import { ChangeEvent } from "react";

interface FormTextAreaProps {
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const FormTextArea = ({
  name,
  placeholder,
  onChange,
  required,
}: FormTextAreaProps) => {
  return (
    <textarea
      name={name}
      id={name}
      placeholder={placeholder}
      className="mb-[19px] font-raleway uppercase text-[17px] border-b-[1px] p-[11px] placeholder-black font-light w-full outline-none"
      rows={4}
      onChange={onChange}
      required={required}
    />
  );
};

export default FormTextArea;
