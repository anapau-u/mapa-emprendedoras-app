import React, { useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import "../styles/Signup.css"; // Import the CSS file

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        const { error } = await supabase.auth.signUp({
            email,
            password,
        });
        if (error) {
            setError(error.message);
            setSuccess("");
        } else {
            setSuccess("Signup successful! Please check your email for verification.");
            setError("");
        }
    };

    const handleGoogleSignup = async () => {
        const { user, session, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
        if (error) {
            setError(error.message);
        } else {
            setSuccess("Redirecting to Google for authentication...");
            setError("");
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Crea tu cuenta</h2>
                        <form onSubmit={handleSignup}>
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
                            <button type="submit" className="btn btn-primary btn-block">Crear</button>
                            {error && <p className="text-danger">{error}</p>}
                            {success && <p className="text-success">{success}</p>}
                        </form>

                        <button onClick={handleGoogleSignup} className="btn btn-secondary btn-block mt-2">
                            <i className="fab fa-google icon-spacing"></i> Sign up with Google
                        </button>

                        <p className="text-center mt-3">
                            ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;