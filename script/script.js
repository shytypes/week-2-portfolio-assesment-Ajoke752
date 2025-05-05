let submitButton = document.querySelector('#submit')

let hiddenSection = document.querySelector('#hidden-section')
let viewDetails = document.querySelector('#view-details')
let closeButton = document.querySelector('#close-button')
let form = document.querySelector('form')
let resultView = document.querySelector('#result-view')
let successMessage = document.querySelector('#success-tag')

const showHiddenSection = (e) => {
  e.preventDefault()

  let firstName = document.querySelector('#firstName').value
  let lastName = document.querySelector('#lastName').value
  let email = document.querySelector('#email').value
  let age = document.querySelector('#age').value

  const userData = {
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    Age: age,
  }

  if (
    userData.FirstName &&
    userData.LastName &&
    userData.Email &&
    userData.Age
  ) {
    hiddenSection.style.display = 'flex'
    hiddenSection.style.flexDirection = 'column'
    hiddenSection.style.alignItems = 'center'
    viewDetails.style.display = 'flex'
    closeButton.style.display = 'flex'
    successMessage.innerHTML = `<p>Form Submitted Successfully</p>`
    successMessage.style.display = 'flex'
    successMessage.style.color = 'green'
  } else {
    successMessage.innerHTML = `<p>Please fill in all fields</p>`
    successMessage.style.color = 'red'
    successMessage.style.display = 'flex'
    successMessage.style.alignItems = 'center'
    successMessage.style.justifyContent = 'center'
    hiddenSection.style.display = 'flex'
    viewDetails.style.display = 'none'
    closeButton.style.display = 'flex'
    closeButton.style.alignItems = 'center'
  }
}

const closeHiddenSection = (e) => {
  e.preventDefault()
  hiddenSection.style.display = 'none'
  form.reset()
  resultView.innerHTML = ''
  closeButton.style.display = 'none'
}

const handleFormDetails = (e) => {
  e.preventDefault()
  let firstName = document.querySelector('#firstName').value
  let lastName = document.querySelector('#lastName').value
  let email = document.querySelector('#email').value
  let age = document.querySelector('#age').value

  const userData = {
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    Age: age,
  }
  resultView.innerHTML = ''
  for (const property in userData) {
    resultView.innerHTML += `<li><p>${property}: ${userData[property]}</p></li>`
  }
  closeButton.style.display = 'flex'
  closeButton.style.alignItems = 'center'
  viewDetails.style.display = 'none'
  successMessage.style.display = 'none'
}
submitButton.addEventListener('click', showHiddenSection)
viewDetails.addEventListener('click', handleFormDetails)
closeButton.addEventListener('click', closeHiddenSection)
