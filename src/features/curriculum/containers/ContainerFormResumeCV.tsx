import { Button } from '../../../components/shared/Button';
import { FormResumeAbout } from '../presentational/FormResumeAbout';
import { FormResumeAcademic } from '../presentational/FormResumeAcademic';
import { FormResumeCertifications } from '../presentational/FormResumeCertifications';
import { FormResumeExperience } from '../presentational/FormResumeExperience';
import { FormResumeGeneral } from '../presentational/FormResumeGeneral';
import { FormResumeProjects } from '../presentational/FormResumeProjects';
import { FormResumeReferences } from '../presentational/FormResumeReferences';
import { FormResumeSkills } from '../presentational/FormResumeSkills';

export const ContainerFormResume = () => {
	return (
		<>
			<form className="shadow-2xl p-4">
				<header className="text-center mb-4">
					<h2 className="text-2xl font-bold text-pretty">
						Formulario ResumeCV
					</h2>
				</header>
				<FormResumeGeneral />
				<FormResumeAbout />
				<FormResumeExperience />
				<FormResumeAcademic />
				<FormResumeSkills />
				<FormResumeCertifications />
				<FormResumeProjects />
				<FormResumeReferences />
				<div className="submit-section text-white font-bold">
					<Button
						className="bg-green-600 px-4 py-2 rounded"
						type="submit"
						text="Guardar"
					/>
				</div>
			</form>
		</>
	);
};
