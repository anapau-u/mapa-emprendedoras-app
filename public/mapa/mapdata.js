var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    state_description: "",
    state_color: "#b45151",
    state_hover_color: "#793939",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    MXAGU: {
      name: "Aguascalientes",
      description: "Cafe Lola"
    },
    MXBCN: {
      name: "Baja California",
      description: " "
    },
    MXBCS: {
      name: "Baja California Sur",
      description: " "
    },
    MXCAM: {
      name: "Campeche",
      description: " "
    },
    MXCHH: {
      name: "Chihuahua",
      description: "Uniqlo, Sabran, JabonesJulia, OpheliaPan"
    },
    MXCHP: {
      name: "Chiapas",
      description: " "
    },
    MXCMX: {
      name: "Ciudad de México",
      description: " "
    },
    MXCOA: {
      name: "Coahuila",
      description: " "
    },
    MXCOL: {
      name: "Colima",
      description: " "
    },
    MXDUR: {
      name: "Durango",
      description: " "
    },
    MXGRO: {
      name: "Guerrero",
      description: " "
    },
    MXGUA: {
      name: "Guanajuato",
      description: " "
    },
    MXHID: {
      name: "Hidalgo",
      description: " "
    },
    MXJAL: {
      name: "Jalisco",
      description: " "
    },
    MXMEX: {
      name: "México",
      description: " "
    },
    MXMIC: {
      name: "Michoacán",
      description: " "
    },
    MXMOR: {
      name: "Morelos",
      description: " "
    },
    MXNAY: {
      name: "Nayarit",
      description: " "
    },
    MXNLE: {
      name: "Nuevo León",
      description: " "
    },
    MXOAX: {
      name: "Oaxaca",
      description: " "
    },
    MXPUE: {
      name: "Puebla",
      description: " "
    },
    MXQUE: {
      name: "Querétaro",
      description: " "
    },
    MXROO: {
      name: "Quintana Roo",
      description: " "
    },
    MXSIN: {
      name: "Sinaloa",
      description: " "
    },
    MXSLP: {
      name: "San Luis Potosí",
      description: " "
    },
    MXSON: {
      name: "Sonora",
      description: " "
    },
    MXTAB: {
      name: "Tabasco",
      description: " "
    },
    MXTAM: {
      name: "Tamaulipas",
      description: " "
    },
    MXTLA: {
      name: "Tlaxcala",
      description: " "
    },
    MXVER: {
      name: "Veracruz",
      description: " "
    },
    MXYUC: {
      name: "Yucatán",
      description: " "
    },
    MXZAC: {
      name: "Zacatecas",
      description: " "
    }
  },
  locations: {
    "0": {
      name: "Mexico City",
      lat: "19.434167",
      lng: "-99.138611"
    }
  },
  labels: {
    MXAGU: {
      name: "Aguascalientes",
      parent_id: "MXAGU"
    },
    MXBCN: {
      name: "Baja California",
      parent_id: "MXBCN"
    },
    MXBCS: {
      name: "Baja California Sur",
      parent_id: "MXBCS"
    },
    MXCAM: {
      name: "Campeche",
      parent_id: "MXCAM"
    },
    MXCHH: {
      name: "Chihuahua",
      parent_id: "MXCHH"
    },
    MXCHP: {
      name: "Chiapas",
      parent_id: "MXCHP"
    },
    MXCMX: {
      name: "Ciudad de México",
      parent_id: "MXCMX"
    },
    MXCOA: {
      name: "Coahuila",
      parent_id: "MXCOA"
    },
    MXCOL: {
      name: "Colima",
      parent_id: "MXCOL"
    },
    MXDUR: {
      name: "Durango",
      parent_id: "MXDUR"
    },
    MXGRO: {
      name: "Guerrero",
      parent_id: "MXGRO"
    },
    MXGUA: {
      name: "Guanajuato",
      parent_id: "MXGUA"
    },
    MXHID: {
      name: "Hidalgo",
      parent_id: "MXHID"
    },
    MXJAL: {
      name: "Jalisco",
      parent_id: "MXJAL"
    },
    MXMEX: {
      name: "México",
      parent_id: "MXMEX"
    },
    MXMIC: {
      name: "Michoacán",
      parent_id: "MXMIC"
    },
    MXMOR: {
      name: "Morelos",
      parent_id: "MXMOR"
    },
    MXNAY: {
      name: "Nayarit",
      parent_id: "MXNAY"
    },
    MXNLE: {
      name: "Nuevo León",
      parent_id: "MXNLE"
    },
    MXOAX: {
      name: "Oaxaca",
      parent_id: "MXOAX"
    },
    MXPUE: {
      name: "Puebla",
      parent_id: "MXPUE"
    },
    MXQUE: {
      name: "Querétaro",
      parent_id: "MXQUE"
    },
    MXROO: {
      name: "Quintana Roo",
      parent_id: "MXROO"
    },
    MXSIN: {
      name: "Sinaloa",
      parent_id: "MXSIN"
    },
    MXSLP: {
      name: "San Luis Potosí",
      parent_id: "MXSLP"
    },
    MXSON: {
      name: "Sonora",
      parent_id: "MXSON"
    },
    MXTAB: {
      name: "Tabasco",
      parent_id: "MXTAB"
    },
    MXTAM: {
      name: "Tamaulipas",
      parent_id: "MXTAM"
    },
    MXTLA: {
      name: "Tlaxcala",
      parent_id: "MXTLA"
    },
    MXVER: {
      name: "Veracruz",
      parent_id: "MXVER"
    },
    MXYUC: {
      name: "Yucatán",
      parent_id: "MXYUC"
    },
    MXZAC: {
      name: "Zacatecas",
      parent_id: "MXZAC"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};