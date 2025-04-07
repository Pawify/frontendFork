import React from "react";
import NavBar from "../navBar/navBar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
return (
<div className="site-wrapper" style={{ 
    display: 'flex', 
    flexDirection: 'column',
    minHeight: '100vh'
}}>
    <NavBar />
    <main style={{ flex: '1 0 auto' }}>
    {children}
    </main>
    <Footer />
</div>
);
};

export default Layout;