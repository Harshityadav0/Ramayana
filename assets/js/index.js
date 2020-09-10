

console.log('Client side js loaded')
var message1 = document.querySelector('#message1')
var message2 = document.querySelector('#message2')
var selectname = document.querySelector('form')
var person = document.querySelector('select')
var random = document.querySelector('#random')
var generatebutton = document.querySelector('#generate')
//form submission quote generation

selectname.addEventListener('submit',(e)=>{
    e.preventDefault()
    var them = person.value
             fetch('/quote?name='+encodeURI(them)).then((response)=>{response.json().then((data)=>{
                 message1.textContent = data.quote
                 message2.textContent = " - " + data.quotee
                 generatebutton.textContent = "Generate Another"
             })})
})

//random
random.addEventListener('click', (e)=>{
    e.preventDefault()
    fetch('/random').then((response)=>{
        response.json().then((data)=>{
            message1.textContent = data.quote2
            message2.textContent = " - " + data.quotee2
        })
    })
})