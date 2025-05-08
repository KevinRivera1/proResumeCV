import { ButtonAdd } from '../../../components/shared/ButtonAdd';
import { InputFiled } from '../../../components/shared/Inputfield';

export const FormResumeAcademic = () => {
	return (
		<section>
			<h3>Formación Académica</h3>
			<fieldset>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label htmlFor="titulo-obtenido">Título obtenido</label>
						<InputFiled
							id="titulo-obtenido"
							type="text"
							placeholder="Título obtenido"
							className="w-full"
							required={true}
						/>
					</div>
					<div>
						<label htmlFor="institucion">Institución educativa</label>
						<InputFiled
							id="institucion"
							type="text"
							placeholder="Institución educativa"
							className="w-full"
							required={true}
						/>
					</div>
					<div>
						<label htmlFor="fechas-formacion">
							Fechas de inicio y finalización
						</label>
						<InputFiled
							id="fechas-formacion"
							type="text"
							placeholder="04/2025 - 05/2025"
							className="w-full"
							required={true}
						/>
					</div>
					<div>
						<label htmlFor="especializacion">Especialización (Si aplica)</label>
						<InputFiled
							id="especializacion"
							type="text"
							placeholder="Especialización"
							className="w-full"
							required={true}
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
