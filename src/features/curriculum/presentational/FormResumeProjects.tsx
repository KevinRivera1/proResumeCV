import { ButtonAdd } from '../../../components/shared/ButtonAdd';
import { InputFiled } from '../../../components/shared/Inputfield';
import { TextArea } from '../../../components/shared/TextArea';

export const FormResumeProjects = () => {
	return (
		<section>
			<h3>Proyectos Relevantes</h3>
			<fieldset>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label htmlFor="proyecto-nombre">Nombre del proyecto</label>
						<InputFiled
							className="w-full"
							type="text"
							id="proyecto-nombre"
							placeholder="Nombre del proyecto"
							required
						/>
					</div>
					<div>
						<label htmlFor="proyecto-fecha">Fecha de realización</label>
						<InputFiled
							className="w-full"
							type="text"
							id="proyecto-fecha"
							placeholder="Mes/Año"
							required
						/>
					</div>
					<div>
						<label htmlFor="proyecto-descripcion">Descripción breve</label>
						<TextArea
							id="proyecto-descripcion"
							placeholder="Descripción breve del proyecto"
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
