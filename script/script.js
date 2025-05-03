let submitButton = document.querySelector('#submit')

let hiddenSection = document.querySelector('#hidden-section')
let viewDetails = document.querySelector('#view-details')

const showHiddenSection = (e) => {
  e.preventDefault()
  hiddenSection.style.display = 'flex'
  hiddenSection.style.flexDirection = 'column'
  hiddenSection.style.alignItems = 'center'
  hiddenSection.style.justifyContent = 'center'
  viewDetails.addEventListener('click', handleFormDetails)
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
}
submitButton.addEventListener('click', showHiddenSection)
