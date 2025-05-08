import { ButtonAdd } from '../../../components/shared/ButtonAdd';

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
						<input
							className="w-full"
							type="text"
							id="curso-nombre"
							placeholder="Nombre del curso o certificación"
							required
						/>
					</div>
					<div>
						<label htmlFor="institucion-curso">Institución</label>
						<input
							className="w-full"
							type="text"
							id="institucion-curso"
							placeholder="Institución del curso"
							required
						/>
					</div>
					<div>
						<label htmlFor="fecha-obtencion">Fecha de obtención</label>
						<input
							className="w-full"
							type="text"
							id="fecha-obtencion"
							placeholder="Mes/Año"
							required
						/>
					</div>
					<div>
						<label htmlFor="descripcion-curso">Descripción breve</label>
						<textarea
							id="descripcion-curso"
							placeholder="Descripción breve del curso"
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
