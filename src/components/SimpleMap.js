// src/components/SimpleMap.js
import React, { useEffect } from 'react';

const SimpleMap = () => {
    useEffect(() => {
        // Function to load a script dynamically
        const loadScript = (src) => {
            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = resolve;
                document.body.appendChild(script);
            });
        };

        const loadMapScripts = async () => {
            // Load the mapdata.js and countrymap.js scripts
            await loadScript('/mapa/mapdata.js'); // Path relative to the public directory
            await loadScript('/mapa/countrymap.js'); // Path relative to the public directory

            // Initialize the map after the scripts are loaded
            if (window.SimpleMaps) {
                window.SimpleMaps.loadMap('map'); // Replace 'map' with the ID of your map div
            }
        };

        loadMapScripts();

        // Cleanup on component unmount
        return () => {
            const scripts = document.querySelectorAll('script[src*="mapdata.js"], script[src*="countrymap.js"]');
            scripts.forEach((script) => script.remove());
        };
    }, []);

    return (
        <div>
            <div id="map" style={{ width: '100%', height: '600px' }}></div>
        </div>
    );
};

export default SimpleMap;