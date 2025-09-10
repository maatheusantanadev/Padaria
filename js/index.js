const naoBtn = document.querySelector('.button.nao');

let imagemMostrada = false;


const img = document.createElement('img');
img.src = 'imagens/jacare.jpg';
img.style.position = 'fixed';
img.style.top = '50%';
img.style.left = '50%';
img.style.transform = 'translate(-50%, -50%)';
img.style.zIndex = '1000';
img.style.maxWidth = '300px';
img.style.maxHeight = '300px';
img.style.display = 'none'; 


document.body.appendChild(img);


function moverBotao() {
    const btnRect = naoBtn.getBoundingClientRect();
    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    naoBtn.style.position = 'fixed';
    naoBtn.style.left = `${newX}px`;
    naoBtn.style.top = `${newY}px`;
}


naoBtn.addEventListener('mouseenter', () => {
    if (imagemMostrada) {
        moverBotao();
    }
});


naoBtn.addEventListener('click', () => {
    if (!imagemMostrada) {
        imagemMostrada = true;    
        img.style.display = 'block'; 

        
        setTimeout(() => {
            img.style.display = 'none';
            moverBotao(); 
        }, 3000);
    } else {
        moverBotao();
    }
});
