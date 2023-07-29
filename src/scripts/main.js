document.addEventListener('DOMContentLoaded', function(){
    showHiddenMenu();
    adicionaEventoBotoesFaq();
}); 

function showHiddenMenu(){
    const heroSection = document.querySelector('.hero');
    const menu = document.querySelector('.header');
    const aluraHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        if(window.scrollY < aluraHero){
            menu.classList.add('header--is-hidden')
        }else{
            menu.classList.remove('header--is-hidden')
        }
    });
}

function adicionaEventoBotoesFaq(){
    const questions = document.querySelectorAll('[data-faq-question]');  
    
    for(let i=0; i< questions.length; i++){
        questions[i].addEventListener('click', abreFechaResposta);
    }
}

function abreFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}