import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase/supabaseClient';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/ModifyPartner.css'; // Import the CSS file for styling

const ModifyPartner = () => {
    const { id } = useParams(); // Get the partner ID from the URL
    const [partner, setPartner] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [companyName, setCompanyName] = useState('');
    const [representativeName, setRepresentativeName] = useState('');
    const [state, setState] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPartner = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from('partners')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                setError(error.message);
                console.error("Error fetching partner:", error);
            } else {
                setPartner(data);
                setCompanyName(data.company_name);
                setRepresentativeName(data.representative_name);
                setState(data.state);
                setCategory(data.category);
            }
            setLoading(false);
        };

        fetchPartner();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        
        // Get the authenticated user
        const { data: { user }, error: userError } = await supabase.auth.getUser ();
    
        // Check if the user is authenticated
        if (userError || !user) {
            setError("User  is not authenticated.");
            return;
        }
    
        const updates = {
            id,
            user_id: user.id, // Set the user_id to the authenticated user's ID
            company_name: companyName,
            representative_name: representativeName,
            state,
            category,
            updated_at: new Date(),
        };
    
        const { error } = await supabase.from('partners').upsert(updates);
    
        if (error) {
            setError(error.message);
            console.error("Error updating partner:", error);
        } else {
            navigate('/partners'); // Redirect to the main page after successful update
        }
    };

    return (
        <div>
            <button onClick={() => navigate('/partners')} className="go-back-button">Volver</button>
            <div className="modify-partner-container">
            <h2>Modificar Información del Socio</h2>
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            {partner && (
                <form onSubmit={handleUpdate}>
                    <label>
                        Nombre de la Empresa:
                        <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Representante:
                        <input
                            type="text"
                            value={representativeName}
                            onChange={(e) => setRepresentativeName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Estado:
                        <input
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Categoría:
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Actualizar Información</button>
                </form>
            )}
        </div>
        </div>
        
    );
};

export default ModifyPartner;