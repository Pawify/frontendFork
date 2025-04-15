import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '@/components/features/Blog/BlogPost';
import mockPosts from '@/components/features/Blog/mockPosts';
import './BlogPages.css';


const BlogArticle = () => {
const { id } = useParams();
const [post, setPost] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
// Aquí eventualmente haremos la llamada a la API de Django
// Por ahora, usamos los datos de ejemplo
const foundPost = mockPosts.find(p => p.id === parseInt(id));
setPost(foundPost);
setLoading(false);
}, [id]);

if (loading) {
return <div className="blog-loading">Cargando artículo...</div>;
}

if (!post) {
return <div className="blog-error">Artículo no encontrado</div>;
}

return (
<div className="blog-container">
    <div className="blog-content">
    <div className="blog-main">
        <BlogPost post={post} />
    </div>
    </div>
</div>
);
};

export default BlogArticle;