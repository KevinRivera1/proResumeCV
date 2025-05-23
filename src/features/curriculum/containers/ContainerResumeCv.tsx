import { PreviewResumeCv } from '../presentational/PreviewResumeCv';
import { ContainerFormResume } from './ContainerFormResumeCV';

export const ContainerResumeCv = () => {
	return (
		<>
			<section>
				<div className="wrapper-form container mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2">
						<ContainerFormResume />
						<PreviewResumeCv />
					</div>
				</div>
			</section>
		</>
	);
};
