export const FormResumeAbout = () => {
	return (
		<section>
			<h3>Sobre mí</h3>
			<fieldset>
				<label htmlFor="perfil-about">Descripción breve y concisa</label>
				<textarea
					id="perfil-about"
					placeholder="Escriba una breve descripción sobre usted"
					required
				></textarea>
			</fieldset>
		</section>
	);
};
