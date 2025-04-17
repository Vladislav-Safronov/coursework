document.addEventListener('DOMContentLoaded', function() {
    const gameForm = document.getElementById('add-game-form');
    const gamesList = document.querySelector('.games-list');
    
    // Обработка формы добавления игры
    gameForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем данные из формы
        const gameData = {
            name: document.getElementById('game-name').value,
            category: document.getElementById('game-category').value,
            price: document.getElementById('game-price').value,
            players: document.getElementById('game-players').value,
            age: document.getElementById('game-age').value,
            description: document.getElementById('game-description').value,
            image: document.getElementById('game-image').files[0]
        };
        
        console.log('Добавлена новая игра:', gameData);
        
        // Добавляем игру в список (для демонстрации)
        addGameToList(gameData);
        
        // Очищаем форму
        gameForm.reset();
        
        // Показываем уведомление
        alert('Игра успешно добавлена!');
    });
    
    // Функция для добавления игры в список
    function addGameToList(game) {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        
        // Получаем название категории
        const categoryNames = {
            'family': 'Семейные',
            'strategy': 'Стратегии',
            'party': 'Вечериночные',
            'children': 'Детские'
        };
        
        // Создаем карточку игры
        gameCard.innerHTML = `
            <div class="game-image">
                <img src="${game.image ? URL.createObjectURL(game.image) : 'https://via.placeholder.com/150'}" alt="${game.name}">
            </div>
            <div class="game-info">
                <h3>${game.name}</h3>
                <p><strong>Категория:</strong> ${categoryNames[game.category] || game.category}</p>
                <p><strong>Цена:</strong> ${game.price} руб.</p>
                <p><strong>Игроки:</strong> ${game.players}</p>
                <p><strong>Возраст:</strong> ${game.age}</p>
                <p>${game.description}</p>
            </div>
            <div class="game-actions">
                <button class="btn btn-edit">Редактировать</button>
                <button class="btn btn-delete">Удалить</button>
            </div>
        `;
        
        // Добавляем обработчики для кнопок
        gameCard.querySelector('.btn-delete').addEventListener('click', function() {
            if (confirm('Вы уверены, что хотите удалить эту игру?')) {
                gameCard.remove();
            }
        });
        
        gameCard.querySelector('.btn-edit').addEventListener('click', function() {
            // Заполняем форму данными для редактирования
            document.getElementById('game-name').value = game.name;
            document.getElementById('game-category').value = game.category;
            document.getElementById('game-price').value = game.price;
            document.getElementById('game-players').value = game.players;
            document.getElementById('game-age').value = game.age;
            document.getElementById('game-description').value = game.description;
            
            // Удаляем карточку после заполнения формы
            gameCard.remove();
        });
        
        // Добавляем карточку в список
        gamesList.appendChild(gameCard);
    }

});