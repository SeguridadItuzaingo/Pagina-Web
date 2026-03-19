export function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);
  
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-lg', 'shadow-black/50');
      navbar.classList.replace('bg-slate-950/80', 'bg-slate-950/95');
    } else {
      navbar.classList.remove('shadow-lg', 'shadow-black/50');
      navbar.classList.replace('bg-slate-950/95', 'bg-slate-950/80');
    }
  });

  const tl = gsap.timeline();
  tl.fromTo('.hero-elem', 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
  );

  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.fromTo(header,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8,
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
        }
      }
    );
  });

  gsap.fromTo('.service-card',
    { y: 40, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 0.6, stagger: 0.1,
      scrollTrigger: {
        trigger: '#services-grid',
        start: 'top 80%',
      }
    }
  );

  gsap.fromTo('.feature-text',
    { x: -50, opacity: 0 },
    {
      x: 0, opacity: 1, duration: 0.8,
      scrollTrigger: {
        trigger: '.feature-text',
        start: 'top 80%',
      }
    }
  );

  gsap.fromTo('.feature-image',
    { x: 50, opacity: 0 },
    {
      x: 0, opacity: 1, duration: 0.8,
      scrollTrigger: {
        trigger: '.feature-image',
        start: 'top 80%',
      }
    }
  );

  gsap.fromTo('.about-text',
    { x: 50, opacity: 0 },
    {
      x: 0, opacity: 1, duration: 0.8,
      scrollTrigger: {
        trigger: '.about-text',
        start: 'top 80%',
      }
    }
  );

  gsap.fromTo('.about-image',
    { x: -50, opacity: 0 },
    {
      x: 0, opacity: 1, duration: 0.8,
      scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
      }
    }
  );

  gsap.fromTo('.testimonial-card',
    { y: 40, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 0.6, stagger: 0.15,
      scrollTrigger: {
        trigger: '#testimonials-grid',
        start: 'top 80%',
      }
    }
  );

  gsap.fromTo('.contact-info',
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 80%',
      }
    }
  );

  gsap.fromTo('.contact-form-container',
    { opacity: 0, scale: 0.95 },
    {
      opacity: 1, scale: 1, duration: 0.8,
      scrollTrigger: {
        trigger: '.contact-form-container',
        start: 'top 80%',
      }
    }
  );
  
  gsap.fromTo('.map-container',
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: {
        trigger: '.map-container',
        start: 'top 85%',
      }
    }
  );
}
