const bigButton = document.querySelector('#dontPush')

const message = () => {
    alert('I told you not to push me')
}

bigButton.addEventListener('click', message)