interface InputProps {
	id: string;
	type: string;
	placeholder: string;
	className?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	required?: boolean;
}

export const InputFiled = ({
	id,
	type,
	placeholder,
	className,
	value,
	onChange,
	error,
	required = false,
}: InputProps) => {
	return (
		<>
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={className}
				required={required}
			/>
			{error && <p className="text-red-500 text-sm">{error}</p>}
		</>
	);
};
