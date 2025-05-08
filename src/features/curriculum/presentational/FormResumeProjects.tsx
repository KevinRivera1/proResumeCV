import { ButtonAdd } from '../../../components/shared/ButtonAdd';

export const FormResumeProjects = () => {
	return (
		<section>
			<h3>Proyectos Relevantes</h3>
			<fieldset>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label htmlFor="proyecto-nombre">Nombre del proyecto</label>
						<input
							className="w-full"
							type="text"
							id="proyecto-nombre"
							placeholder="Nombre del proyecto"
							required
						/>
					</div>
					<div>
						<label htmlFor="proyecto-fecha">Fecha de realización</label>
						<input
							className="w-full"
							type="text"
							id="proyecto-fecha"
							placeholder="Mes/Año"
							required
						/>
					</div>
					<div>
						<label htmlFor="proyecto-descripcion">Descripción breve</label>
						<textarea
							id="proyecto-descripcion"
							placeholder="Descripción breve del proyecto"
							required
						></textarea>
					</div>
				</div>
			</fieldset>
			<div className="btn-action">
				<ButtonAdd />
			</div>
		</section>
	);
};
