/* function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser2(data))
    }
    function displayUser2 (data){
       const ul = document.getElementById('users-list')
       for (const user of data){
        console.log(user.username)
       }  
    } */

/*     function loadUser4(){
       fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => displayuser3(data))
    }
function displayuser3 (data){
const ul = document.getElementById('users-list')
for(const user of data){
   const li = document.createElement('li')
   li.innerText = 'user'
   ul.appendChild(li);
}
} */
function users(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => displayUser(data))
}
function displayUser(data){
const ul = document.getElementById('users-list')
for(const user of data){
   const li = document.createElement('li')
   li.innerText = user.email
   ul.appendChild(li);
}
}
