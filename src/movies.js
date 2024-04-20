// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    var directors = moviesArray.map(movie => movie.director)
    return [...new Set(directors)]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director == 'Steven Spielberg').length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    var sum = moviesArray.reduce((acc, movie) => acc + movie.score,0)
    return Math.round(sum / moviesArray.length)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    var dramas = moviesArray.filter(movie => movie.genre.includes('Drama'))
    return dramas.reduce((acc, drama) => acc + drama.score,0) / dramas.length
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.toSorted((a,b) => a.year - b.year).sort((a,b) => {if (a.year == b.year) return -1})
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    var sorted = moviesArray.map(movie => movie.title).sort()
    return sorted.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    var durationsStr = moviesArray.map(movie => movie.duration)
    var durationsNum = durationsStr.map(d => {
        let hours = d[0]
        let minute1 = d[3] || ''
        let minute2 = d[4] && d[4] != 'm' ? d[4] : ''
        let minutes = minute1.concat(minute2) || 0
        return parseInt(hours) * 60 + parseInt(minutes)
    })
    var newMoviesArr = []
    for (let i = 0; i < moviesArray.length; i++) {
        moviesArray[i].duration = durationsNum[i]
        newMoviesArr.push(moviesArray[i])
    }
    return newMoviesArr
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    var years = [...new Set(moviesArray.map(movie => movie.year))]
    var averages = years.map(year => {
        var moviesInYear = moviesArray.filter(movie => movie.year == year)
        var sum = moviesInYear.reduce((acc, movie) => acc + movie.score ,0)
        return sum / moviesInYear.length
    })
    var index = averages.indexOf(Math.max(...averages))
    return 'The best year was ' +years[index]+ ' with an average score of ' + Math.max(...averages)
}