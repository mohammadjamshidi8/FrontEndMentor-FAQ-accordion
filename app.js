let accordionQuestion = document.querySelectorAll('.accordion-question')
let accodrionBody = document.querySelectorAll('.accordion-body')

// accordionQuestion.addEventListener('click',() => {
//     // accordionQuestion.classList.toggle('active')

//     accodrionBody.classList.toggle('active')

// })

accordionQuestion.forEach(item => {
    item.addEventListener('click',() => {
        item.nextElementSibling.classList.toggle('active')
        item.querySelector('path').classList.toggle('change-fill')

        if (item.nextElementSibling.getAttribute('class') === 'accordion-body active') {
            item.querySelector('path').setAttribute('d','M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z')
            console.log('active');
        } else {
            item.querySelector('path').setAttribute('d','M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z')
            console.log('negative');
        }
    })
})