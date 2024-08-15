(function(){
    const sliders = [...document.querySelectorAll('.knowledge_body')];
    const buttonNext = document.querySelector('#next1');
    const buttonBefore = document.querySelector('#before1')
    let value;  

    buttonNext.addEventListener('click',()=>{
        chabgePosition(1);
    });

    buttonBefore.addEventListener('click',()=>{
        chabgePosition(-1);
    });

    const chabgePosition = (add)=>{
        const currentKnowledge = document.querySelector('.knowledge_body--show').dataset.id;
        value = Number(currentKnowledge);
        value += add;

        sliders[Number(currentKnowledge)-1].classList.remove('knowledge_body--show');
        if(value === sliders.length + 1 || value === 0 ){
            value = value === 0? sliders.length : 1;

        }
        sliders[value -1].classList.add('knowledge_body--show');
        
    }
    
})();