import React, { useState, useEffect } from 'react';
import '../styles/AddPartner.css'; // Import the CSS file
import { supabase } from '../supabase/supabaseClient.js';
import { useNavigate } from 'react-router-dom';

const AddPartner = () => {
    const [formData, setFormData] = useState({
        company_name: '',
        representative_name: '',
        state: '',
        category: '',
        second_category: '',
        product_photo_urls: ['', '', ''], // Store photo URLs in an array
        description: ['', '', ''], // Initialize as an array
        user_id: '', // Add a user ID field
    });

    const states = [
        "Aguascalientes",
        "Baja California",
        "Baja California Sur",
        "Campeche",
        "Chiapas",
        "Chihuahua",
        "Coahuila",
        "Colima",
        "Durango",
        "Guanajuato",
        "Guerrero",
        "Hidalgo",
        "Jalisco",
        "Mexico",
        "Michoacán",
        "Morelos",
        "Nayarit",
        "Nuevo León",
        "Oaxaca",
        "Puebla",
        "Querétaro",
        "Quintana Roo",
        "San Luis Potosí",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz",
        "Yucatán",
        "Zacatecas"
    ];

    const navigate = useNavigate();

    useEffect(() => {
        // Get the current user's session
        const session = supabase.auth.getSession(); // Use getSession() instead
        session.then(({ data: { session } }) => {
            if (session) {
                setFormData((prevData) => ({
                    ...prevData,
                    user_id: session.user.id, // Set the user_id from the session
                }));
            }
        });
    }, []);

    const checkExistingPartner = async () => {
        const { data, error } = await supabase
            .from('partners')
            .select('*')
            .eq('user_id', formData.user_id);

        if (error) {
            console.error('Error checking existing partner:', error);
            return false;
        }

        return data.length > 0; // Return true if a partner exists
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith('photoUrl')) {
            const index = parseInt(name.replace('photoUrl', '')) - 1; // Get the index from the name
            const newPhotoUrls = [...formData.product_photo_urls];
            newPhotoUrls[index] = value; // Update the specific photo URL
            setFormData({
                ...formData,
                product_photo_urls: newPhotoUrls,
            });
        } else if (name.startsWith('description')) {
            const index = parseInt(name.replace('description', '')) - 1; // Get the index from the name
            const newDescriptions = [...formData.description];
            newDescriptions[index] = value; // Update the specific description
            setFormData({
                ...formData,
                description: newDescriptions,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        // Check if user_id is valid (not empty)
        if (!formData.user_id) {
            console.error('User  ID is required');
            return; // Prevent submission if user_id is not valid
        }

        // Check if a partner already exists for this user
        const partnerExists = await checkExistingPartner();
        if (partnerExists) {
            alert('Solo es posible añadir un socio por cuenta.'); // Show message
            return; // Prevent submission
        }

        // Insert data into Supabase
        const { data, error } = await supabase
            .from('partners')
            .insert([
                {
                    company_name: formData.company_name,
                    representative_name: formData.representative_name,
                    state: formData.state,
                    category: formData.category,
                    second_category: formData.second_category,
                    product_photo_urls: formData.product_photo_urls, // Use the array directly
                    description: formData.description, // Use the array directly
                    user_id: formData.user_id // Pass the user ID
                }
            ]);

        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log('Data inserted successfully:', data);
            alert('¡Socio añadido exitosamente!'); // Show success message
            navigate('/'); // Redirect to the home page
            // Optionally reset the form
            setFormData({
                company_name: '',
                representative_name: '',
                state: '',
                category: '',
                second_category: '',
                product_photo_urls: ['', '', ''],
                description: ['', '', ''],
                user_id: '' // Reset user ID
            });
        }
    };

    return (
        <div className="container">
            <button onClick={() => navigate('/')} className="go-back-button">Volver</button>
            <div className="card">
                <h1>Información de Socio</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="company_name">Nombre de la empresa:</label>
                    <input
                        type="text"
                        id="company_name"
                        name="company_name"
                        className="form-control"
                        value={formData.company_name}
                        onChange={handleChange}
                        required
                    /><br />

                    <label htmlFor="representative_name">Nombre del representate de la empresa:</label>
                    <input
                        type="text"
                        id="representative_name"
                        name="representative_name"
                        className="form-control"
                        value={formData.representative_name}
                        onChange={handleChange}
                        required
                    /><br />

                    <label htmlFor="state">Estado:</label>
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="form-control"
                        required
                    >
                        <option value="" disabled>Selecciona el Estado</option>
                        {states.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select><br />

                    <label htmlFor="category">Categoría:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        className="form-control"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    /><br />

                    <label htmlFor="second_category">Segunda Categoría:</label>
                    <input
                        type="text"
                        id="second_category"
                        name="second_category"
                        className="form-control"
                        value={formData.second_category}
                        onChange={handleChange}
                    /><br />

                    <label htmlFor="product_photo_urls">Fotos del Producto como Link:</label>
                    <input
                        type="url"
                        name="photoUrl1"
                        placeholder="Link de foto 1"
                        value={formData.product_photo_urls[0]}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                    <input
                        type="url"
                        name="photoUrl2"
                        placeholder="Link de foto 2"
                        value={formData.product_photo_urls[1]}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                    <input
                        type="url"
                        name="photoUrl3"
                        placeholder="Link de foto 3"
                        value={formData.product_photo_urls[2]}
                        onChange={handleChange}
                        className="form-control"
                        required
                    /><br />

                    <label htmlFor="description1">Descripción 1</label>
                    <textarea
                        id="description1"
                        name="description1" // This will be used to identify the first description
                        placeholder="Descripción de la Foto 1"
                        className="form-control"
                        value={formData.description[0]} // Access the first description
                        onChange={handleChange}
                        required
                    ></textarea><br />

                    <label htmlFor="description2">Descripción 2</label>
                    <textarea
                        id="description2"
                        name="description2" // This will be used to identify the second description
                        placeholder="Descripción de la Foto 2"
                        className="form-control"
                        value={formData.description[1]} // Access the second description
                        onChange={handleChange}
                        required
                    ></textarea><br />

                    <label htmlFor="description3">Descripción 3</label>
                    <textarea
                        id="description3"
                        name="description3" // This will be used to identify the third description
                        placeholder="Descripción de la Foto 3"
                        className="form-control"
                        value={formData.description[2]} // Access the third description
                        onChange={handleChange}
                        required
                    ></textarea><br />

                    <button type="submit" className="btn">Añadir Socio</button>
                </form>
            </div>
        </div>
    );
};

export default AddPartner;