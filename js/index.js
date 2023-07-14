const personagens = document.querySelectorAll('.personagem'); /* document.querySelectorAll seleciona todos os elementos da classe o id que eu passar como método ou seja dentro dos () o const personagens variável que declarei pra armazenar a infornação do document.querySelectorAll('.personagem'); */ 
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');


        const personagemAmpliado = document.querySelector('.personagem-ampliado');
        
        
        const idPersonagem = personagem.attributes.id.value;
        personagemAmpliado.src = `./src/card-${idPersonagem}.png.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
        
    })
}) /*  () => {} uma estrutura que irá disparar uma ação*/
