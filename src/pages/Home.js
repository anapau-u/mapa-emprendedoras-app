import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient.js';
import "../styles/Home.css"; // Import the CSS file
import logo from '../assets/images/logo.png'; // Import the logo
import SimpleMap from '../components/SimpleMap'; // Import the SimpleMap component

const Navbar = ({ user, onLogout }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Create a ref for the dropdown menu

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Clean up the event listener
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <nav className="navbar" style={{ position: 'relative' }}>
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="navbar-links">
                <Link to="/">Inicio</Link>
                <Link to="/new-partner">Registro</Link>
                <Link to="/contact">Contacto</Link>
            </div>
            <div className="navbar-user">
                {user ? (
                    <>
                        <img
                            src={user.user_metadata.avatar_url || 'default-avatar.png'} // Use a default avatar if none is available
                            alt="Profile"
                            className="profile-pic"
                            onClick={toggleDropdown} // Toggle dropdown on click
                        />
                        {dropdownOpen && (
                            <div className="dropdown-menu" ref={dropdownRef}>
                                <Link to="/partners" className="dropdown-item">Mi Información</Link>
                                <button onClick={onLogout} className="dropdown-item">Cerrar Sesión</button>
                            </div>
                        )}
                    </>
                ) : (
                    <Link to="/login" className="login-link">Ingresa</Link>
                )}
            </div>
        </nav>
    );
};

const Home = () => {
    const [user, setUser ] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            const currentUser  = session?.user || null; // Set user if session exists
            setUser (currentUser );
        };

        fetchSession();
    }, []);

    const handleLogout = async () => {
        try {
            await supabase.auth.signOut();
            setUser (null); // Clear user state
            navigate('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div>
            <Navbar user={user} onLogout={handleLogout} />
            <div className="content-container">
                <h1>Mapa Emprendedoras</h1>
                <p>Este mapa muestra todos los emprendimientos que apoyamos dentro de la República Mexicana</p>
                {/* Add the SimpleMap component here */}
                <SimpleMap />
            </div>
        </div>
    );
};

export default Home;