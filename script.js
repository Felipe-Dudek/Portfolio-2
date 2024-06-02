function typeTitle(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 75 * i);
    });
}

function goToElement(id){
    const element = document.getElementById(id);
    const offsetVh = -10;
    const offsetPixels = offsetVh * window.innerHeight / 100;
    const elementPosition = element.offsetTop;
    window.scrollTo({
        top: elementPosition + offsetPixels,
        behavior: 'smooth'
    });
    //typeTitle(element.children[0]);
}

const title = document.querySelectorAll("h1");
title.forEach(e => {
    typeTitle(e);
});

const url = 'https://api.github.com/users/Felipe-Dudek/repos';

fetch(url)
.then(response => response.json())
.then(data => {
  data.forEach(e => {
    let str = e.contents_url;
    str = str.replace("{+path}", "")
    //console.log(str);
  });
})
.catch(error => {
  console.error('Erro ao obter os repositórios:', error);
});
