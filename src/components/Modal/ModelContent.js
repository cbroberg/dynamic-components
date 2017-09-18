<form onSubmit={handleSubmit(this.submitUpdate)}>
	<FieldLabel for="name">Navn *</FieldLabel>
	<Field
		name="name"
		component={FormFieldInput}
		type="text"
		placeholder="Navn"
		validate={[required]}
	/>
	<FieldLabel for="name">SQL tabel navn</FieldLabel>
	<Field
		name="sqlTable"
		component={FormFieldInput}
		type="text"
		placeholder="SQL tabel navn"
		validate={[required]}
	/>
	<FieldLabel for="name">Felttype *</FieldLabel>
	<Field
		name="fieldType"
		component={FormFieldSelect}
		type="text"
		placeholder="Felttype"
		validate={[required]}
	>
		<option value="1">Dropdown</option>
		<option value="2">Dropdown (multipel valg)</option>
	</Field>
	<FieldLabel for="name">Tekst værdi 1 type *</FieldLabel>
	<Field
		name="field1Type"
		component={FormFieldSelect}
		type="text"
		placeholder="Tekst værdi 1 type"
	>
		<option value="1">Kort tekst</option>
		<option value="2">Lang tekst</option>
		<option value="3">WYSIWYG</option>

	</Field>
	<FieldLabel for="name">Tekst værdi 2 type *</FieldLabel>
	<Field
		name="field2Type"
		component={FormFieldSelect}
		type="text"
		placeholder="Tekst værdi 2 type"
	>
		<option value="0" defaultValue>Anvendes ikke</option>
		<option value="1">Kort tekst</option>
		<option value="2">Lang tekst</option>
		<option value="3">WYSIWYG</option>
	</Field>
	<FieldLabel for="name">Overordnet reference-tabel *</FieldLabel>
	<Field
		name="parentReftableId"
		component={FormFieldSelect}
		type="text"
		placeholder="Overordnet reference-tabel"
		validate={[required]}
	>
		{
			referenceTableSelectValues.map((opt, index) => {
				return (<option key={opt.value} value={opt.value}>{opt.label}</option>)
			})
		}
	</Field>
</form>
	<ModalButtonPanel>
		<Button onClick={handleSubmit(this.submitUpdate)} icon={iconname.ICON_CHECK_CIRCLE} size={18}>Gem ændringer</Button>
	</ModalButtonPanel>