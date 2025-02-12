interface FormButtonProps {
  children: string;
  version: string;
  type: "submit" | "reset" | "button";
  isDisabled?: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({
  children,
  version,
  type,
  isDisabled,
}) => {
  return (
    <button type={type} disabled={isDisabled} className={`${version}`}>
      {children}
    </button>
  );
};

export default FormButton;
