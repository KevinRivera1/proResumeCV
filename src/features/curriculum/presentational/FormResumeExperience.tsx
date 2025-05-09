import { ButtonAdd } from '../../../components/shared/ButtonAdd';
import { InputFiled } from '../../../components/shared/Inputfield';
import { TextArea } from '../../../components/shared/TextArea';

export const FormResumeExperience = () => {
	return (
		<section>
			<h3>Experiencia Profesional</h3>
			<fieldset>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label htmlFor="empresa">Nombre de la empresa</label>
						<InputFiled
							className="w-full"
							type="text"
							id="empresa"
							placeholder="Nombre de la empresa"
							required
						/>
					</div>
					<div>
						<label htmlFor="cargo">Cargo o puesto desempeñado</label>
						<InputFiled
							className="w-full"
							type="text"
							id="cargo"
							placeholder="Cargo o puesto desempeñado"
							required
						/>
					</div>
					<div>
						<label htmlFor="fechas-experiencia">
							Fechas de inicio y fin (mes/año)
						</label>
						<InputFiled
							className="w-full"
							type="text"
							id="fechas-experiencia"
							placeholder="Mes/Año"
							required
						/>
					</div>
					<div>
						<label htmlFor="descripcion-experiencia">
							Descripción de Experiencia Profesional
						</label>
						<TextArea
							id="descripcion-experiencia"
							placeholder="Descripción de la experiencia laboral"
							required
						/>
					</div>
					<div>
						<label htmlFor="ubicacion-experiencia">Ubicación</label>
						<InputFiled
							className="w-full"
							type="text"
							id="ubicacion-experiencia"
							placeholder="Ubicación de la empresa"
							required
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
