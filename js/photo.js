const postsDiv = document.querySelector(".cards_photos");

async function fetchPhoto() {
  let id = JSON.parse(localStorage.getItem("userId"));
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/albums");
    let data = await res.json();
    let filteredData = data.filter((td) => td.userId === id);
    displayPhoto(filteredData);
  } catch (error) {
    console.log(error);
  }
}

fetchPhoto();

function displayPhoto(todos) {
  let str = "";

  todos.map((todo) => {
    str += `
      <div class="card_photos">
            <h3>${todo.title}</h3>
            <button>Photo</button>
        </div>
    `;
  });

  postsDiv.innerHTML = str;
}
