const bigButton = document.querySelector('#dontPush')
const cartButton = document.querySelector('#cart')
const cartButtonTwo = document.querySelector('#cartTwo')
const cartButtonThree = document.querySelector('#cartThree')

const message = () => {
    alert('I told you not to push me')
}

const orderAdded = () => {
    alert('Thank you for your purchase! An email has been sent')
}

bigButton.addEventListener('click', message)
cartButton.addEventListener('click', orderAdded)
cartButtonTwo.addEventListener('click', orderAdded)
cartButtonThree.addEventListener('click', orderAdded)