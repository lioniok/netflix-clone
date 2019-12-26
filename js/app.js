const showModalButton = document.getElementById('showModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const modalButton = document.getElementById('showModalButton');
const modal = document.getElementById('modal');
const registerButton = document.getElementById('registerButton');
const userGrid = document.querySelector('.user-grid');

(function() {
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => users.forEach(user => {
            userGrid.insertAdjacentHTML('beforeend', `
                <div class="user">
                    <h3 class="user__title">${user.username}</h3>
                    <img class="user__image" src="./img/user-icon.svg" alt="user icon">
                </div>
            `);
        }))
        .catch(error => alert(error));
})();

showModalButton.addEventListener('click', event => {
    modal.style.opacity = 1;
    modal.style.zIndex = 1;
});

closeModalButton.addEventListener('click', event => {
    modal.style.opacity = 0;
    modal.style.zIndex = -1;
});

registerButton.addEventListener('click', event => {
    event.preventDefault();
    const [usernameInput, emailInput, passwordInput] = document.querySelectorAll('.modal__form-input');
    const username = usernameInput.value,
          email = emailInput.value,
          password = passwordInput.value;
    const data = {
        username,
        email,
        password
    }
    fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(error => alert(error));
    usernameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
});