//Obtendo todos os elementos do DOM
const imgContainer = document.querySelector('.showcase > div');
const img = document.querySelector('.showcase img');
const shadow = document.querySelector('.shadow');

const thumb = document.querySelectorAll('.thumbs img');
const titleOverlay = document.querySelector('.titleOverlay');
const title = document.querySelector('.titleText');
const desc = document.querySelector('.description');

const sizes = document.querySelectorAll('.sizes > li');
const stars = document.querySelectorAll('.stars span');
const price = document.querySelector('.price');
const colorBtn = document.querySelectorAll('.color');

const pag = document.querySelectorAll('.pag');
const prev = document.querySelector('.arr-left');
const next = document.querySelector('.arr-right');
const shoeNum = document.querySelector('.shoe-num');
const shoeTotal = document.querySelector('.shoe-total');


//Variáveis de ID
let id = 1;
let colorType = 1;
let shoe = 1;

//Detalhes do sapato/dados
const colors = [
    [
      '#ae001b',
      '#111111'
    ],
    [
      'linear-gradient(0deg, orange, red)',
      '#bda08e'
    ],
    [
      'linear-gradient(0deg, #00b8ea 0%, #e6882d 50%, #e56da6 100%)',
      'linear-gradient(0deg, #dae766, #b2afaa)'
    ],
  ];
  
  const prices = ['150', '250', '175'];
  
  const names = [
    ["Red Nike Jordan Max Aura 3", "Black Nike Jordan Max Aura 3"],
    ["Black/Orange Nike Air Max 95", "Beige/Gray Nike Air Max 95"],
    ["Colorful NIKE Jordan Delta 2 SP", "Gray NIKE Jordan Delta 2 SP"]
  ];
  
  const descriptions = [
    ["Traga um pedaço da história para as ruas urbanas da cidade enquanto você entra nos tênis masculinos Nike Jordan Max Aura 3. Inspirado pela rica herança jordaniana, este modelo possui a energia dos tênis de basquete e uma aparência que muda a percepção do estilo clássico."],
    ["Os tênis masculinos Nike Air Max 95 movem você com a força e fluidez inspiradas na anatomia do corpo humano. A sola central forma a base desses tênis, enquanto os painéis laterais estruturados proporcionam uma construção sólida e estável. As incisões flexíveis na sola permitem que seus pés se movam naturalmente."],
    ["Os tênis de basquete masculinos Jordan Delta 2 SP oferecem uma abordagem fresca e destemida às características que você deseja: durabilidade, conforto e a atitude da marca Jordan. O primeiro modelo dos tênis Delta 2, com a mesma ideia, recebeu linhas redesenhadas e componentes modificados."]
  ];
  
  const ratings = [4, 5, 3];
  

/*===== Funções =====*/
/*=====================*/
// Obtendo a imagem a partir do caminho da pasta
function getImage(imgType, shoe, colorType, id, extension) {
    return 'img/' + imgType + '/shoe' + shoe + '-' + colorType + '/img' + id + '.' + extension;
  }
  
  // Redefinir estado ativo para botões
  function resetActive(element, elementClass, i) {
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove(elementClass + '-active');
    }
    element[i].classList.add(elementClass + '-active');
  }
  
  // Disparar animações
  function animate(element, time, anim) {
    element.style.animation = anim;
  
    setTimeout(() => {
      element.style.animation = "none";
    }, time);
  }
  
  // Atribuir cores aos botões de cor
  function assignColors(i, shoe) {
    colorBtn[i].style.background = colors[shoe - 1][i];
  }
  
  // Definir classificação preenchendo estrelas
  function resetStars(shoe) {
    for (let i = 0; i < stars.length; i++) {
      stars[i].innerText = "star_outline";
    }
  
    // Adicionando as classificações
    for (let i = 0; i < ratings[shoe]; i++) {
      stars[i].innerText = "star";
    }
  }
  
/*=====================*/

//Alterando o tamanho do sapato
for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener('click', (e) => {
      resetActive(sizes, 'size', i);
    });
  }
  

/*Configurando todos os dados iniciais para o primeiro sapato que é carregado*/
shoeTotal.innerText = "0" + pag.length;
shoeNum.innerText = "0" + shoe;
price.innerText = "$" + prices[0];
resetStars(shoe - 1);
title.innerText = names[0][0];
desc.innerText = descriptions[0];

//Alterando imagens
for (let i = 0; i < thumb.length; i++) {
  thumb[i].addEventListener('click', (e) => {
    /* Matrizes em JS começam com 0,
     então definimos o id para i + 1 */
    id = i + 1;

    /* Definindo a imagem principal para a imagem em miniatura clicada */
    img.src = getImage("showcase", shoe, colorType, id, 'png');

    // Adicionando a classe ativa à miniatura clicada
    resetActive(thumb, 'thumb', i);

    // Adicionando a animação de fade in no sapato
    animate(imgContainer, 550, "fade 500ms ease-in-out");
  });
}


for (let i = 0; i < colorBtn.length; i++) {
    // Configurando cores para o botão de cor
    assignColors(i, shoe);
  
    // Alterando cores
    colorBtn[i].addEventListener('click', () => {
      // Alterar tipo de cor do sapato
      colorType = i + 1;
  
      // Alterar imagem do Showcase
      setTimeout(() => {
        img.src = getImage("showcase", shoe, colorType, id, 'png');
      }, 450);
  
      // Alterar miniaturas
      for (let i = 0; i < thumb.length; i++) {
        thumb[i].src = getImage("thumbs", shoe, colorType, i + 1, 'jpg');
      }
  
      // Definir classe ativa para botão clicado
      resetActive(colorBtn, 'color', i);
  
      // Alterar o título do sapato
      title.innerText = names[shoe - 1][i];
  
      // Adicionando todas as animações
      animate(img, 550, "jump 500ms ease-in-out");
      animate(shadow, 550, "shadow 500ms ease-in-out");
      animate(titleOverlay, 850, "title 800ms ease");
    });
  }
  


/*===== Slider =====*/
function slider(shoe) {
    // Alterar imagem do Showcase
    setTimeout(() => {
      img.src = getImage("showcase", shoe, colorType, id, 'png');
    }, 600);
  
    // Alterar miniaturas
    for (let i = 0; i < thumb.length; i++) {
      thumb[i].src = getImage("thumbs", shoe, colorType, i + 1, 'jpg');
    }
  
    // Alterar as cores nos botões de cor
    for (let i = 0; i < colorBtn.length; i++) {
      assignColors(i, shoe);
    }
  
    // Definir classe ativa para botão clicado
    resetActive(pag, 'pag', shoe - 1);
  
    // Reatribuir todos os dados do sapato
    desc.innerText = descriptions[shoe - 1];
    title.innerText = names[shoe - 1][colorType - 1];
    price.innerText = "$" + prices[shoe - 1];
    resetStars(shoe - 1);
    shoeNum.innerText = "0" + shoe;
  
    // Adicionando todas as animações
    animate(img, 1550, "replace 1.5s ease-in");
    animate(shadow, 1550, "shadow2 1.5s ease-in");
    animate(titleOverlay, 850, "title 800ms ease");
  }
  

//Sapato anterior
prev.addEventListener('click', () => {
    // Decrementar id da imagem
    shoe--;
    /* Verificar se o slide vai abaixo do primeiro,
    e redefini-lo para o último slide */
    if (shoe < 1) {
      shoe = pag.length;
    }
    // Executar a função do slider
    slider(shoe);
  });
  

  next.addEventListener('click', () => {
    // Incrementar id da imagem
    shoe++;
    /* Verificar se o slider ultrapassa o comprimento dos slides,
    e redefini-lo para o primeiro */
    if (shoe > pag.length) {
      shoe = 1;
    }
    // Executar a função do slider
    slider(shoe);
  });
  ;

//Paginação
for (let i = 0; i < pag.length; i++) {
    // Adicionar evento de clique para todas as paginações
    pag[i].addEventListener('click', () => {
      // Executar a função do slider
      slider(i + 1);
      // Definir id do sapato para o índice da paginação clicada
      shoe = i + 1;
    });
  }
  