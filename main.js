diff --git a/main.js b/main.js
index f7b6b4d3c7390ecc4b88ef5ade4574e7c46676aa..156f0893fcd592222fc313d8d45ef32acd172258 100644
--- a/main.js
+++ b/main.js
@@ -96,50 +96,73 @@ function initMobileMenu() {
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
-  
+
   form.addEventListener('submit', (e) => {
     e.preventDefault();
+
     const btn = form.querySelector('button[type="submit"]');
     const originalText = btn.innerHTML;
-    
-    btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Enviando...';
+
+    const name = document.getElementById('name')?.value?.trim() ?? '';
+    const phone = document.getElementById('phone')?.value?.trim() ?? '';
+    const service = document.getElementById('service')?.value ?? 'otro';
+    const message = document.getElementById('message')?.value?.trim() ?? '';
+
+    const serviceMap = {
+      alarmas: 'Alarmas Monitoreadas',
+      camaras: 'Cámaras de Seguridad',
+      accesos: 'Control de Accesos',
+      perimetral: 'Seguridad Perimetral',
+      otro: 'Otro'
+    };
+
+    const waText = [
+      'Hola, quiero solicitar un presupuesto.',
+      `Nombre: ${name || 'No informado'}`,
+      `Teléfono: ${phone || 'No informado'}`,
+      `Servicio: ${serviceMap[service] || 'Otro'}`,
+      `Mensaje: ${message || 'Sin mensaje adicional'}`
+    ].join('\n');
+
+    btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Redirigiendo...';
     btn.disabled = true;
-    
+    lucide.createIcons();
+
+    const waUrl = `https://wa.me/543786617492?text=${encodeURIComponent(waText)}`;
+    window.open(waUrl, '_blank', 'noopener,noreferrer');
+
+    btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Listo, revisá WhatsApp';
+    btn.classList.replace('bg-brand-500', 'bg-emerald-600');
+    form.reset();
+    lucide.createIcons();
+
     setTimeout(() => {
-      btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Mensaje Enviado';
-      btn.classList.replace('bg-brand-500', 'bg-emerald-600');
-      form.reset();
-      
-      setTimeout(() => {
-        btn.innerHTML = originalText;
-        btn.classList.replace('bg-emerald-600', 'bg-brand-500');
-        btn.disabled = false;
-        lucide.createIcons();
-      }, 3000);
-      
+      btn.innerHTML = originalText;
+      btn.classList.replace('bg-emerald-600', 'bg-brand-500');
+      btn.disabled = false;
       lucide.createIcons();
-    }, 1500);
+    }, 2500);
   });
 }
