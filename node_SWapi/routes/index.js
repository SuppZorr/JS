var express = require('express');
var router = express.Router();
const axios = require('axios');
 

let data = {
  films : [],
  chars : [],
  loaderstyle : "display: none",
};


/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('https://swapi.dev/api/films/')
  .then((res1) => {
    let temp = res1.data.results;
    for (i = 0; i<temp.length; i++) {
      temp[i] = `<option value="${i}">${temp[i].title}</option>`
    };
     data.films = temp;
  })
  .catch( (err) => {
    if (err.res1) {
      console.log(err.response.data);
    } else console.log('Error', err.message);
  } )
  .then( () => {
    res.render('index', data);
  });
});

router.get('/:id', function(req, res, next) {
  axios.get('https://swapi.dev/api/films/')
  .then((res1) => {
    let tempChars = res1.data.results[Number(req.params.id)].characters;
    console.log('got links of chars');
    let temp = res1.data.results;
    for (i = 0; i<temp.length; i++) {
      temp[i] = `<option value="${i}">${temp[i].title}</option>`
    };
    let temp2 = temp[Number(req.params.id)].slice(7);
    temp[Number(req.params.id)] = '<option selected'+temp2;
    data.films = temp;

    const charactersP = tempChars.map( el => {
      return axios.get(el);
    });
    Promise.all(charactersP)
    .then((res2) => {
      let temp3 = res2.map(el => el.data.name);
      console.log('temp3',temp3);
      for (i = 0; i< temp3.length; i++) {
        data.chars[i] = `<li> ${temp3[i]}</li>`
      };
      data.chars = data.chars.join('');
    })
    .then( () => {
      res.render('index', data)
    });
   data.chars = [];

  });
  
});


module.exports = router;
