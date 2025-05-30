import { ButtonAdd } from '../../../components/shared/ButtonAdd';
import { InputFiled } from '../../../components/shared/Inputfield';

export const FormResumeReferences = () => {
	return (
		<section>
			<h3>Referencias</h3>
			<fieldset>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label htmlFor="referencia-nombre">Nombre de la referencia</label>
						<InputFiled
							className="w-full"
							type="text"
							id="referencia-nombre"
							placeholder="Nombre de la referencia"
							required
						/>
					</div>
					<div>
						<label htmlFor="referencia-telefono">Teléfono</label>
						<InputFiled
							className="w-full"
							type="tel"
							id="referencia-telefono"
							placeholder="Teléfono de la referencia"
							required
						/>
					</div>
					<div>
						<label htmlFor="referencia-email">Correo electrónico</label>
						<InputFiled
							className="w-full"
							type="email"
							id="referencia-email"
							placeholder="Correo electrónico de la referencia"
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
