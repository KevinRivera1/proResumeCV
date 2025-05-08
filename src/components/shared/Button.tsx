interface ButtonProps {
	text: string;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ text, type, className, onclick }: ButtonProps) => {
	const handleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (onclick) onclick(e);
	};
	return (
		<button className={className} type={type} onClick={handleclick}>
			{text}
		</button>
	);
};
