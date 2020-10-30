
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading......'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return messageTwo.textContent = data.error
            }
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast

        })
    })

})









// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             return console.log(data.error)
//         }
//         console.log(data.location)
//         console.log(data.forecast)
//     })
// })



// fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,crypto-com-chain&vs_currencies=eur').then((response) => {
//     if (!response) {
//         return console.log('problem with response')
//     }
//     response.json().then((data) => {
//         console.log(data)
//     })
// })


// fetch('http://api.weatherstack.com/current?access_key=e57f40458cf33b647dfa6d6690478380&query=Bologna').then((response) => {
//     if (!response) {
//         return console.log('problem with response')
//     }
//     response.json().then((data) => {
//         console.log(data)
//     })
// })