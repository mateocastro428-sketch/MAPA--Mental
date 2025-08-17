// script.js corregido y con contenido completo

document.addEventListener("DOMContentLoaded", () => {
  // 1. Contenido completo para los modales
  const modalContent = {
    central: {
      title: "Proyectos",
      body: `
        <p>Un proyecto es un <strong>esfuerzo temporal</strong> que se lleva a cabo para crear un producto, servicio o resultado único.</p>
        <p>Características principales:</p>
        <ul>
          <li>Tienen un inicio y un fin definidos, no son infinitos[cite: 56].</li>
          <li>Responden a una necesidad específica y generan un resultado único[cite: 57].</li>
          <li>Consumen recursos y deben equilibrar restricciones de tiempo, costo, alcance, riesgos y calidad.</li>
        </ul>
      `
    },
    definicion: {
      title: "Definición de Proyecto",
      body: `
        <p>Según la <strong>Guía del PMBOK</strong>, es un esfuerzo temporal para crear un producto, servicio o resultado único.</p>
        <p>La <strong>Norma GTC-ISO 21500</strong> lo define como un "esfuerzo temporal para lograr uno o más objetivos definidos".</p>
        <p>También se considera la búsqueda de una solución innovadora a un problema para satisfacer una necesidad humana.</p>
      `
    },
    gestion: {
      title: "Gestión de Proyectos",
      body: `
        <p>Es el conjunto de <strong>actividades coordinadas para dirigir y controlar</strong> el cumplimiento de los objetivos del proyecto.</p>
        <p>Abarca todo el ciclo de vida, desde la identificación del problema hasta la evaluación final[cite: 135]. Se diferencia de la "administración" o "gerencia", que se enfoca principalmente en la fase de ejecución[cite: 140].</p>
        <p>Implica equilibrar las restricciones de tiempo, costos, alcance, recursos, riesgos y calidad.</p>
      `
    },
    inv: {
      title: "Proyectos de Inversión",
      body: `
        <p>Iniciativas que asignan recursos financieros, humanos y técnicos para crear o mejorar bienes o servicios, buscando obtener beneficios económicos, sociales o ambientales a lo largo del tiempo[cite: 71, 72].</p>
        <h3>Características Principales</h3>
        <ul>
          <li>Requieren análisis detallados de viabilidad, mercado y evaluaciones financieras.</li>
          <li>Se enfocan en la rentabilidad y el retorno de la inversión.</li>
        </ul>
        <h3>Ejemplos Prácticos</h3>
        <ul>
          <li>Construcción de plantas industriales o centros comerciales.</li>
          <li>Desarrollo de proyectos energéticos a gran escala.</li>
        </ul>
        <h3>¿Por qué requieren una gestión específica?</h3>
        <p>Su gestión debe estar <strong>centrada en la viabilidad financiera</strong>. El control de costos y el análisis de riesgos son cruciales, ya que el éxito se mide principalmente en términos económicos y de rentabilidad.</p>
      `
    },
    soc: {
      title: "Proyectos Sociales",
      body: `
        <p>Se enfocan en el desarrollo integral de las comunidades y en mejorar la calidad de vida de las personas.</p>
        <h3>Características Principales</h3>
        <ul>
          <li>Promueven la inclusión social y la participación comunitaria.</li>
          <li>Su éxito se mide por el impacto social, no por beneficios económicos.</li>
        </ul>
        <h3>Ejemplos Prácticos</h3>
        <ul>
          <li>Programas educativos para comunidades vulnerables.</li>
          <li>Implementación de políticas de salud pública.</li>
        </ul>
        <h3>¿Por qué requieren una gestión específica?</h3>
        <p>La gestión debe <strong>priorizar el impacto humano y la participación de los involucrados</strong>. Requiere herramientas para medir el cambio social y una comunicación constante con la comunidad para asegurar que el proyecto responda a sus necesidades reales.</p>
      `
    },
    id: {
      title: "Proyectos de I+D+i",
      body: `
        <p>Proyectos de carácter científico orientados a la generación de conocimiento y al desarrollo de tecnologías o metodologías innovadoras.</p>
        <h3>Características Principales</h3>
        <ul>
          <li>Alto nivel de incertidumbre y riesgo.</li>
          <li>Fomentan la colaboración entre academia e industria.</li>
        </ul>
        <h3>Ejemplos Prácticos</h3>
        <ul>
          <li>Desarrollo de nuevas vacunas.</li>
          <li>Creación de nuevos materiales sostenibles.</li>
        </ul>
        <h3>¿Por qué requieren una gestión específica?</h3>
        <p>Debido a su alta incertidumbre, necesitan una <strong>gestión flexible y adaptativa</strong>, a menudo usando metodologías ágiles. El enfoque está en la experimentación y el aprendizaje, no en seguir un plan estricto.</p>
      `
    },
    ti: {
      title: "Proyectos de Tecnología de la Información (TI)",
      body: `
        <p>Proyectos centrados en el desarrollo de software, implementación de sistemas y actualización de infraestructura tecnológica.</p>
        <h3>Características Principales</h3>
        <ul>
          <li>Entorno tecnológico que cambia rápidamente.</li>
          <li>Uso frecuente de metodologías ágiles como Scrum o Kanban.</li>
        </ul>
        <h3>Ejemplos Prácticos</h3>
        <ul>
          <li>Implementación de un sistema ERP en una empresa.</li>
          <li>Desarrollo de una aplicación móvil.</li>
        </ul>
        <h3>¿Por qué requieren una gestión específica?</h3>
        <p>La gestión debe ser <strong>extremadamente adaptable a los cambios</strong>. Las metodologías ágiles son ideales  porque permiten entregas rápidas y retroalimentación constante del cliente, lo cual es vital en un sector donde los requisitos pueden cambiar a mitad del desarrollo.</p>
      `
    }
  };

  const nodes = {};
  document.querySelectorAll(".node").forEach(n => nodes[n.dataset.id] = n);

  function place(el, x, y) {
    if (el) {
      el.style.left = (x - el.offsetWidth / 2) + "px";
      el.style.top = (y - el.offsetHeight / 2) + "px";
    }
  }

  function layout() {
    const W = 1600, H = 1200, cx = W / 2, cy = H / 2;
    place(nodes.central, cx, cy);
    place(nodes.definicion, cx - 450, cy - 250);
    place(nodes.gestion, cx + 450, cy - 250);
    place(nodes.inv, cx - 500, cy);
    place(nodes.soc, cx + 500, cy);
    place(nodes.id, cx - 450, cy + 250);
    place(nodes.ti, cx + 450, cy + 250);
    place(nodes["inv-car"], cx - 700, cy - 50);
    place(nodes["inv-ej"], cx - 700, cy + 50);
    place(nodes["soc-car"], cx + 700, cy - 50);
    place(nodes["soc-ej"], cx + 700, cy + 50);
    place(nodes["id-car"], cx - 650, cy + 200);
    place(nodes["id-ej"], cx - 650, cy + 300);
    place(nodes["ti-car"], cx + 650, cy + 200);
    place(nodes["ti-ej"], cx + 650, cy + 300);
    drawLines();
    fitToWindow();
  }

  function edgePoint(from, to) {
    if (!from || !to) return null;
    const fx = from.offsetLeft + from.offsetWidth / 2;
    const fy = from.offsetTop + from.offsetHeight / 2;
    const tx = to.offsetLeft + to.offsetWidth / 2;
    const ty = to.offsetTop + to.offsetHeight / 2;
    return { from: { x: fx, y: fy }, to: { x: tx, y: ty } };
  }

  function drawLines() {
    const svgNS = "http://www.w3.org/2000/svg";
    const lines = document.getElementById("lines");
    lines.innerHTML = '';
    const conns = [
      ['central','definicion'], ['central','gestion'],
      ['central','inv'], ['central','soc'], ['central','id'], ['central','ti'],
      ['inv','inv-car'], ['inv','inv-ej'],
      ['soc','soc-car'], ['soc','soc-ej'],
      ['id','id-car'], ['id','id-ej'],
      ['ti','ti-car'], ['ti','ti-ej']
    ];
    conns.forEach(([a, b]) => {
      const points = edgePoint(nodes[a], nodes[b]);
      if (!points) return;
      const { from: A, to: B } = points;
      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', `M ${A.x} ${A.y} Q ${(A.x + B.x) / 2} ${(A.y + B.y) / 2} ${B.x} ${B.y}`);
      path.setAttribute('stroke', 'white');
      path.setAttribute('stroke-opacity', '0.8');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-width', '2');
      lines.appendChild(path);
    });
  }

  const modal = document.getElementById('modal');
  const mTitle = document.getElementById('mTitle');
  const mBody = document.getElementById('mBody');
  
  // 2. Lógica de Clic Corregida
  const openModal = (content) => {
    mTitle.textContent = content.title;
    mBody.innerHTML = content.body;
    modal.showModal();
  };

  if (nodes.central) nodes.central.onclick = () => openModal(modalContent.central);
  if (nodes.definicion) nodes.definicion.onclick = () => openModal(modalContent.definicion);
  if (nodes.gestion) nodes.gestion.onclick = () => openModal(modalContent.gestion);

  // Agrupar nodos para que abran el mismo modal
  [nodes.inv, nodes['inv-car'], nodes['inv-ej']].forEach(node => {
      if(node) node.onclick = () => openModal(modalContent.inv);
  });
  [nodes.soc, nodes['soc-car'], nodes['soc-ej']].forEach(node => {
      if(node) node.onclick = () => openModal(modalContent.soc);
  });
  [nodes.id, nodes['id-car'], nodes['id-ej']].forEach(node => {
      if(node) node.onclick = () => openModal(modalContent.id);
  });
  [nodes.ti, nodes['ti-car'], nodes['ti-ej']].forEach(node => {
      if(node) node.onclick = () => openModal(modalContent.ti);
  });

  document.querySelector('.close-btn').addEventListener('click', () => {
    modal.close();
  });

  let scale = 1, pan = { x: 0, y: 0 };
  const viewport = document.getElementById("viewport");

  function applyTransform() {
    viewport.style.transform = `translate(${pan.x}px,${pan.y}px) scale(${scale})`;
  }

  function fitToWindow() {
    const wrap = document.querySelector('.wrap');
    if (!wrap) return;
    const vw = wrap.clientWidth, vh = wrap.clientHeight;
    const s = Math.min(vw / 1600, vh / 1200) * 0.95; // Add some padding
    scale = s;
    pan.x = (vw - 1600 * s) / 2;
    pan.y = (vh - 1200 * s) / 2;
    applyTransform();
  }

  window.addEventListener('resize', fitToWindow);
  document.getElementById("zoomIn").onclick = () => { scale = Math.min(2, scale + 0.1); applyTransform(); };
  document.getElementById("zoomOut").onclick = () => { scale = Math.max(0.2, scale - 0.1); applyTransform(); };
  document.getElementById("zoomFit").onclick = fitToWindow;

  layout();
});