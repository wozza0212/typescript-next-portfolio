

interface FormButtonProps {
        children: string;
        version: string;
        type: "submit" | "reset" | "button";
        isDisabled?: boolean;
        
}

const FormButton: React.FC<FormButtonProps> = ({ children, version, type, isDisabled }) => {
    return (
        <button type={type} disabled={isDisabled} className={`${version}`}>
            {children}
        </button>
    );
};

FormButton.defaultProps = {
    type: "button",
    isDisabled: false,
    version: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
}



export default FormButton;
