{/*
    Componente: BlogHome
    Fecha: 15/04/2025 
    Autor: PabloRM
    Descripción: Pagina con para ver el blog
    Historial de modificaciones:
    - 15/04/2025 : Creación inicial del componente
    - [Fecha]: [Descripción de la modificación]
*/}
import React, { useState, useEffect } from 'react';
import './BlogPages.css';
import Hero from "/cat_dog_heros.png";
import BlogList from '@/components/features/Blog/BlogList';
import mockPosts from '@/components/features/Blog/mockPosts';

const BlogHome = () => {
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
// Aquí eventualmente haremos la llamada a la API de Django
// Por ahora, usamos los datos de ejemplo
setPosts(mockPosts);
setLoading(false);
}, []);

if (loading) {
return <div className="blog-loading">Cargando artículos...</div>;
}

return (
<div className="blog-container">
    
    <div className="blog-content">
    <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <h1 className="text-5xl font-bold text-gray-800 z-10">Blog</h1>
            <img src={Hero} alt="Cat and Dog" className="h-64 object-contain z-10" />
        </div>
    </div>
    <div className="blog-main">
        <BlogList posts={posts} />
    </div>
    </div>
</div>
);
};

export default BlogHome;