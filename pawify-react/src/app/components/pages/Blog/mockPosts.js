const mockPosts = [
{
    id: 1,
    titulo: "Beneficios de adoptar una mascota",
    resumen: "Descubre cómo la adopción de mascotas puede cambiar tu vida y la de un animal necesitado.",
    contenido: `
    <p>Adoptar una mascota es una de las decisiones más gratificantes que puedes tomar. No solo estás dando un hogar a un animal que lo necesita, sino que también estás enriqueciendo tu propia vida de maneras inimaginables.</p>
    <p>Los animales adoptados suelen desarrollar un vínculo especial con sus nuevos dueños, mostrando una lealtad y gratitud únicas.</p>
    <h2>Razones para adoptar</h2>
    <ul>
        <li>Salvas una vida</li>
        <li>Reduces la sobrepoblación animal</li>
        <li>Obtienes un compañero fiel</li>
        <li>Mejoras tu salud física y mental</li>
    </ul>
    `,
    imagen: "https://picartpetcare.com/wp-content/uploads/2020/07/Blog-Picart-adoptar.jpg",
    autor: {
    nombre: "Juan Pérez",
    avatar: "https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80",
    bio: "Voluntario en refugio de animales y defensor de la adopción responsable"
    },
    fechaPublicacion: "2023-11-15",
    categorias: ["Adopciones Responsables"],
    etiquetas: ["Adopción", "Mascotas", "Bienestar Animal"]
},
{
    id: 2,
    titulo: "Cómo preparar tu hogar para un perro adoptado",
    resumen: "Guía práctica para acondicionar tu casa antes de recibir a tu nuevo amigo canino.",
    contenido: `
    <p>Adoptar un perro es una gran responsabilidad que requiere preparación. Acondicionar tu hogar adecuadamente ayudará a que la transición sea más fácil tanto para ti como para tu nueva mascota.</p>
    <h2>Pasos esenciales</h2>
    <ol>
        <li>Asegura espacios peligrosos</li>
        <li>Compra los elementos básicos (cama, comederos, juguetes)</li>
        <li>Establece un área de descanso</li>
        <li>Elimina plantas tóxicas</li>
        <li>Prepara un plan de alimentación</li>
    </ol>
    <p>Recuerda que cada perro es único y puede necesitar tiempo para adaptarse a su nuevo entorno. La paciencia y el amor son fundamentales en este proceso.</p>
    `,
    imagen: "https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80",
    autor: {
    nombre: "María Rodríguez",
    avatar: "https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80",
    bio: "Especialista en comportamiento animal y adopciones"
    },
    fechaPublicacion: "2023-11-10",
    categorias: ["Adopciones Responsables"],
    etiquetas: ["Perros", "Adopción", "Preparación"]
},
{
    id: 3,
    titulo: "El primer mes con tu gato adoptado",
    resumen: "Consejos para ayudar a tu nuevo felino a adaptarse a su hogar permanente.",
    contenido: `
    <p>Los primeros 30 días con un gato adoptado son cruciales para establecer confianza y rutinas. Durante este período, tu nuevo compañero felino estará adaptándose a un entorno desconocido y aprendiendo a confiar en ti.</p>
    <h2>Recomendaciones importantes</h2>
    <ul>
        <li>Crea un espacio seguro y tranquilo</li>
        <li>Mantén una rutina constante</li>
        <li>Introduce gradualmente nuevos espacios de la casa</li>
        <li>Respeta su espacio personal</li>
        <li>Establece sesiones cortas de juego y socialización</li>
    </ul>
    <p>Recuerda que algunos gatos pueden tardar más tiempo en adaptarse, especialmente si han tenido experiencias traumáticas. La paciencia es clave para construir una relación duradera con tu nuevo amigo.</p>
    `,
    imagen: "https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1600&h=900",
    autor: {
    nombre: "Carlos Sánchez",
    avatar: "https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80",
    bio: "Veterinario especializado en felinos y promotor de adopciones responsables"
    },
    fechaPublicacion: "2023-11-20",
    categorias: ["Adopciones Responsables"],
    etiquetas: ["Gatos", "Adopción", "Adaptación"]
}
];

export default mockPosts;