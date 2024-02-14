function changeImageAndShowText() {
    var imageElement = document.getElementById('myImage');
    var textElement = document.getElementById('textContainer');
    var cardSound = document.getElementById('cardSound');

    // Проверяем текущее состояние изображения и текста
    if (imageElement.src.endsWith('closed.png')) {
        // Если это открытка, меняем изображение и показываем текст
        imageElement.src = 'open.png';
        textElement.style.display = 'block';
    } else {
        // Если это новое изображение, возвращаемся к открытке и скрываем текст
        imageElement.src = 'closed.png';
        textElement.style.display = 'none';
    }

    cardSound.currentTime =  0; // Перемещаем указатель времени в начало
    cardSound.play();
}
