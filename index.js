const authBtn = document.getElementById('authBtn');
const mainMenu = document.getElementById('mainMenu');

// Состояние авторизации (по умолчанию - не авторизован)
let isLoggedIn = false;

authBtn.addEventListener('click', function() {
    if (!isLoggedIn) {
        // Меняем состояние на "авторизован"
        isLoggedIn = true;

        // Создаем новый HTML для авторизованного пользователя
        mainMenu.innerHTML = `
            <li><a class="header__nav-link" href="#">Главная</a></li>
            <li><a class="header__nav-link" href="admin.html" id="admin">Профиль</a></li>
            <li><a class="header__nav-link" href="#">Корзина</a></li>
        `;
        authBtn.textContent = 'Выйти';
    }
    else if (isLoggedIn) {
        // Меняем состояние на "не авторизован"
        isLoggedIn = false;

        // Создаем новый HTML для авторизованного пользователя
        mainMenu.innerHTML = `
            <li><a class="header__nav-link" href="#">Главная</a></li>
            <li><a class="header__nav-link" href="#">О нас</a></li>
            <li><a class="header__nav-link" href="#">Услуги</a></li>
            <li><a class="header__nav-link" href="#">Контакты</a></li>
        `;
        authBtn.textContent = 'Войти';
    }
});


  