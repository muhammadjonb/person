const postsDiv = document.querySelector(".cards_posts");

async function fetchPosts() {
  let id = JSON.parse(localStorage.getItem("userId"));
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    let filteredData = data.filter((td) => td.userId === id);
    displayPosts(filteredData);
  } catch (error) {
    console.log(error);
  }
}

fetchPosts();

function displayPosts(todos) {
  let str = "";

  todos.map((todo) => {
    str += `
      <div class="card_posts">
        <h3>${todo.title}</h3>
        <p>${todo.body}</p>
    </div>
    `;
  });

  postsDiv.innerHTML = str;
}
