// Efeitos Parallax
document.addEventListener('DOMContentLoaded', function() {
    // Configuração das imagens de fundo para o efeito parallax
    const parallaxHero = document.getElementById('parallax-hero');
    if (parallaxHero) {
        parallaxHero.style.backgroundImage = "url('img/hero-bg.jpeg')";
    }

    // Efeito parallax ao rolar a página
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        // Parallax para o hero
        if (parallaxHero) {
            parallaxHero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
        
        // Efeito de aparecimento gradual para os elementos
        const fadeElements = document.querySelectorAll('.anime-card, .category-item, .news-item');
        fadeElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    });

    // Inicialização dos contadores para a seção de comunidade
    animateCounters();
});

// Animação dos contadores na seção de comunidade
function animateCounters() {
    const counters = document.querySelectorAll('#members-count, #discussions-count, #reviews-count, #events-count');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = parseInt(counter.innerText.replace(/,/g, ''));
        const count = 0;
        const increment = target / speed;
        
        const updateCount = () => {
            const currentCount = parseInt(counter.innerText.replace(/,/g, ''));
            if (currentCount < target) {
                counter.innerText = Math.ceil(currentCount + increment).toLocaleString();
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        
        updateCount();
    });
}

// Efeito de glitch para textos
document.addEventListener('DOMContentLoaded', function() {
    const glitchTexts = document.querySelectorAll('.glitch-text');
    
    glitchTexts.forEach(text => {
        const content = text.getAttribute('data-text');
        text.setAttribute('data-text', content);
    });
});

// Efeito de hover para os cards de anime
document.addEventListener('DOMContentLoaded', function() {
    const animeCards = document.querySelectorAll('.anime-card');
    
    animeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });
});

// Efeito de partículas para o fundo (ficção científica)
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Configuração das partículas
    const particlesArray = [];
    const numberOfParticles = 100;
    
    // Classe para as partículas
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = `rgba(106, 17, 203, ${Math.random() * 0.5})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.size > 0.2) this.size -= 0.01;
            
            // Reposicionar partículas que saem da tela
            if (this.x < 0 || this.x > canvas.width) {
                this.x = Math.random() * canvas.width;
            }
            if (this.y < 0 || this.y > canvas.height) {
                this.y = Math.random() * canvas.height;
            }
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Inicializar partículas
    function init() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }
    
    // Animar partículas
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            
            // Conectar partículas próximas
            for (let j = i; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(106, 17, 203, ${0.2 - distance/500})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    // Redimensionar canvas quando a janela for redimensionada
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    init();
    animate();
});

// Efeito de parallax para a seção de notícias
document.addEventListener('DOMContentLoaded', function() {
    const newsSection = document.querySelector('.news-section');
    if (newsSection) {
        newsSection.style.backgroundImage = "url('img/news-bg.jpeg')";
    }
});

// Efeito de digitação para textos
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.hero-content p');
    if (typingElement) {
        const text = typingElement.innerText;
        typingElement.innerText = '';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                typingElement.innerText += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 50);
    }
});

// Efeito de hover 3D para cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.anime-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
});

// Navegação suave para links de âncora
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Efeito de destaque para a navbar ao rolar
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});
