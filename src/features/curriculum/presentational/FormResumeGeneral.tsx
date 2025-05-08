export const FormResumeGeneral = () => {
	return (
		<section>
			<h3 className="font-semibold">Datos Generales</h3>
			<fieldset>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label htmlFor="nombres">Nombres</label>
						<input
							className="w-full"
							type="text"
							id="nombres"
							placeholder="Ingrese sus Nombres"
							required
						/>
					</div>
					<div>
						<label htmlFor="apellidos">Apellidos</label>
						<input
							className="w-full"
							type="text"
							id="apellidos"
							placeholder="Ingrese sus Apellidos"
							required
						/>
					</div>
					<div>
						<label htmlFor="direccion">Dirección</label>
						<input
							className="w-full"
							type="text"
							id="direccion"
							placeholder="Ingrese su dirección"
							required
						/>
					</div>
					<div>
						<label htmlFor="telefono">Teléfono</label>
						<input
							className="w-full"
							type="tel"
							id="telefono"
							placeholder="Ingrese su teléfono"
							required
						/>
					</div>
					<div>
						<label htmlFor="fecha-nacimiento">Fecha de Nacimiento</label>
						<input
							className="w-full"
							type="date"
							id="fecha-nacimiento"
							required
						/>
					</div>
					<div>
						<label htmlFor="correo">Correo Electrónico</label>
						<input
							className="w-full"
							type="email"
							id="correo"
							placeholder="Ingrese su correo electrónico"
							required
						/>
					</div>
					<div>
						<label htmlFor="estado-civil">Estado Civil</label>
						<input
							className="w-full"
							type="text"
							id="estado-civil"
							placeholder="Ingrese su Estado Civil"
							required
						/>
					</div>
					<div>
						<label htmlFor="nacionalidad">Nacionalidad</label>
						<input
							className="w-full"
							type="text"
							id="nacionalidad"
							placeholder="Ingrese su Nacionalidad"
							required
						/>
					</div>
				</div>
			</fieldset>
		</section>
	);
};
