// All genre lists are defined in javascript.js and then changed here hopefully//

function updatemovie () {
    formData = document.getElementById("addForm")
    genre = formData[0].value
    if (genre == "Drama"){ Drama.push(formData[1].value)}
    if (genre == "Horror"){ Horror.push(formData[1].value)}
    if (genre == "Comedy"){ Comedy.push(formData[1].value)}
    if (genre == "Thriller"){ Thriller.push(formData[1].value)}
}

document.addEventListener("DOMContentLoaded", function(event){
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
        function addToList(arr) { 
            arr.forEach(function (element, index) { 
            movielist.push(`${element}`)
            movieOption = document.createElement('option')
            movieOption.setAttribute("value", element);
            allmovies.appendChild(movieOption);
        
        })}
                

    //Genre definition and lists and randomizing them //  

    var movielist = []
    var allmovies = document.getElementById('allmovies')
     addToList(Horror)
     addToList(Comedy)
     addToList(Drama)
     addToList(Thriller)


     function removemovie() {
         submission = document.getElementById('removeForm')[0].value
            if (Horror.indexOf(submission) > 0 ) { Horror.splice(Horror.indexOf(submission), 1);  }
            if (Drama.indexOf(submission) > 0 ) { Drama.splice(Thriller.indexOf(submission), 1); }
            if (Thriller.indexOf(submission) > 0 ) { Thriller.splice(Thriller.indexOf(submission), 1); }
            if (Comedy.indexOf(submission) > 0 ) { Comedy.splice(Thriller.indexOf(submission), 1); }

    }
    document.querySelector('#addSubmit').onclick = updatemovie;
    document.querySelector('#removeSubmit').onclick = removemovie;

    })
