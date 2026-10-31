// ─────────────────────────────────────────────────────────────
// TEXTOS: PRESENTACIÓN, PROGRAMA DE CONTABILIDAD, PROCESO Y PREGUNTAS FRECUENTES
// ─────────────────────────────────────────────────────────────

export const hero = {
  title: 'Tu negocio tiene potencial. En ARAM lo llevamos más lejos.',
  subtitle:
    'Marketing, publicidad y desarrollo tecnológico para marcas que quieren destacar, conectar con sus clientes y optimizar sus procesos.',
}

export const intro = {
  title: 'Creatividad, estrategia y tecnología en un mismo lugar.',
  text: 'En ARAM ayudamos a empresas y emprendimientos a fortalecer su presencia digital mediante marketing, publicidad, diseño web y desarrollo de soluciones tecnológicas adaptadas a sus necesidades.',
  cards: [
    {
      icon: 'marketing',
      title: 'Marketing y publicidad',
      text: 'Creamos contenido visual y apoyamos la presencia digital de las marcas.',
    },
    {
      icon: 'web',
      title: 'Desarrollo web',
      text: 'Diseñamos páginas web para presentar empresas, productos y servicios de manera profesional.',
    },
    {
      icon: 'software',
      title: 'Soluciones tecnológicas',
      text: 'Desarrollamos aplicaciones y herramientas digitales para facilitar procesos y necesidades empresariales.',
    },
  ],
}

// ── Programa de contabilidad ─────────────────────────────────
// IMPORTANTE: una funcionalidad solo se muestra en la página si `confirmed` es true.
// Cuando verifiques cada función en la versión real del programa, cámbiala a true.
// Cuando tengas capturas reales, cópialas en /public/images/accounting/ y añádelas a `screenshots`.
export const accounting = {
  title: 'Tu negocio en orden. Tus datos bajo tu control.',
  subtitle:
    'Una solución de gestión financiera diseñada para ayudarte a organizar las cuentas de tu emprendimiento, con un enfoque de almacenamiento local y control de la información.',
  mainMessage:
    'Una solución local para que cada negocio mantenga el control de su información financiera.',
  localStorage: {
    title: 'Almacenamiento local',
    text: 'El programa está diseñado con un enfoque de almacenamiento local, para que cada emprendimiento gestione su propia información sin depender de una base de datos centralizada en la nube.',
    advantages: [
      'Control sobre el almacenamiento de la información.',
      'Independencia de una base de datos centralizada en la nube.',
    ],
    disclaimer:
      'La privacidad y la seguridad dependen de la implementación, los permisos de acceso, la protección del dispositivo y las medidas de seguridad disponibles.',
  },
  features: [
    { icon: 'ledger', title: 'Registro de ingresos y gastos', confirmed: false },
    { icon: 'folder', title: 'Organización de movimientos financieros', confirmed: false },
    { icon: 'cart', title: 'Seguimiento de compras y ventas', confirmed: false },
    { icon: 'debt', title: 'Control de deudas y pagos', confirmed: false },
    { icon: 'search', title: 'Consultas de información financiera', confirmed: false },
    { icon: 'summary', title: 'Resúmenes financieros', confirmed: false },
    { icon: 'calendar', title: 'Consultas por fechas', confirmed: false },
    { icon: 'csv', title: 'Exportación e importación de información mediante CSV', confirmed: false },
    { icon: 'backup', title: 'Gestión de copias de seguridad', confirmed: false },
  ],
  screenshots: [] as { src: string; width: number; height: number; alt: string; caption?: string }[],
}

export const process = [
  {
    n: '01',
    title: 'Conocemos tu negocio',
    text: 'Escuchamos tus necesidades, entendemos tus objetivos y analizamos lo que necesitas.',
  },
  {
    n: '02',
    title: 'Diseñamos una propuesta',
    text: 'Definimos el servicio, el alcance del proyecto y las condiciones comerciales.',
  },
  {
    n: '03',
    title: 'Desarrollamos la solución',
    text: 'Trabajamos en el proyecto acordado, manteniendo una comunicación clara durante el proceso.',
  },
  {
    n: '04',
    title: 'Entregamos el resultado',
    text: 'Presentamos el trabajo realizado de acuerdo con las condiciones establecidas.',
  },
]

export const faqs = [
  {
    q: '¿Qué servicios ofrece ARAM?',
    a: 'Ofrecemos marketing y manejo de redes sociales, diseño y desarrollo de páginas web (frontend), desarrollo de aplicaciones de escritorio y software, y un programa de contabilidad y gestión financiera con enfoque de almacenamiento local.',
  },
  {
    q: '¿Cómo solicito un presupuesto?',
    a: 'En la sección «Presupuesto» elige el servicio que te interesa y pulsa «Siguiente», o completa el formulario de contacto. Podrás enviar tu solicitud por WhatsApp a Luis o a Santiago, o por correo a aram.info.baq@gmail.com.',
  },
  {
    q: '¿Cómo se define el costo del manejo de redes sociales?',
    a: 'Lo manejamos como un presupuesto personalizado: el alcance específico se define en la propuesta comercial según las necesidades de tu marca. El presupuesto para anuncios pagados no está incluido. Además, existe una promoción para los dos primeros meses de servicio.',
  },
  {
    q: '¿Cómo funciona la promoción de los dos primeros meses?',
    a: 'La promoción se aplica durante los dos primeros meses de servicio y tiene dos modalidades de pago. Las tarifas se informan al solicitar el presupuesto. Al finalizar el periodo promocional, el precio y las condiciones posteriores se definen en la propuesta o acuerdo comercial. No es una promoción permanente.',
  },
  {
    q: '¿Cuál es la diferencia entre las dos modalidades de pago?',
    a: 'Con el pago completo al inicio pagas cada periodo mensual completo al comenzar y accedes a la tarifa más baja de la promoción. Con el pago dividido pagas el 50 % al inicio y el otro 50 % al final del periodo acordado.',
  },
  {
    q: '¿Qué incluye una página web frontend?',
    a: 'Incluye desarrollo exclusivamente frontend, diseño responsive, presentación profesional del negocio y secciones personalizadas según el proyecto. No incluye backend, bases de datos ni funcionalidades de servidor. El presupuesto se define según el alcance.',
  },
  {
    q: '¿Cuántas modificaciones están incluidas?',
    a: 'Se incluyen únicamente dos modificaciones menores. Los cambios adicionales, las modificaciones importantes y los cambios fuera del alcance acordado se cotizan por separado.',
  },
  {
    q: '¿Cómo se presupuesta una aplicación de escritorio?',
    a: 'El presupuesto se define según el alcance funcional acordado para la aplicación de escritorio. No existe un valor universal para cualquier programa: cada solución se cotiza según lo que necesite tu negocio.',
  },
  {
    q: '¿Las funcionalidades adicionales están incluidas?',
    a: 'No. Las nuevas funcionalidades, los módulos adicionales o los cambios que amplíen el alcance acordado se cotizan por separado.',
  },
  {
    q: '¿El desarrollo de software incluye mantenimiento?',
    a: 'No. El desarrollo de la aplicación no incluye mantenimiento posterior a la entrega.',
  },
  {
    q: '¿Cómo funciona el programa de contabilidad local?',
    a: 'Es un programa de gestión financiera con enfoque de almacenamiento local: cada emprendimiento gestiona su propia información sin depender de una base de datos centralizada en la nube. Puedes conocerlo y consultar sus condiciones en una demostración.',
  },
  {
    q: '¿Cómo puedo solicitar una demostración?',
    a: 'Pulsa «Solicitar una demostración», elige con qué socio quieres hablar y revisa el mensaje antes de abrir WhatsApp. También puedes enviarlo por correo.',
  },
  {
    q: '¿Cómo puedo contactar con ARAM?',
    a: 'Puedes escribir directamente por WhatsApp a Luis Ferrer o a Santiago Berrio, enviar un correo a aram.info.baq@gmail.com o completar el formulario: generará un mensaje que podrás revisar antes de enviarlo.',
  },
]
