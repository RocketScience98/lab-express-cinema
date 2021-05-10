const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {
Movie.find()
.then(moviesDB=>{
    console.log("Movies shown",moviesDB);
res.render('movies',{movies: moviesDB});
}).catch(e=> console.log("DB error",e))
})

router.get("/movie/:id", (req, res, next) => {
    const { id } = req.params;
    Movie.findById(id)
      .then((moviebyId) => {
        console.log("Movie Chosen", moviebyId);
        res.render("movie-details", { movie: moviebyId });
      })
      .catch((error) => {
        console.log("Error while showing movie details", error);
      });
  });

module.exports = router;
