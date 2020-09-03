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

//User posts interactions
const shareBtn = document.querySelector('#post-share-btn')
const likeBtn = document.querySelector('#post-like-btn')
const commentBtn = document.querySelector('#post-comment-btn')

const likesCount = document.querySelector('#likes-count')
const commentsCount = document.querySelector('#comments-count')
const postDate = document.querySelector('#post-date')

likeBtn.addEventListener('click', ()=>{
    if(likesCount.textContent == '0'){
        likesCount.textContent = 1
    }else{
        likesCount.textContent ++
    }
})
commentBtn.addEventListener('click', ()=>{
    if(commentsCount.textContent == '0'){
        commentsCount.textContent = 1
    }else{
        commentsCount.textContent ++
    }
})
//Set post date

let dateDay = new Date().getDay()
let dateMounth = new Date().getMonth()
let dateYear = new Date().getFullYear()

if(dateDay < 10 || dateMounth < 10){
    dateDay = '0' + dateDay
    dateMounth = '0' + dateMounth
}
const actualDate = dateDay + '/' + dateMounth + '/' + dateYear

postDate.textContent = actualDate