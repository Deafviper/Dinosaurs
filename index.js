const button = document.querySelector('.btn')
const list = document.querySelector('.dinoList')
const form = document.querySelector('.favDinosaur')




const dinoLister = function(ev){
    ev.preventDefault()
    const entry = document.createElement('li') 
    entry.textContent += dinomaker() + " " + dinoFeeder()
    debugger
    list.appendChild(entry)
}

const dinomaker = function(){
    const name = document.querySelector('.dinoName').value
    const dinoEntry = document.createElement('span')
    dinoEntry.textContent = name
    dinoEntry.classList.add('fancy')
    return dinoEntry.innerHTML
}

const dinoFeeder = function(){
    const diet = document.querySelector('.dinoDiet').value
    let dinoFood = document.createElement('span')
    dinoFood.textContent = diet
    dinoFood.classList.add('bold')
    return dinoFood.innerHTML
}


form.addEventListener('submit',dinoLister)
