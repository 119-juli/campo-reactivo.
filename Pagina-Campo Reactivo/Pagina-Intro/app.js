document.addEventListener('DOMContentLoaded', function() {
    const letters = document.querySelectorAll('.logo-parts');
    
    // Animación de entrada
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('active');
        }, 100 * index); // 100ms de diferencia entre cada letra
    });
    
    // Animación de salida (opcional)
    setTimeout(() => {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.remove('active');
                letter.classList.add('fade');
            }, 50 * index); // Más rápida la salida
        });
        
        // Ocultar todo el intro después
        setTimeout(() => {
            document.querySelector('.intro').style.opacity = '0';
            setTimeout(() => {
                document.querySelector('.intro').style.display = 'none';
            }, 500);
        }, 500);
    }, 3000); // 3 segundos después
});