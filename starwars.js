// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

let filmes = [];
let moviesnav = document.querySelector('#movies');

$.getJSON('http://swapi.co/api/films/', function(data) {
	  let i = 0;
	  filmes = data;
	  console.log(filmes.results[0]);
	  console.log(moviesnav.childNodes);
	  console.log(moviesnav.childNodes[1].firstElementChild);
	  
	  for (let resultado of filmes.results) {
		  moviesnav.childNodes[1].children[i].innerHTML=resultado.title;
		  i++;
	  }
	  
	  //moviesnav.nextSibling.childNodes[0] = filmes.results[4].title;
	  //moviesnav.innerHTML = '<li data-episode-url="'+filmes.results[5].title+'">Episode I</li>';
//moviesnav.insertBefore(HTMLNovo, moviesnav.firstChild.nextSibling);
})
	
