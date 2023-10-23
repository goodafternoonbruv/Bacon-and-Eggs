// public/script.js

document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save-button');
    const form = document.getElementById('data-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting and reloading the page
        saveData();
    });

    function saveData() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const name = nameInput.value;
        const email = emailInput.value;

        if (name && email) {
            const data = { name, email };
            fetch('/saveData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.text())
                .then((message) => {
                    responseMessage.style.display = 'block';
                    responseMessage.textContent = message;
                })
                .catch((error) => {
                    responseMessage.style.display = 'block';
                    responseMessage.textContent = 'Error saving data on the server';
                });
        }
    }
});
