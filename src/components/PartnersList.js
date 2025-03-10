import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase/supabaseClient';
import { useNavigate } from 'react-router-dom';
import '../styles/PartnersList.css'; // Import the CSS file for styling

const PartnersList = () => {
    const [partners, setPartners] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPartners = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from('partners')
                .select('*');

            if (error) {
                setError(error.message);
                console.error("Error fetching partners:", error);
            } else {
                setPartners(data);
                console.log("Fetched partners:", data);
            }
            setLoading(false);
        };

        fetchPartners();
    }, []);

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/')} className="go-back-button">Volver</button>
            <div className="partners-list-container">
                <h2 className="partners-title">Tu Información</h2>
                {loading && <p className="loading-message">Loading...</p>}
                {error && <p className="error-message">{error}</p>}
                <ul className="partners-list">
                    {partners.length > 0 ? (
                        partners.map(partner => (
                            <li key={partner.id} className="partner-item">
                                <h3 className="partner-name">{partner.company_name}</h3>
                                <p className="partner-representative">Representante: {partner.representative_name}</p>
                                <p className="partner-state">Estado: {partner.state}</p>
                                <p className="partner-category">Categoría: {partner.category}</p>
                                <h4 className="product-photos-title">Fotos del producto:</h4>
                                <ul className="product-photos-list">
                                    {Array.isArray(partner.product_photo_urls) && partner.product_photo_urls.map((url, index) => (
                                        <li key={index} className="product-photo-item">
                                            <img src={url} alt={`Product ${index + 1}`} className="product-photo" />
                                        </li>
                                    ))}
                                </ul>
                                {/* Add the modify button for each partner */}
                                <button onClick={() => navigate(`/modify/${partner.id}`)} className="modify-button">Modificar Información</button>
                            </li>
                        ))
                    ) : (
                        <li>No partners found.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default PartnersList;
