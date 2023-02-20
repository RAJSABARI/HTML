// document.body.innerText = 'hello world'
// setTimeout(
//         () => {
//             document.body.innerHTML = "new to dom"
//                 // document.body.style.backgroundColor = "black"
//         },
//         2000
//     )
// setTimeout(
//     () => {
//         document.body.innerHTML = "<p> WELCOME TO SCRIPT <\p>"
//             // document.body.style.backgroundColor = "black"
//     },
//     5000
// )

// setTimeout(
//     () => {
//         const body = document.getElementById('main');
//         body.innerHTML = "<p>welcome to script</p>";
//         console.log(body);

//     },
//     3000
// )
// const button = document.getElementById('summit');
// const pTag = document.getElementById('insert');
// button.addEventListener('click', (event) => {
//     pTag.innerHTML = "WELCOME"


// })

const form = document.getElementById('formc');

form.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault();
    const user_input = document.getElementById("usm");
    console.log(user_input.value);
    const pwd_input = document.getElementById("pwd");
    console.log(pwd_input.value);
    document.body = "<p>pwd"

})