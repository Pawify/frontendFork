{/*
    Componente: Footer
    Creado: 15/04/2025
    Autor: PabloRM
    
    Descripción: 
    Componente de pie de página que contiene información de contacto, 
    enlaces a secciones importantes y formulario de suscripción a newsletter.
    
    Historial de modificaciones:
    - 15/04/2025: Creación inicial del componente
    - [Fecha]: [Descripción de la modificación]
    - [Fecha]: [Descripción de la modificación]
*/}

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import pawifyLogo from '/LogoPaw_blue.png'; 
import theme from '../../../constants/themes';

const Footer = () => {
return (
<footer className="font-sans text-gray-800 relative" 
    style={{ 
        backgroundColor: '#f2f6f9',
        position: 'relative',
        width: '100%',
        height: 'auto',
        minHeight: '100%',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23ffffff\' fill-opacity=\'0.8\' d=\'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z\'%3E%3C/path%3E%3C/svg%3E")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: '100%'
    }}>


{/* Sección de Newsletter */}
<div className=" rounded-lg shadow-md mx-auto my-8 p-8 max-w-[90%]">
    <div>
    <h2 className="text-3xl mb-1">
        Newsletter</h2>
    <p className="mb-6 text-gray-600">
        ¡Suscríbete a nuestro boletín para recibir actualizaciones, noticias, consejos y promociones!</p>
    <div className="flex flex-wrap gap-2.5 md:flex-row">
        <input 
        type="text" 
        placeholder="Nombre" 
        className="flex-1 min-w-[200px] p-2.5 border border-gray-300 rounded" />
        <input 
        type="email" 
        placeholder="Email" 
        className="flex-1 min-w-[200px] p-2.5 border border-gray-300 rounded" />
        <button 
        className="bg-amber-300 text-gray-800 font-bold py-2.5 px-5 rounded hover:bg-amber-400 transition-colors">
            Regístrate</button>
    </div>
    </div>
</div>

{/* Sección principal del footer */}
<div className="flex flex-wrap justify-between p-8">
    <div className="flex-1 min-w-[250px] mr-8 mb-6">
    <img 
    src={pawifyLogo} 
    alt="Pawify Logo" 
    className="max-w-[150px] mb-4" />
    <p>En Pawify creemos que cada mascota merece un hogar lleno de amor.</p>
    <div className="flex gap-4 mt-6">
        <a href="https://www.instagram.com/pawify.adoptdontshop/?hl=es" 
        className="flex items-center justify-center w-9 h-9 rounded-full transition-all text-white hover:w-10 hover:h-10 hover:text-white"
        style={{ backgroundColor: theme.colors.secondary }}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = theme.colors.secondary}>
            <FaInstagram />
        </a>
{/*Estos que no aún tienen enlace estan en rojo*/}
        <a href="#" 
        className="flex items-center justify-center w-9 h-9 rounded-full transition-all text-white hover:w-10 hover:h-10 hover:text-white"
        style={{ backgroundColor: theme.colors.secondary }}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = theme.colors.secondary}>
            <FaFacebook /></a>
        <a href="#" 
        className="flex items-center justify-center w-9 h-9 rounded-full transition-all text-white hover:w-10 hover:h-10 hover:text-white"
        style={{ backgroundColor: theme.colors.secondary }}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = theme.colors.secondary}>
            <FaTwitter /></a>
        <a href="#" 
        className="flex items-center justify-center w-9 h-9 rounded-full transition-all text-white hover:w-10 hover:h-10 hover:text-white"
        style={{ backgroundColor: theme.colors.secondary }}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = theme.colors.secondary}>
            <FaYoutube /></a>
    </div>
    </div>

    {/* Sección de enlaces */}
    <div className="flex flex-wrap flex-2 gap-8">
    <div className="flex-1 min-w-[150px]">
        <h3 className="text-xl mb-5 text-gray-700">Servicios</h3>
        <ul className="list-none p-0">
        <li className="mb-2">
            <Link to="/adopciones" 
            className="no-underline text-gray-600 hover:text-amber-300 transition-colors">
                Adopciones</Link></li>
        <li className="mb-2">
            <Link to="/entrenamiento" 
            className="no-underline text-gray-600 hover:text-amber-300 transition-colors">
                Entrenamiento</Link></li>
        <li className="mb-2">
            <Link to="/cuidado" 
            className="no-underline text-gray-600 hover:text-amber-300 transition-colors">
                Cuidado de mascotas</Link></li>
        <li className="mb-2">
            <Link to="/peluquerias" 
            className="no-underline text-gray-600 hover:text-amber-300 transition-colors">
                Peluquerías y estilismo</Link></li>
        <li className="mb-2">
            <Link to="/accesorios" 
            className="no-underline text-gray-600 hover:text-amber-300 transition-colors">
                Accesorios con estilo</Link></li>
        <li className="mb-2">
            <Link to="/tienda" 
            className="no-underline text-gray-600 hover:text-amber-300 transition-colors">
                Tienda</Link></li>
        </ul>
    </div>

    <div className="flex-1 min-w-[150px]">
        <h3 className="text-xl mb-5 text-gray-700">Soporte</h3>
        <ul className="list-none p-0">
        <li className="mb-2">
            <Link to="/mi-cuenta" className="no-underline text-gray-600 hover:text-amber-300 transition-colors">
            Mi cuenta</Link></li>
        <li className="mb-2">
            <Link to="/contacto" className="no-underline text-gray-600 hover:text-amber-300 transition-colors">
            Contacto</Link></li>
        <li className="mb-2">
            <Link to="/faq" className="no-underline text-gray-600 hover:text-amber-300 transition-colors">
            FAQ</Link></li>
        </ul>
    </div>

    <div className="flex-1 min-w-[150px]">
        <h3 className="text-xl mb-5 text-gray-700">Sobre nosotros</h3>
        <ul className="list-none p-0">
        <li className="mb-2">
            <Link to="/quienes-somos" className="no-underline text-gray-600 hover:text-amber-300 transition-colors">
            ¿Quién somos?</Link></li>
        <li className="mb-2">
            <Link to="/voluntarios" className="no-underline text-gray-600 hover:text-amber-300 transition-colors">
            Voluntarios</Link></li>
        <li className="mb-2">
            <Link to="/blog" className="no-underline text-gray-600 hover:text-amber-300 transition-colors">
            Blog & Noticias</Link></li>
        <li className="mb-2">
            <Link to="/legal" className="no-underline text-gray-600 hover:text-amber-300 transition-colors">
            Legal</Link></li>
        </ul>
    </div>
    </div>
</div>
{/* Parte inferior del footer*/}
<div className="text-center ">
    <p className="text-sm text-gray-600">&copy; 2025 Pawify. Todos los derechos reservados.</p>
</div>
</footer>
);
};

export default Footer;