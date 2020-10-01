const form = document.querySelector('form')
const button = document.querySelector('input[type="submit"]')
const table = document.querySelector('.table table')

button.addEventListener('click', e => {
	e.preventDefault()
	const customerInfo = getVals()
	if (isValidated(customerInfo)) {
		addToTable(getTemplate(customerInfo))
	}
})

function getVals() {
	return {
		name: form.querySelector('input[name="name"]').value,
		phone: form.querySelector('input[name="phone"]').value,
		address: form.querySelector('input[name="address"]').value,
		email: form.querySelector('input[name="email"]').value,
		coffeeCount: form.querySelector('input[name="coffeeCounter"]').value,
		coffeeType: document.getElementById('powder').checked
	}
}

function isValidated(obj) {
	return obj.name && obj.address && obj.phone && obj.email && obj.coffeeCount
}

function getTemplate(obj) {
	return (`
		<tr>
			<td>${obj.name}</td>
	    <td>${obj.address}</td>
	    <td>${obj.phone}</td>
	    <td>${obj.email}</td>
	    <td>${ !!obj.coffeeType ? 'Мелена кава' : 'Кава в зернах' }</td>
	    <td>${obj.coffeeCount}</td>
	  </tr>
	`)
}

function addToTable(str) {
	table.insertAdjacentHTML('beforeend', str)
}
