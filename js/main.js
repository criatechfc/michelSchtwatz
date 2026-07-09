/* ============================================
   MICHEL REPRESENTAÇÕES - LANDING PAGE
   JavaScript - Interações e Funcionalidades
   ============================================ */

// Referências principais
const siteHeader = document.querySelector('header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

function closeMobileMenu() {
  if (navLinks) navLinks.classList.remove('active');
  if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
}

function scrollToTarget(target) {
  const headerHeight = siteHeader ? siteHeader.offsetHeight : 0;
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// Um único listener delegado cuida de: fechar o menu mobile (se aberto)
// e rolar até a seção certa, sem depender da ordem de execução de listeners separados.
document.addEventListener('click', function (e) {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;

  const href = anchor.getAttribute('href');
  if (href === '#') return;

  const target = document.querySelector(href);
  if (!target) return;

  e.preventDefault();
  closeMobileMenu();
  scrollToTarget(target);
});

// Adiciona classe 'scrolled' ao header quando faz scroll
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 50) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Mobile menu toggle (abrir/fechar pelo botão hambúrguer)
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });
}

// Animação de entrada para elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observa elementos com classe 'fade-in'
document.querySelectorAll('.fade-in').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Ripple effect para botões
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// Contador de estatísticas
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Inicia contadores quando visíveis
const statItems = document.querySelectorAll('.stat-item');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsAnimated) {
      statsAnimated = true;
      statItems.forEach(item => {
        const number = item.querySelector('.stat-number');
        if (number) {
          const target = parseInt(number.getAttribute('data-target')) || 0;
          animateCounter(number, target);
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stat-strip');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Lazy loading de imagens
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Validação de formulários
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validação básica
    const inputs = this.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('error');
        isValid = false;
      } else {
        input.classList.remove('error');
      }
    });

    if (isValid) {
      // Aqui você pode enviar o formulário
      console.log('Formulário válido');
      // Mostrar mensagem de sucesso
      const successMsg = document.createElement('div');
      successMsg.className = 'success-message';
      successMsg.textContent = 'Mensagem enviada com sucesso!';
      this.appendChild(successMsg);
      
      setTimeout(() => {
        this.reset();
        successMsg.remove();
      }, 3000);
    }
  });

  // Remove erro ao digitar
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', function() {
      this.classList.remove('error');
    });
  });
});

// Efeito parallax para imagens
window.addEventListener('scroll', () => {
  document.querySelectorAll('[data-parallax]').forEach(element => {
    const scrollPosition = window.pageYOffset;
    const elementOffset = element.offsetTop;
    const distance = scrollPosition - elementOffset;
    const parallaxValue = distance * 0.5;
    element.style.transform = `translateY(${parallaxValue}px)`;
  });
});

// Detecta modo escuro do sistema
function detectDarkMode() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.body.classList.add('dark-mode');
  }
}

// Inicializa dark mode
detectDarkMode();

// Monitora mudanças de preferência de tema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (e.matches) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

// Função para abrir WhatsApp
function openWhatsApp() {
  const phone = '5511999999999'; // Substitua pelo número real
  const message = 'Olá! Gostaria de saber mais sobre os serviços da Michel Representações.';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Adiciona listener ao botão WhatsApp
const floatWa = document.querySelector('.float-wa');
if (floatWa) {
  floatWa.addEventListener('click', openWhatsApp);
}

// Função para copiar texto
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = 'Copiado para a área de transferência!';
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  });
}

// Inicializa tooltips
document.querySelectorAll('[data-tooltip]').forEach(element => {
  element.addEventListener('mouseenter', function() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = this.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);
    
    const rect = this.getBoundingClientRect();
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
    tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
    
    setTimeout(() => tooltip.classList.add('show'), 10);
    
    this.addEventListener('mouseleave', () => {
      tooltip.classList.remove('show');
      setTimeout(() => tooltip.remove(), 300);
    }, { once: true });
  });
});

// Performance: Prefetch links importantes
function prefetchLinks() {
  document.querySelectorAll('a[data-prefetch]').forEach(link => {
    const href = link.getAttribute('href');
    const prefetch = document.createElement('link');
    prefetch.rel = 'prefetch';
    prefetch.href = href;
    document.head.appendChild(prefetch);
  });
}

prefetchLinks();

// Log de inicialização
console.log('Michel Representações - Landing Page carregada com sucesso!');