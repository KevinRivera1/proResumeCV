import IconAdd from "../../assets/Icons/IconAdd";

interface ButtonAddProps {
	type?: 'button';
	className?: string;
	onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonAdd = ({ type, className='bg-blue-500 p-1 rounded-full', onclick }: ButtonAddProps) => {
	const handleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (onclick) onclick(e);
	};
	return (
		<>
			<button className={className} type={type} onClick={handleclick}>
				<IconAdd className="text-white"/>
			</button>
		</>
	);
};
