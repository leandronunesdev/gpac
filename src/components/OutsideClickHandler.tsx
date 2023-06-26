import { ReactNode, useEffect, useRef } from "react";

interface OutsideClickHandlerProps {
  onOutsideClick: () => void;
  children: ReactNode;
}

const OutsideClickHandler = ({
  onOutsideClick,
  children,
}: OutsideClickHandlerProps) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      componentRef.current &&
      !componentRef.current.contains(event.target as Node)
    ) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return <div ref={componentRef}>{children}</div>;
};

export default OutsideClickHandler;
