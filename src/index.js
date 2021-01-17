// fetch('https://dog.ceo/api/breeds/image/random/4')
//   .then(response => response.json())
//   .then(data => console.log(data));












document.addEventListener('DOMContentLoaded', function(e) {

  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(response => response.json())
  .then(data => data.message.forEach(element => postDogs(element)))

  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    breeds = Object.keys(data.message)
    renderBreeds(breeds);
    addBreedSelectListener();
  })
  
})
//data.message.forEach(element => renderBreeds(element)))

//



function postDogs(dogData) {
  const dogImages = document.querySelector('#dog-image-container')
  let dogImg = document.createElement('img')
  dogImg.src = dogData
  dogImg.style.height = '200px';
  dogImg.style.padding = '2px';
  dogImages.append(dogImg)  
}



function renderBreeds(breed) {
  //debugger
  

  for (let i = 0; i < breed.length; i++) {
    const breedUL = document.querySelector('#dog-breeds')
    let breedLI = document.createElement('li')
    breedLI.textContent = breed[i]
    //debugger
    breedUL.append(breedLI)
    breedListener(breedLI)
  }
  
}


function breedListener(list) {
  list.addEventListener('click', function(e) {
    e.target.style.color = 'blue'
  })
}


function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');

  breedDropdown.addEventListener('change', function(e) {
      startsWith(e.target.value)
  })
}


function startsWith(letter) {
  
}


