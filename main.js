let ism = document.querySelector("#ism")
let login = document.querySelector("#login")
let password = document.querySelector("#password")
let button = document.querySelector("button")

let backend = {
    ism: "Munisa",
    login: "munisa",
    password: "123",
};

console.log(login);
console.log(password);
console.log(button)
button.addEventListener("click", function (e) {
    e.preventDefault();

    if (backend.login === login.value && backend.password === password.value)
    {
        ism.innerHTML = "Successfully logged in!";
        ism.style.color = "green";
    } else {
        ism.innerHTML = "Account is not available";
        ism.style.color = "red";
    }
})