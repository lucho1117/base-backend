const { obtenerDatos } = require("../services/firma.services");


exports.obtenerDatos = async  ( req, res ) => {
   
    try {
        const resp = await obtenerDatos();

        res.json({ resp });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
}
