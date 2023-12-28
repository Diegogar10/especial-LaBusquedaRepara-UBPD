import {dataVideos1, dataLetters} from "./infoData.mjs";

//Funcionalidad Modal guía de inicio

const containerOnboard = document.querySelector('.modal__onboarding');
const containerBloq = document.querySelector('.bloq__container');
const containerAction = document.querySelector('.action__container');
const silueta8 = document.querySelector('.header__frontPage>li:nth-child(8)');
const buttonAction = document.querySelector('.action__container>button')

const addClassInvisible = () => {
  containerAction.classList.add('invisible');
  containerBloq.classList.add('invisible');
  containerOnboard.classList.add('invisible');
}

const visibleHandle = () => {
  silueta8.classList.add('visible');
  setTimeout(()=>{
    addClassInvisible();
  }, 1500);
}

buttonAction.onclick = () => {
  addClassInvisible();
}

containerOnboard.onmouseover = () => {
  visibleHandle();
}

containerOnboard.onclick = () => {
  visibleHandle();
}

//Funcionalidad botones del menu lateral

const navHome = document.querySelector('.nav__home');
const navVideos = document.querySelector('.nav__videos');
const navExterior = document.querySelector('.nav__exterior');
const navLetters = document.querySelector('.nav__letters');
const navGalery = document.querySelector('.nav__galery');
const navFooter = document.querySelector('.nav__footer');

    //contenedores principales

const headerMainContainer = document.querySelector('.header__container');
const videosMainContainer = document.querySelector('.voices__container');
const exteriorMainContainer = document.querySelector('.voices__container--exterior');
const lettersMainContainer = document.querySelector('.letters__container');
const galeryMainContainer = document.querySelector('.search__container');
const footerMainContainer = document.querySelector('.contact__container');

    //observador para dinamismo del menú

const addClassButtonSelected = (clase) => {
  switch (clase) {
    case 'header__container':
      navHome.classList.add('selected');
      
      navVideos.classList.remove('selected');
      navExterior.classList.remove('selected');
      navLetters.classList.remove('selected');
      navGalery.classList.remove('selected');
      navFooter.classList.remove('selected');
      
      break;
    case 'voices__container':
      navVideos.classList.add('selected');
      
      navHome.classList.remove('selected');
      navExterior.classList.remove('selected');
      navLetters.classList.remove('selected');
      navGalery.classList.remove('selected');
      navFooter.classList.remove('selected');

      break;
    case 'voices__container--exterior':
      navExterior.classList.add('selected');
      
      navHome.classList.remove('selected');
      navVideos.classList.remove('selected');
      navLetters.classList.remove('selected');
      navGalery.classList.remove('selected');
      navFooter.classList.remove('selected');
      
      break;
    case 'letters__container':
      navLetters.classList.add('selected');
      
      navHome.classList.remove('selected');
      navVideos.classList.remove('selected');
      navExterior.classList.remove('selected');
      navGalery.classList.remove('selected');
      navFooter.classList.remove('selected');
      
      break;
    case 'search__container':
      navGalery.classList.add('selected');
      
      navHome.classList.remove('selected');
      navVideos.classList.remove('selected');
      navExterior.classList.remove('selected');
      navLetters.classList.remove('selected');
      navFooter.classList.remove('selected');
      
      break;
    case 'contact__container':
      navFooter.classList.add('selected');
      
      navHome.classList.remove('selected');
      navVideos.classList.remove('selected');
      navExterior.classList.remove('selected');
      navLetters.classList.remove('selected');
      navGalery.classList.remove('selected');
      
      break;
    default:
  }
}

const sectionHandler = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      const classContainer = entry.target.classList.value;
      addClassButtonSelected(classContainer);
    } else {
      //entry.target.classList.remove('visible');
    }
  });
}

const myObserver0 = new IntersectionObserver(sectionHandler,{
  root: null,
  rootMargin: '0px',
  threshold: 0.5
});

myObserver0.observe(headerMainContainer);
myObserver0.observe(videosMainContainer);
myObserver0.observe(exteriorMainContainer);
myObserver0.observe(lettersMainContainer);
myObserver0.observe(galeryMainContainer);
myObserver0.observe(footerMainContainer);

    //Ir directamente al contenido al hacer click

navHome.onclick = () =>{
  headerMainContainer.scrollIntoView({behavior:'smooth'});
}
navVideos.onclick = () =>{
  videosMainContainer.scrollIntoView({behavior:'smooth'});
}
navExterior.onclick = () =>{
  exteriorMainContainer.scrollIntoView({behavior:'smooth'});
}
navLetters.onclick = () =>{
  lettersMainContainer.scrollIntoView({behavior:'smooth'});
}
navGalery.onclick = () =>{
  galeryMainContainer .scrollIntoView({behavior:'smooth'});
}
navFooter.onclick = () =>{
  footerMainContainer.scrollIntoView({behavior:'smooth'});
}


//Elegimos todas las siluetas, para despues agregar a cada una
//el evento de que al mover el mouse o tocar agregue la clase que le da visivilidad. 

const images = document.querySelectorAll('.header__frontPage li');

const addClassVisible = (item) => {
  item.classList.add('visible');
} 

images.forEach((item)=>{
  item.onmouseover = () => addClassVisible(item);
  item.onclick = () => addClassVisible(item);
})

// Funcionalidad de botones ir a abajo siguiente sección

const buttonDown1 = document.querySelector('.header__button');
const buttonDown2 = document.querySelector('.title__button');
const buttonDown3 = document.querySelector('.text__button');
const buttonDown4 = document.querySelector('.voices__button');
const buttonDown5 = document.querySelector('.exterior__button');
const buttonDown6 = document.querySelector('.lettersIntro__button');
const buttonDown7 = document.querySelector('.lettersList__button');
const buttonDown8 = document.querySelector('.sendLetters__button');
const buttonDown9 = document.querySelector('.search__button');

buttonDown1.onclick = () =>{
  document.querySelector('.titles__container').scrollIntoView({behavior:'smooth'});
}
buttonDown2.onclick = () =>{
  document.querySelector('.intro__container').scrollIntoView({behavior:'smooth'});
}
buttonDown3.onclick = () =>{
  videosMainContainer.scrollIntoView({behavior:'smooth'});
}
buttonDown4.onclick = () =>{
  exteriorMainContainer.scrollIntoView({behavior:'smooth'});
}
buttonDown5.onclick = () =>{
  lettersMainContainer.scrollIntoView({behavior:'smooth'});
}
buttonDown6.onclick = () =>{
  document.querySelector('.letters__list').scrollIntoView({behavior:'smooth'});
}
buttonDown7.onclick = () =>{
  document.querySelector('.sendLetters__container').scrollIntoView({behavior:'smooth'});
}
buttonDown8.onclick = () =>{
  galeryMainContainer.scrollIntoView({behavior:'smooth'});
}
buttonDown9.onclick = () =>{
  footerMainContainer.scrollIntoView({behavior:'smooth'});
}

//Funcionalidad animacion cuando el titulo entra en viewport

const text1 = document.querySelector('.subtitle__container1');
const text2 = document.querySelector('.subtitle2');
const text3 = document.querySelector('.intro__container>.text__container');

const loadText = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}

const myObserver1 = new IntersectionObserver(loadText, {
  root: null,
  rootMargin: '0px -30px 0px 0px',
  threshold: 0.3
});

myObserver1.observe(text1);
myObserver1.observe(text2);
myObserver1.observe(text3);

//Funcionalidad del modal cuando miramos videos

const modalContainer = document.querySelector('.modal');

const toggleModal = () => {
  const className = 'active';
  const isActive = modalContainer.classList.contains(className);
  if(!isActive) {
    modalContainer.classList.add(className);
  } else {
    modalContainer.innerHTML='';
    modalContainer.classList.remove(className);
  }
} 

const viewVideo = (data) => {
  const fragmentHTML = `
    <button onclick="toggleModal">X</button>
    <iframe width="672" height="378" src=${data.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="data__container">
        <h3 class="title">${data.title}</h3>
        <p class="region">${data.region}</p>
        <p class="description">${data.description}</p>
      </div>
  `;
  modalContainer.innerHTML=fragmentHTML;
  toggleModal();
}

modalContainer.onclick = toggleModal;


// Render de los videos de manera dinamica

const videosContainer1 = document.querySelector('.voices__mosaic--container1');
const videosContainer2 = document.querySelector('.voices__mosaic--container2');

const renderVideo = (data, container, clase) => {
  
  const button = document.createElement('button');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');

  img1.src = data.image;
  img1.alt = 'image video';
  img2.src = './assets/icon/play-icon.png';
  img2.alt = 'icon play';

  img2.classList.add('icon');

  button.appendChild(img2);
  button.appendChild(img1);
  button.onclick = ()=> viewVideo(data);
  button.classList.add(clase);
  container.appendChild(button);
}

dataVideos1.forEach((item, index)=> {
  let clase = 'small';
  let container = videosContainer1;
  
  if(index > 4) {
    clase = 'long';
  }
  if(index > 7) {
    clase = 'medium';
  }
  if(index > 11) {
    clase = 'long';
    container = videosContainer2;
  }
  if(index > 14) {
    clase = 'medium';
    container = videosContainer2;
  }
  if(index > 19) {
    clase = 'small';
    container = videosContainer2;
  }
  
  renderVideo(item, container,clase);
});

//Funcionalidad reproduccion animacion de cartas cuando la sección entra en viewport

const video = document.querySelector('.video__letters');
const textLettersContainer = document.querySelector('.letter__intro>.text__container');

const animationText = () => {
  buttonDown6.style.opacity = '1';
  textLettersContainer.classList.add('visible');
}

const playVideo = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.play();
      setTimeout(animationText, 6200);
    } else {
      entry.target.currentTime = 0;
      textLettersContainer.classList.remove('visible');
    }
  });
}

const myObserver2 = new IntersectionObserver(playVideo, {
  root: null,
  rootMargin: '0px',
  threshold: 0.8
});

myObserver2.observe(video);


// Manejo render cartas por categoria

const containerCarruselLetters = document.querySelector('.letters__carrusel>.letters__content');

const renderLetters = (urlImage, index) => {
  
  const imageLetter = document.createElement('img');
  const figureContainer = document.createElement('figure');

  imageLetter.src = urlImage;
  imageLetter.alt = `imagen carta ${index}`;

  figureContainer.appendChild(imageLetter);
  
  return figureContainer;
}

const addLettersByCategory =  (category) => {
  const arrayLetters = dataLetters[category];
  containerCarruselLetters.innerHTML = '';

  arrayLetters.forEach((letterUrl, index)=>{
    containerCarruselLetters.appendChild(renderLetters(letterUrl,index));
  });

}

addLettersByCategory(1);

// Función mostrar cartas por categorias a traves de botones de categorias

const botonCategoria1 = document.querySelector('.category1');
const botonCategoria2 = document.querySelector('.category2');
const botonCategoria3 = document.querySelector('.category3');
const botonCategoria4 = document.querySelector('.category4');

botonCategoria1.onclick = () => {
  addLettersByCategory(0);
}
botonCategoria2.onclick = () => {
  addLettersByCategory(1);
}
botonCategoria3.onclick = () => {
  addLettersByCategory(2);
}
botonCategoria4.onclick = () => {
  addLettersByCategory(3);
}

// Manejo botones carrusel de cartas

const buttonBackLetters = document.querySelector('.letters__carrusel>.button__back');
const buttonForwardLetters = document.querySelector('.letters__carrusel>.button__forward');

let moveX = 0;

buttonBackLetters.onclick = () =>{
  const widthContainer = containerCarruselLetters.clientWidth;
  const addNum = -1*(widthContainer/containerCarruselLetters.childElementCount);

  moveX -= addNum;
  containerCarruselLetters.style.transform = `translateX(${moveX}px)`;
  buttonForwardLetters.style.display = 'block';
  if(moveX >= 0){
    buttonBackLetters.style.display = 'none';
  }
}
buttonForwardLetters.onclick = () =>{
  const widthContainer = containerCarruselLetters.clientWidth;
  const addNum = -1*(widthContainer/containerCarruselLetters.childElementCount);
  const limit = widthContainer - (addNum*-2);

  moveX += addNum;
  containerCarruselLetters.style.transform = `translateX(${moveX}px)`;
  buttonBackLetters.style.display = 'block';
  if(-moveX >= limit){
    buttonForwardLetters.style.display = 'none';
  }
}


// Manejo de funciones de botones de carrusel de imagenes

const buttonBack = document.querySelector('.button_back');
const buttonForward = document.querySelector('.button_forward');
const carruselContainer = document.querySelector('.carrusel__images');
const imageContainer = document.querySelectorAll('.image__container');

buttonForward.onclick = () => {
  const addPixelMoved = 282;
  const pixelsNow = carruselContainer.scrollLeft;
  carruselContainer.scrollLeft = pixelsNow + addPixelMoved;
}

buttonBack.onclick = () => {
  const addPixelMoved = 282;
  const pixelsNow = carruselContainer.scrollLeft;
  carruselContainer.scrollLeft = pixelsNow - addPixelMoved;
}

imageContainer.forEach((item)=> {
  item.onclick = (e) => {
    const fragmentHTML = `
      <button onclick="toggleModal">X</button>
      <img class="image" src="${e.target.src}" alt="${e.target.alt}">
    `;
    modalContainer.innerHTML=fragmentHTML;  
    toggleModal();
  }
});

// Manejo funcionalidad formulario de cartas

const buttonSend = document.querySelector('.button__send');
const errorContainer1 = document.querySelector('.description__container>.message__error');
const errorContainer2 = document.querySelector('.file__container>.message__error');
const errorContainer3 = document.querySelector('.state__request>.message__error');

const clearMessage = () => {
  setTimeout(()=>{
    errorContainer3.textContent = '';
  },4100);
}

const escapeHTML = (str) => {
  return str.replace(/[&<>"'/]/g, function (s) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      "/": '&#x2F;'
    }[s];
  });
}

buttonSend.onclick = (e)=> {
  e.preventDefault();
  const form = document.querySelector('#form__letter');
  const formData = new FormData(form);

  let condicion1, condicion2 = false;

  formData.forEach((value, key) =>{
    if(key=='description') {
      if(!value) {
        errorContainer1.textContent = 'Falta llenar el campo descripción.';
      } else {
        formData.set('description', escapeHTML(value));
        errorContainer1.textContent = '';
        condicion1 = true; 
      }
    } 
    if(key=='archivo') {
      if(!value.name){
        errorContainer2.textContent = 'Falta subir el archivo de imagen.';
      } else {
        errorContainer2.textContent = '';
        condicion2 = true; 
      }
    }
  })
  
  if(condicion1 && condicion2) {
    errorContainer3.textContent = 'Enviando postal, espera por favor.';
    fetch('http://localhost:5000/api/v1/send-letter', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      if(data.message == 'send') {
        form.reset();
        errorContainer3.textContent = 'Gracias hemos envidado tu postal.';
        clearMessage();
      }
    })
    .catch(err => {
      console.error(err)
      errorContainer3.textContent = 'No pudimos enviar tu postal, intenta más tarde.';
      form.reset();
      clearMessage();
    }); 
  }   
}
