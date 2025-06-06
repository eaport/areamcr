// noticias-crea.js
async function carregarNoticias() {
  const noticiasContainer = document.getElementById('noticias');
  try {
    const noticias = [ /* mesmas notícias simuladas */ ];
    noticiasContainer.innerHTML = '';
    noticias.forEach(noticia => {
      const div = document.createElement('div');
      div.className = 'noticia';
      div.innerHTML = `<h3><a href="${noticia.link}" target="_blank">${noticia.titulo}</a></h3>
                       <p class="data">${noticia.data}</p>`;
      noticiasContainer.appendChild(div);
    });
  } catch (error) {
    noticiasContainer.innerHTML = '<p>Erro ao carregar notícias.</p>';
  }
}
carregarNoticias();
