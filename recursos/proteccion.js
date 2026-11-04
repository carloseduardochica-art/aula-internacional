/* =====================================================================
   PROTECCIÓN DE LAS ACTIVIDADES
   Disuade de copiar, imprimir y fotografiar. No es infalible: ninguna
   página web puede bloquear la tecla Impr Pant ni la cámara de un
   celular. Por eso, además de bloquear lo que se puede, difumina el
   contenido cuando la ventana pierde el foco y firma la pantalla con el
   nombre y la cédula del estudiante: una foto compartida dice de quién es.

   Se incluye al final del <body>. Si la página tiene #id-nom e #id-ced,
   la marca de agua aparece sola en cuanto el estudiante se identifica.
   ===================================================================== */
(function(){
  'use strict';

  // Los campos de escritura siguen admitiendo seleccionar su propio texto
  // para corregirlo; lo que no admiten es pegar (lo bloquea cada actividad).
  function esCampo(el){
    return el && (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT');
  }

  /* ---------- copiar, cortar, seleccionar, clic derecho ---------- */
  ['copy','cut'].forEach(function(ev){
    document.addEventListener(ev, function(e){ e.preventDefault(); aviso('Copiar está desactivado en esta actividad.'); });
  });
  document.addEventListener('selectstart', function(e){ if(!esCampo(e.target)) e.preventDefault(); });
  document.addEventListener('contextmenu', function(e){ e.preventDefault(); });
  document.addEventListener('dragstart', function(e){ e.preventDefault(); });

  /* ---------- atajos: imprimir, guardar, ver código, copiar ---------- */
  document.addEventListener('keydown', function(e){
    var k = (e.key || '').toLowerCase();
    var mod = e.ctrlKey || e.metaKey;
    if(mod && (k === 'p' || k === 's' || k === 'u' || k === 'c' || k === 'x')){
      e.preventDefault(); e.stopPropagation();
      aviso(k === 'p' ? 'La impresión está desactivada. Al terminar descargue su acta en PDF.' : 'Esa acción está desactivada en esta actividad.');
    }
    if(k === 'printscreen'){
      velo(true);
      aviso('Las capturas de pantalla quedan marcadas con su nombre y cédula.');
      setTimeout(function(){ velo(false); }, 1500);
    }
  }, true);

  /* ---------- impresión desde el menú del navegador: hoja en blanco ---------- */
  var css = document.createElement('style');
  css.textContent =
    '@media print{body>*{display:none !important}' +
    'body::after{content:"Esta actividad no se imprime. Descargue su acta en PDF desde la propia actividad.";' +
    'display:block;font:16px Georgia,serif;padding:40px;text-align:center}}' +
    'body{-webkit-user-select:none;user-select:none}' +
    'textarea,input{-webkit-user-select:text;user-select:text}' +
    '#prot-velo{position:fixed;inset:0;z-index:9998;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);' +
    'background:rgba(246,246,244,.55);display:none;align-items:center;justify-content:center;' +
    'font:600 1rem "Segoe UI",system-ui,sans-serif;color:#0b3a66;text-align:center;padding:2rem}' +
    '#prot-marca{position:fixed;inset:0;z-index:9997;pointer-events:none;opacity:.07;overflow:hidden;' +
    'font:700 15px "Segoe UI",system-ui,sans-serif;color:#0b3a66;line-height:5.5rem;white-space:nowrap}' +
    '#prot-marca div{transform:rotate(-24deg) translate(-20%,-10%);width:200%}' +
    '#prot-aviso{position:fixed;left:50%;bottom:1.2rem;transform:translateX(-50%);z-index:9999;background:#17181a;color:#fff;' +
    'font:500 .85rem "Segoe UI",system-ui,sans-serif;padding:.6rem 1rem;border-radius:4px;max-width:90vw;display:none}';
  document.head.appendChild(css);

  /* ---------- velo al perder el foco (herramienta Recortes, cambio de ventana) ---------- */
  var v = document.createElement('div');
  v.id = 'prot-velo';
  v.textContent = 'Vuelva a la actividad para seguir leyendo.';
  document.body.appendChild(v);
  function velo(on){ v.style.display = on ? 'flex' : 'none'; }
  window.addEventListener('blur', function(){ velo(true); });
  window.addEventListener('focus', function(){ velo(false); });
  document.addEventListener('visibilitychange', function(){ velo(document.hidden); });

  /* ---------- aviso breve ---------- */
  var a = document.createElement('div');
  a.id = 'prot-aviso';
  document.body.appendChild(a);
  var t = null;
  function aviso(txt){
    a.textContent = txt; a.style.display = 'block';
    clearTimeout(t); t = setTimeout(function(){ a.style.display = 'none'; }, 2600);
  }

  /* ---------- marca de agua con el nombre y la cédula ---------- */
  var m = null;
  function marca(texto){
    if(!texto) return;
    if(!m){ m = document.createElement('div'); m.id = 'prot-marca'; document.body.appendChild(m); }
    var linea = (texto + '   ·   ').repeat(12);
    var filas = '';
    for(var i = 0; i < 40; i++) filas += linea + '<br>';
    m.innerHTML = '<div>' + filas + '</div>';
  }
  window.marcaAgua = marca;

  // Se activa sola cuando la actividad escribe la identidad del estudiante.
  var nom = document.getElementById('id-nom'), ced = document.getElementById('id-ced');
  if(nom && ced){
    var obs = new MutationObserver(function(){
      var n = (nom.textContent || '').trim(), c = (ced.textContent || '').trim();
      if(n && n !== '—' && c && c !== '—') marca(n.replace(/[<>&]/g,'') + ' · ' + c.replace(/\D/g,''));
    });
    obs.observe(nom, { childList:true, characterData:true, subtree:true });
    obs.observe(ced, { childList:true, characterData:true, subtree:true });
  }

  // Los autocontroles piden la identidad en campos de texto, no en etiquetas.
  var cn = document.getElementById('nombre-estudiante'), cc = document.getElementById('cedula-estudiante');
  if(cn && cc){
    var firmar = function(){
      var n = (cn.value || '').trim(), c = (cc.value || '').replace(/\D/g,'');
      if(n.length > 2 && c.length === 10) marca(n.replace(/[<>&]/g,'') + ' · ' + c);
    };
    cn.addEventListener('input', firmar); cc.addEventListener('input', firmar);
    firmar();
  }
})();
