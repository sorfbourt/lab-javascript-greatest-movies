    
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


//Long form
/* function getAllDirectors(moviesArray) {
    const arrayDirectors = moviesArray.map((movie) => {
         return movie.director
        })

    return arrayDirectors
} */

function getAllDirectors(moviesArray) {
    
    return moviesArray.map(movie => movie.director)
    
}

//console.log(getAllDirectors(movies))


function getAllDirectorsUnique(moviesArray) {
    
    return moviesArray.map(movie => movie.director).filter((director, index, arr) => arr.indexOf(director)===index)

}

//console.log(getAllDirectorsUnique(movies))






// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    //empty array
    if(moviesArray.length == 0){
        return 0
    }
    // if 0 steven spielberg, return 0
    
    else if(moviesArray.forEach(movie => moviesArray.director !== 'Steven Spielberg')){
        return "ZERO"
    }

    //return number of steven S movies that are dramas
    return (moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))).length
}



const noStevenSpielbergMovies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    }]

const twoStevenSpielbergMovies = [
    {
        title: 'Schindler"s List',
        year: 1993,
        director: 'Steven Spielberg',
        duration: '3h 15min',
        genre: ['Biography', 'Drama', 'History'],
        score: 8.9
    },
    {
        title: 'Saving Private Ryan',
        year: 1998,
        director: 'Steven Spielberg',
        duration: '2h 49min',
        genre: ['Drama', 'War'],
        score: 8.6
    }]
const emptyMovies = []


//console.log(howManyMovies(emptyMovies))
//console.log(howManyMovies(noStevenSpielbergMovies))
//console.log(howManyMovies(twoStevenSpielbergMovies))
//console.log(howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
 function scoresAverage(moviesArray) {
    if(moviesArray.length == 0){
        return 0
    }
    //const moviesWithScores = moviesArray.filter(movie => typeof movie.score === "number")
    
    const totalScores = moviesArray.reduce((totalScore, movie) => {
    if(typeof movie.score === "number") {
        return totalScore + movie.score
    }
    else{
        return totalScore + 0
    }
        
    }, 0)
    const averageScore = totalScores/moviesArray.length
    return parseFloat(averageScore.toFixed(2))
    
} 

const moviesOneWithoutScore = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: ''
    }]

    //console.log(scoresAverage(movies))

    //console.log(scoresAverage(moviesOneWithoutScore))
    //console.log(scoresAverage(emptyMovies))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))
    if(dramaMovies.length == 0){
        return 0
    }
    const totalScores = dramaMovies.reduce((totalScore, movie) => {
    if(typeof movie.score === "number") {
        return totalScore + movie.score
    }
    else{
        return totalScore + 0
    }
        
    }, 0)
    const averageScore = totalScores/dramaMovies.length
    return parseFloat(averageScore.toFixed(2)) 
}

    //console.log(dramaMoviesScore(movies))

    //console.log(dramaMoviesScore(moviesOneWithoutScore))
    //console.log(dramaMoviesScore(emptyMovies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayDuplicate = moviesArray.slice()
    const orderedByYearAndTitle = moviesArrayDuplicate.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title))
    //const orderedByYearAndTitle = moviesArrayDuplicate.sort((a, b) => a.year - b.year || a.title - b.title)
    return orderedByYearAndTitle
}
//console.log(orderByYear(movies))




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(movie => movie.title).sort().slice(0,20)

}
//console.log(orderAlphabetically(movies))



//'3h 22min'
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const newArr = JSON.parse(JSON.stringify(moviesArray))

 let durationString = ``
 let durationArray = []
 let durationConverted = 0

    for(i=0;i<newArr.length;i++){
        durationString = newArr[i].duration
        durationArray = durationString.match(/\d+/g)
        //console.log(durationArray)
        if(durationArray.length === 2){
            durationConverted = parseInt(durationArray[0])*60 + parseInt(durationArray[1])

        }
        else {
            durationConverted = parseInt(durationArray[0])*60

        }
        newArr[i].duration = durationConverted
    }

return newArr

}



//console.log(turnHoursToMinutes(movies) )







// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    const newArr = JSON.parse(JSON.stringify(moviesArray))
    
    
    newArr.reduce(movie =>{
        
        return
    })

}
