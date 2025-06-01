// Arquivo específico para efeitos parallax
document.addEventListener('DOMContentLoaded', function() {
    // Elementos com efeito parallax
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    // Função para aplicar o efeito parallax
    function parallax() {
        const scrollPosition = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = 0.5; // Velocidade do efeito (quanto menor, mais lento)
            const yPos = -(scrollPosition * speed);
            element.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        });
    }
    
    // Aplicar o efeito ao rolar a página
    window.addEventListener('scroll', function() {
        requestAnimationFrame(parallax);
    });
    
    // Inicializar o efeito
    parallax();
});
