let selectEl = document.querySelector('.filmlist');
let loaderEl = document.querySelector('.loader');

selectEl.addEventListener('change', () => {
    document.location.replace(`/${selectEl.value }`);
    loaderEl.style.display = "flex";

 });

// searchButton.addEventListener('click', () => {
//     document.location.replace(`/${ }`)
// });

 
 
