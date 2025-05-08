interface TextAreaProps {
	id: string;
	className?: string;
	placeholder: string;
	required?: boolean;
	value?: string;
}
export const TextArea = ({ id, className="w-full", placeholder, required=false, value }: TextAreaProps) => {
	return (
		<textarea
			className={className}
			id={id}
			placeholder={placeholder}
			required={required}
			value={value}
		></textarea>
	);
};
