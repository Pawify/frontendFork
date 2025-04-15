import React from 'react';
import { Link } from 'react-router-dom';
import './blog.css';

const BlogList = ({ posts }) => {
return (
<div className="blog-list">
    <div className="blog-grid">
    {posts.map(post => (
        <Link key={post.id} to={`/blog/${post.id}`} className="blog-card hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="blog-card-image relative">
                <div className="absolute top-3 right-3 z-10">
                    {post.categorias.map((categoria, index) => (
                        <span key={index} 
                        className="bg-yellow-400 text-black font-medium px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">{categoria}</span>
                    ))}
                </div>
                <img src={post.imagen} alt={post.titulo} />
            </div>
            <div className="blog-card-content">
                <h2 className="blog-card-title text-lg md:text-xl font-medium text-blue-400 hover:text-yellow-400 transition-colors duration-300">{post.titulo}</h2>
                <p className="blog-card-summary">{post.resumen}</p>
            </div>
            <div className="flex-grow"></div>
            <div className="blog-card-meta text-sm pt-1 text-gray-500 flex justify-between items-center border-t mx-4 px-2">
                <div className="blog-card-date">{post.fechaPublicacion}</div>
                <div className="blog-card-comments">
                    {post.comentarios ? `${post.comentarios.length} comentarios` : 'No hay comentarios'}
                </div>
            </div>
        </Link>
    ))}
    </div>
</div>
);
};

export default BlogList;