document.querySelector('#add-time').addEventListener('click', cloneField)

function cloneField() {
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  const fields = newFieldContainer.querySelectorAll('input')

  fields.forEach((field) => {
    if (field.value == '') {
      alert('Preencha todos os campos')
      // bug add field without both fields been filled and repeat warning
    } else {
      field.value = ''
      document.querySelector('#schedule-items').appendChild(newFieldContainer)
    }
  })

}