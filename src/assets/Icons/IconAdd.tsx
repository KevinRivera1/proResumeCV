import type { SVGProps } from 'react';

interface SVGRProps {
	desc?: string;
	descId?: string;
}

const SvgComponent = ({
	desc,
	descId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
<svg
        role="img" 
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		height={24}
		width={24}
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
		className="lucide lucide-plus-icon lucide-plus"
		aria-describedby={descId}
        aria-labelledby='title'
		{...props}
	>
        <span id="title" className='sr-only'>{descId}</span>
		{desc ? <desc id={descId}>{desc}</desc> : null}
		<path d="M5 12h14M12 5v14" />
	</svg>
);
export default SvgComponent;
