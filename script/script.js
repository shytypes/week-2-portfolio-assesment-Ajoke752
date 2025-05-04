let submitButton = document.querySelector('#submit')

let hiddenSection = document.querySelector('#hidden-section')
let viewDetails = document.querySelector('#view-details')
let closeButton = document.querySelector('#close-button')
let form = document.querySelector('form')

const showHiddenSection = (e) => {
  e.preventDefault()
  hiddenSection.style.display = 'flex'
  hiddenSection.style.flexDirection = 'column'
  hiddenSection.style.alignItems = 'center'
  hiddenSection.style.justifyContent = 'center'
  viewDetails.addEventListener('click', handleFormDetails)
  closeButton.addEventListener('click', closeHiddenSection)
}

const closeHiddenSection = (e) => {
  e.preventDefault()
  hiddenSection.style.display = 'none'
  form.reset()
  let resultView = document.querySelector('#result-view')
  resultView.innerHTML = ''
  closeButton.style.display = 'none'
}

const handleFormDetails = (e) => {
  hiddenSection.style.display = 'none'
  let firstName = document.querySelector('#firstName').value
  let lastName = document.querySelector('#lastName').value
  let email = document.querySelector('#email').value
  let age = document.querySelector('#age').value
  let resultView = document.querySelector('#result-view')

  const userData = {
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    Age: age,
  }

  for (const property in userData) {
    console.log(`${property}: ${userData[property]}`)
    resultView.innerHTML += `<li><p>${property}: ${userData[property]}</p></li>`
  }
  closeButton.style.display = 'flex'
  closeButton.style.alignItems = 'center'
}
submitButton.addEventListener('click', showHiddenSection)
