import { ButtonAdd } from '../../../components/shared/ButtonAdd';
import { InputFiled } from '../../../components/shared/Inputfield';

export const FormResumeSkills = () => {
	return (
		<section>
			<h3>Habilidades</h3>
			<fieldset>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label htmlFor="habilidades-tecnicas">Habilidades Técnicas</label>
						<InputFiled
							className="w-full"
							type="text"
							id="habilidades-tecnicas"
							placeholder="Habilidades técnicas"
						/>
					</div>
					<div>
						<label htmlFor="habilidades-blandas">Habilidades Blandas</label>
						<InputFiled
							className="w-full"
							type="text"
							id="habilidades-blandas"
							placeholder="Habilidades blandas"
						/>
					</div>
					<div>
						<label htmlFor="idiomas">Idiomas</label>
						<InputFiled
							className="w-full"
							type="text"
							id="idiomas"
							placeholder="Idiomas"
						/>
					</div>
				</div>
			</fieldset>
			<div className="btn-action">
				<ButtonAdd />
			</div>
		</section>
	);
};
