import React from 'react';
import '../../../pages/Blog/Blog.css';

const BlogPost = ({ post }) => {
if (!post) return <div>Cargando artículo...</div>;

return (
<div className="blog-post">
    <div className="blog-post-header">
    <div className="blog-post-categories">
        {post.categorias.map((categoria, index) => (
        <span key={index} className="blog-category">{categoria}</span>
        ))}
    </div>
    <h1 className="blog-post-title">{post.titulo}</h1>
    <div className="blog-post-meta">
        <div className="blog-post-author">
        <img src={post.autor.avatar} alt={post.autor.nombre} />
        <div>
            <span className="author-name">{post.autor.nombre}</span>
            <p className="author-bio">{post.autor.bio}</p>
        </div>
        </div>
        <div className="blog-post-date">{post.fechaPublicacion}</div>
    </div>
    </div>
    
    <div className="blog-post-image">
    <img src={post.imagen} alt={post.titulo} />
    </div>
    
    <div 
    className="blog-post-content"
    dangerouslySetInnerHTML={{ __html: post.contenido }}
    />
    
    <div className="blog-post-tags">
    {post.etiquetas.map((etiqueta, index) => (
        <span key={index} className="blog-tag">#{etiqueta}</span>
    ))}
    </div>
</div>
);
};

export default BlogPost;