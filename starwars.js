// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

let filmes = [];
let moviesnav = document.querySelector('#movies>ul');

$.getJSON('http://swapi.co/api/films/', function(data) {
	  let i = 0;
	  filmes = data;
	  console.log(filmes.results[0]);
	  console.log(moviesnav.childNodes);
	  console.log(moviesnav.childNodes[1].firstElementChild);
	  
		let opening = document.querySelector('.reading-animation');	

		for (let i = 0; i < data.results.length; i++) {
			let numero_episodio = data.results[i].episode_id;
			moviesnav.innerHTML = moviesnav.innerHTML + '<li id=episode' + data.results[i].episode_id + ' data-episodeIndex=' + i + '>Episode '+ numero_episodio +'</li>';
		}
		//moviesnav.nextSibling.childNodes[0] = filmes.results[4].title;
		//moviesnav.innerHTML = '<li data-episode-url="'+filmes.results[5].title+'">Episode I</li>';
		//moviesnav.insertBefore(HTMLNovo, moviesnav.firstChild.nextSibling);

		let lista_episodios = document.querySelectorAll('#movies>ul>li');	

		for (let i = 1; i <= lista_episodios.length; i++) {
			let episodio = document.querySelector('#episode'+i);
			episodio.addEventListener('click', function(){
				let n_episodio = episodio.getAttribute('data-episodeIndex');
				opening.innerHTML = '';

				opening.append('Episode ' + data.results[n_episodio].episode_id) + '\n';
				opening.append(data.results[n_episodio].title + '\n\n');	
				opening.append(data.results[n_episodio].opening_crawl);		
			});
		}
	  
	 
})
	
