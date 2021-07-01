
    //Genre definition and lists and randomizing them // 

    var Horror = shuffle(["The Haunting in Connecticut", "Midnight Meat Train", "Hatchet", "Mother", "Banshee Chapter", "The Blackcoat's Daughter","Borderland","Candyman"])
    var Comedy = shuffle(["Just Friends", "Jawbreaker", "The Truman Show", "Being John Malkovich", "The House"])
    var Drama = shuffle(["Gladiator", "Project Almanac", "The Father","True Romance", "Pokemon: The Movie 2000", "There Will be Blood", "Gangs of New York"])
    var Thriller = shuffle([])
    listOfGenres = {"Horror": Horror, "Comedy": Comedy, "Drama":Drama, "Thriller":Thriller} 

 
     
     function execute() {

            var value = document.getElementById("select").value
            if (value == "Drama"){ movielist = Drama}
            if (value == "Horror"){ movielist = Horror}
            if (value == "Comedy"){ movielist = Comedy}
            if (value == "Thriller"){ movielist = Thriller}
            document.getElementById("select").classList.add("invisible")
            document.getElementById("span").classList.add("invisible")
            
            for (var i in movielist) {
            var newmovie = document.createElement('div');
            newmovie.id = movielist[i]; newmovie.className = "container original";
            newmovie.innerHTML = movielist[i];
            document.querySelector('.bulk').appendChild(newmovie);
            }
            
            document.querySelectorAll('.original').forEach(item => {
                item.addEventListener('click', event => {
                    item.classList.add('dynamic')
                    item.classList.remove('original')
                    document.querySelectorAll('.original').forEach(item => {
                        item.classList.remove('original')
                        item.classList.add('invisible')})
                    })
                })
        }

    // your code here

    function shuffle(array) {
        var currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
        }
                

