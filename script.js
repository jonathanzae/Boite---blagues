fetch('https://www.blagues-api.fr/api/random', {
  headers: {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODg3NzAxNDA3OTIxMjIxNjg0IiwibGltaXQiOjEwMCwia2V5IjoiTks5RGVqVjJGRUJ6elQ1VTlXb1V2ZVBMY3NHb0hWdEVLUkd3ZzRZS09iZHo0bEh5b3EiLCJjcmVhdGVkX2F0IjoiMjAyNC0xMS0xNlQxMzo0MTo1OCswMDowMCIsImlhdCI6MTczMTc2NDUxOH0.AxMdITtkU4oz8HBtt572-KNcoAVw69WiD0AcH9wxQ04
`
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data)

    function createJoke() {

      let jokeType = data.type;
      let jokeTitle = data.joke;
      let jokeAnswer = data.answer;

      let p1 = document.getElementById("type");
      p1.innerHTML = jokeType;

      let p2 = document.getElementById("joke");
      p2.innerHTML = jokeTitle;

      let p3 = document.getElementById("answer");
      p3.innerHTML = jokeAnswer;

    }

    createJoke()

  })

let button = document.querySelector('.button');

function showJokes() {
  location.reload();
}

button.addEventListener("click", showJokes);