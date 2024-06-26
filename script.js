function typeTitle(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 50 * i);
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

document.addEventListener('DOMContentLoaded', () => {
  const username = 'Felipe-Dudek';
  const repoList = document.getElementById('list-repository');

  fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(repos => {
          repos.forEach(repo => {
              const listItem = document.createElement('div');
              listItem.classList.add('list-repository');
              const link = document.createElement('a');
              link.classList.add('list-repository-text');
              link.setAttribute('target', '_blank');
              const description = document.createElement('p');
              description.classList.add('list-repository-text');
              description.innerText = repo.description;
              link.href = repo.html_url;
              link.textContent = repo.name;
              listItem.appendChild(link);
              listItem.appendChild(description);
              repoList.appendChild(listItem);
          });
      })
      .catch(error => {
          console.error('Error when fetching repositories:', error);
      });
});
