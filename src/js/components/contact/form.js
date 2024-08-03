export const useForm = () => {
    document
        .getElementById('form')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            // Удаляем предыдущие сообщения об ошибках и классы ошибок
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(function (message) {
                message.remove();
            });

            const errorInputs = document.querySelectorAll('.error');
            errorInputs.forEach(function (input) {
                input.classList.remove('error');
            });

            // Функция для создания и добавления сообщения об ошибке
            function createErrorMessage(element, message) {
                const errorMessage = document.createElement('span');
                errorMessage.classList.add('error-message');
                errorMessage.style.color = 'red';
                errorMessage.style.fontSize = '12px';
                errorMessage.innerText = message;
                element.appendChild(errorMessage);
            }

            // Получаем значения полей
            const firstName = document
                .querySelector('input[name="first-name"]')
                .value.trim();
            const lastName = document
                .querySelector('input[name="last-name"]')
                .value.trim();
            const email = document
                .querySelector('input[name="email"]')
                .value.trim();
            const phone = document
                .querySelector('input[name="phone"]')
                .value.trim();

            let isValid = true;

            // Проверка поля "First name"
            const firstNameInput = document.querySelector(
                'input[name="first-name"]',
            );
            const firstNameLabel = firstNameInput.parentElement;
            if (!firstName) {
                createErrorMessage(
                    firstNameLabel,
                    'Это поле является обязательным',
                );
                firstNameInput.classList.add('error');
                isValid = false;
            }

            // Проверка поля "Last name"
            const lastNameInput = document.querySelector(
                'input[name="last-name"]',
            );
            const lastNameLabel = lastNameInput.parentElement;
            if (!lastName) {
                createErrorMessage(
                    lastNameLabel,
                    'Это поле является обязательным',
                );
                lastNameInput.classList.add('error');
                isValid = false;
            }

            // Проверка поля "Email"
            const emailInput = document.querySelector('input[name="email"]');
            const emailLabel = emailInput.parentElement;
            if (!email) {
                createErrorMessage(
                    emailLabel,
                    'Это поле является обязательным',
                );
                emailInput.classList.add('error');
                isValid = false;
            } else {
                // Простейшая проверка формата email
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    createErrorMessage(emailLabel, 'Неверный формат email');
                    emailInput.classList.add('error');
                    isValid = false;
                }
            }

            // Проверка поля "Phone number"
            const phoneInput = document.querySelector('input[name="phone"]');
            const phoneLabel = phoneInput.parentElement;
            if (!phone) {
                createErrorMessage(
                    phoneLabel,
                    'Это поле является обязательным',
                );
                phoneInput.classList.add('error');
                isValid = false;
            } else {
                // Проверка, чтобы в номере телефона были только цифры, пробелы, скобочки и дефисы
                const phonePattern = /^[+\d\s()-]+$/;
                if (!phonePattern.test(phone)) {
                    createErrorMessage(
                        phoneLabel,
                        'Телефон должен содержать только цифры, пробелы, скобочки и дефисы',
                    );
                    phoneInput.classList.add('error');
                    isValid = false;
                }
            }

            // Если все поля заполнены правильно, выводим alert и сбрасываем форму
            if (isValid) {
                alert('Форма успешно отправлена!');
                document.getElementById('form').reset();
            }
        });
};
