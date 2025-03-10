import React, { useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import "../styles/Login.css"; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const { error } = await supabase.auth.signIn({
            email,
            password,
        });
        if (error) {
            setError(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        const { user, session, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });

        if (error) {
            setError(error.message);
        } else {
            console.log('User :', user);
            console.log('Session:', session);
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="col-md-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Bienvenido al Portal de Emprendedoras</h2>
                        <p className="text-center">Por favor ingresa para continuar</p>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Inicia Sesión</button>
                            {error && <p className="text-danger">{error}</p>}
                        </form>

                        <button onClick={handleGoogleLogin} className="btn btn-secondary btn-block mt-2">
                            <i className="fab fa-google icon-spacing"></i> Log in with Google
                        </button>

                        <p className="text-center mt-3">
                            ¿No tienes una cuenta? <a href="/signup">Registrate</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;