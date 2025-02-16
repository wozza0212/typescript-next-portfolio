interface FormButtonProps {
  children: string;
  version: string;
  type: "submit" | "reset" | "button";
  isDisabled?: boolean;
  onClick?: ()=> void
}

const FormButton: React.FC<FormButtonProps> = ({
  children,
  version,
  type,
  isDisabled,
  onClick
}) => {
  return (
    <button type={type} disabled={isDisabled} className={`${version}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default FormButton;
