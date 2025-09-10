const email = document.getElementById('email'); 

email.addEventListener('click', (event) => {
    event.preventDefault();

    const endereco = email.textContent.trim();
    window.location.href = `mailto:${endereco}`; 
});
