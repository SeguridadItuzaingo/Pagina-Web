import { servicesData, featuresData, testimonialsData } from './data.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderFeatures();
  renderTestimonials();
  
  lucide.createIcons();
  
  initMobileMenu();
  initFormHandler();
  
  initAnimations();
});

function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;
  
  let html = '';
  servicesData.forEach(service => {
    html += `
      <div class="service-card bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-brand-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-brand-500/10">
        <div class="w-14 h-14 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 group-hover:bg-brand-500/10 transition-all duration-300">
          <i data-lucide="${service.icon}" class="w-7 h-7"></i>
        </div>
        <h4 class="text-xl font-bold text-white mb-3">${service.title}</h4>
        <p class="text-slate-400 leading-relaxed">${service.description}</p>
      </div>
    `;
  });
  container.innerHTML = html;
}

function renderFeatures() {
  const container = document.getElementById('features-list');
  if (!container) return;
  
  let html = '';
  featuresData.forEach(feature => {
    html += `
      <div class="flex gap-4">
        <div class="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-brand-400 shrink-0 border border-slate-700">
          <i data-lucide="${feature.icon}" class="w-6 h-6"></i>
        </div>
        <div>
          <h4 class="text-lg font-bold text-white mb-1">${feature.title}</h4>
          <p class="text-slate-400">${feature.description}</p>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;
  
  let html = '';
  testimonialsData.forEach(testimonial => {
    const stars = Array(testimonial.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-current"></i>').join('');
    
    html += `
      <div class="testimonial-card bg-slate-950 border border-slate-800 p-8 rounded-2xl flex flex-col h-full relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-bl-full pointer-events-none"></div>
        <div class="flex items-center gap-1 text-yellow-400 mb-6">
          ${stars}
        </div>
        <p class="text-slate-300 mb-8 flex-grow italic relative z-10">"${testimonial.content}"</p>
        <div class="flex items-center gap-4 mt-auto">
          <div class="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-bold text-brand-400 border border-slate-700">
            ${testimonial.name.charAt(0)}
          </div>
          <div>
            <h5 class="text-white font-bold">${testimonial.name}</h5>
            <p class="text-slate-500 text-sm">${testimonial.role}</p>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-link');
  let isOpen = false;

  btn.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
      menu.classList.add('open');
      document.body.classList.add('menu-open');
      btn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
    } else {
      menu.classList.remove('open');
      document.body.classList.remove('menu-open');
      btn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    }
    lucide.createIcons();
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      isOpen = false;
      menu.classList.remove('open');
      document.body.classList.remove('menu-open');
      btn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
      lucide.createIcons();
    });
  });
}

function initFormHandler() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Enviando...';
    btn.disabled = true;
    
    setTimeout(() => {
      btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Mensaje Enviado';
      btn.classList.replace('bg-brand-500', 'bg-emerald-600');
      form.reset();
      
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.replace('bg-emerald-600', 'bg-brand-500');
        btn.disabled = false;
        lucide.createIcons();
      }, 3000);
      
      lucide.createIcons();
    }, 1500);
  });
}
