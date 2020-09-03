const API_URL = 'http://localhost:3000'
const LOGIN_URL = 'http://localhost/login'
//Register
const regForm = document.querySelector('#register-form')
regForm.addEventListener('submit', (event)=>{
    const regData = new FormData(regForm)

    const regUsername = regData.get('register-username')
    const regEmail = regData.get('register-email')
    const regPassword = regData.get('register-password')

    const newUser = {
        regUsername,
        regEmail,
        regPassword
    }
    if(regUsername == '' || regEmail == '' || regPassword == ''){
        console.error('All fields are required')
    }else{
         localStorage.setItem('newUser', JSON.stringify(newUser))
        fetch(LOGIN_URL, {
            method: "POST",
            body: localStorage.getItem('newUser'),
            headers: {
                "content-type": "application/json"
            }
        })
        console.log('User succesfully registered:' + ' ' + newUser.regUsername)
    }
    regForm.reset()

    event.preventDefault()
})
//Login
const logForm = document.querySelector('#login-form')
logForm.addEventListener('submit', (event)=>{
    const logData = new FormData(logForm)

    const logEmail = logData.get('login-email')
    const logPassword = logData.get('login-password')

    const existingUser = {
        logEmail,
        logPassword
    }
    if(logEmail == '' ||logPassword == ''){
        console.error('All fields are required')
    }else{
        fetch(API_URL, {
            method: "POST",
            body: existingUser,
            headers: {
                "content-type": "application/json"
            }
        })
    }
    event.preventDefault()
})