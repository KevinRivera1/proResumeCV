import { ButtonAdd } from '../../../components/shared/ButtonAdd';
import { InputFiled } from '../../../components/shared/Inputfield';
import { TextArea } from '../../../components/shared/TextArea';

export const FormResumeCertifications = () => {
	return (
		<section>
			<h3>Certificaciones y Cursos</h3>
			<fieldset>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label htmlFor="curso-nombre">
							Nombre del curso o certificación
						</label>
						<InputFiled
							id="curso-nombre"
							type="text"
							className="w-full"
							placeholder="Nombre del curso o certificación"
							required={true}
						/>
					</div>
					<div>
						<label htmlFor="institucion-curso">Institución</label>
						<InputFiled
							id="institucion-curso"
							type="text"
							className="w-full"
							placeholder="Institución del curso"
							required={true}
						/>
					</div>
					<div>
						<label htmlFor="fecha-obtencion">Fecha de obtención</label>
						<InputFiled
							id="fecha-obtencion"
							type="text"
							className="w-full"
							placeholder="Mes/Año"
							required={true}
						/>
					</div>
					<div>
						<label htmlFor="descripcion-curso">Descripción breve</label>
						<TextArea
							id="descripcion-curso"
							className="w-full"
							placeholder="Descripción breve del curso"
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
