// Ждун HTML
document.addEventListener('DOMContentLoaded', function() {

    // Навыки
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Плеер
    const videoBlock = document.querySelector('.video-block');
    const playButton = document.querySelector('.play-button');
    const video = document.getElementById('promo-video');

    // Прослушка клика на блок с видео
    videoBlock.addEventListener('click', () => {
        // Проигрывание видео
        video.play();
        // Добавляю класс, чтобы скрыть кнопку воспроизведения
        videoBlock.classList.add('video-played');
    });

});