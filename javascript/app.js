const chevronEl = document.querySelectorAll('.chevron-container')
let fadeElem = document.querySelectorAll('.has-fade')

const btnHam = document.getElementById('#btnMenu')
const navMenu = document.querySelector('.nav-menu')
const navLinks = document.querySelector('.has-fadeham')
console.log(navLinks)



navMenu.addEventListener('click',function(){
    console.log('click')
    if(navMenu.classList.contains('op')){
        navMenu.classList.remove('op')
        navLinksClose()
                 
    }

    else{
        navMenu.classList.add('op')
        navLinksOpen()

              
    }
})

function navLinksClose(){
    if(navLinks.classList.contains('has-fadeham')){
        navLinks.classList.remove('fade-in-for-brgr')
        navLinks.classList.add('fade-out-for-brgr')
    }
}

function navLinksOpen(){
    if(navLinks.classList.contains('has-fadeham')){
        navLinks.classList.add('fade-in-for-brgr')
        navLinks.classList.remove('fade-out-for-brgr')
    }

}







chevronEl.forEach(function(chev){
    chev.addEventListener('click', function(){
        if(chev.classList.contains('colored')){
            chev.classList.remove('colored')
            chev.classList.remove('open')

            chev.classList.add('has-fade')  
            chev.classList.remove('has-fadein')

            chev.classList.add('fade-out')
            chev.classList.remove('fade-in')
               
        }

        else{
            chev.classList.add('colored')
            chev.classList.add('open')  

            chev.classList.remove('has-fade')
            chev.classList.add('has-fadein')

            chev.classList.remove('fade-out')
            chev.classList.add('fade-in')
               
        }
    })
})




