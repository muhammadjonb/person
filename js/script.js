const cards = document.querySelector('.cards')

async function fetchUsers() {
  try {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    informationUsers(data);
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();

function informationUsers(users) {
    let str = '';

    users.map((user) =>{
        str +=`
        <div class="cards">
            <div class="card">
                <h2>${user.name}</h2>
                <span>${user.username}</span>
                <p>Email: <span>${user.email}</span></p>
                <p>Website: <span>${user.website}</span></p>
                <p>Address: <span>${user.address.street}</span></p>
                <p>Phone: <span>${user.phone}</span></p>
                <div class="card_btn">
                    <button onclick="getTodos(${user.id})"><a href="/pages/todo.html">Todos</a></button>
                    <button onclick="getPosts(${user.id})"><a href="/pages/posts.html">Posts</a></button>
                    <button onclick="getPhotos(${user.id})"><a href="/pages/photo.html">Photos</a></button>
                </div>
            </div>
        </div>
        `
    });

  cards.innerHTML = str;
}

function getTodos(id) {
  localStorage.setItem('userId', JSON.stringify(id));
}

function getPosts(id) {
  localStorage.setItem('userId', JSON.stringify(id));
}

function getPhotos(id) {
  localStorage.setItem('userId', JSON.stringify(id));
}