console.log("Connected")

        let movies = [];
            const addMovie = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let movie = {
                id: Date.now(),
                title: document.getElementById('title').value,
                year: document.getElementById('yr').value
            }
            movies.push(movie);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {movies} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

            //saving to localStorage
            localStorage.setItem('MyMovieList', JSON.stringify(movies) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addMovie);
        });