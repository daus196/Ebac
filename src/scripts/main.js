document.addEventListener('DOMContentLoaded',()=>{
    const botao = document.querySelectorAll('[data-tab-button]')

    for(let i=0; i < botao.length; i++){
        botao[i].addEventListener('click',(btn)=>{
            const abaAlvo = btn.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeAbas()
            aba.classList.add('main__tabs__list--is-active')
            removeBotaoAtivo()
            btn.target.classList.add('main__tabs__button--is-active')
        })
    }

})

function removeBotaoAtivo(){
    const botao = document.querySelectorAll('[data-tab-button]')

    for (let i=0;i<botao.length;i++){
        botao[i].classList.remove('main__tabs__button--is-active')
    }
}

function escondeAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i<tabsContainer.length;i++){
        tabsContainer[i].classList.remove('main__tabs__list--is-active')
    }
}