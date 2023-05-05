/* function loadposts(){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => displayPost(data))
}
function displayPost(posts){
    const postContainer = document.getElementById('post-container')
    for (const post of posts){
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        console.log(post)
        postDiv.innerHTML = `
        <h4>user-${post.userId}</h4>
        <h5>post :${post.title}</h5>
        <p>post description${post.body}</p>
        `
        postContainer.appendChild(postDiv)
        }
}
loadposts() */

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
function displayPost(posts){
const postContainer = document.getElementById('post-container')
for(const post of posts){

    console.log(post)
    const postDiv = document.createElement('div')
    postDiv.classList.add('post')
    postDiv.innerHTML = `
    <h4>user-${post.userId} </h4>
    <h5>title-${post.title} </h5>
    <p>description :${post.body} </p>
    `
    postContainer.appendChild(postDiv)
}
}
loadPosts()