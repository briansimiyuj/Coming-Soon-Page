let countdown = document.querySelector('.countdown')

console.log(countdown)

let launchDate = new Date('September 1, 2020 00:00:00').getTime()


let update = setInterval(() => {

    const now = new Date().getTime()
    
    let distance = launchDate - now

    // console.log(distance)

    const days = Math.floor(distance / (1000* 60* 60* 24))

    const hours = Math.floor((distance%(1000* 60* 60* 24)) / (1000* 60* 60))

    const mins = Math.floor((distance%(1000* 60* 60)) / (1000* 60))

    const sec = Math.floor((distance%(1000* 60)) / 1000)



    countdown.innerHTML = `
    
    <div>${days}<span>Days</span></div>
    
    <div>${hours}<span>Hours</span></div>
    
    <div>${mins}<span>Minutes</span></div>
    
    <div>${sec}<span>Seconds</span></div>
    
    `

}, 1000);






let rb = document.querySelector('.rb')

let rs = document.querySelector('.rs')

let lb = document.querySelector('.lb')

let ls = document.querySelector('.ls')

console.log(rb, rs, lb, ls)





rb.addEventListener('mouseover', as)

function as(){

    console.log('working')

    rs.classList.toggle('show')

}

lb.addEventListener('mouseover', fuck)

function fuck(){

    console.log('Goddamn')

    ls.classList.toggle('show')

}
    
