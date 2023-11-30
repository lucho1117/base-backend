const { obtenerDatos } = require("../services/firma.services");
const jre = require('node-jre');





exports.estampadoFirma = async  ( req, res ) => {

  const file = req.params.documento + ".pdf";
  const params = [
    "2",
    "/Users/luciochumil/Desktop/logos/ministeriopublico.ks", //"E:\\Desarrollo 2019\\2018-63_mp_backend-firma-electronica-institucional\\DAEMOND_FIRMA\\constants\\certificado\\ministeriopulico.ks";  // "E://requisitos/ministeriopulico.ks"; 
    "ministeriopublico", //ministeriopublico
    "MP2017FDigital", 
    "http://consultasmp.mp.gob.gt/docs/index.html?cve=",

    "/Users/luciochumil/Documents/MP_PROJECTS/Estanpado_firma/prueba_estampado/archivos", //"E:\\requisitos\\",
    "",
    "/Users/luciochumil/Documents/MP_PROJECTS/Estanpado_firma/prueba_estampado/firmados/",
    
    "/" + file,//tupla.nameFirma,
    file,
    file,
    "234567890",
    "01/08/2018[*]04:43",
    "/Users/luciochumil/Desktop/logos/",//"constants/logos/",
    "justificacion",
    "http://consultasmp.mp.gob.gt/docs/index.html?cve=",
    "0",//tupla.flagMarcaAgua,//MARCA DE AGUA


    "JULIO LOPEZ",
    "ANALISTA 3",
    "SIAMP",
    "JULIO",
    "tupla.renas.cui",
    "tupla.renas.mensaje",
    "tupla.renas.fechaGenerado",
    "tupla.renas.fechaVence",
    "users", //json de datos usuarios 
    "config.CERT_USERS", // ubicacion de certificados personales
    "config.SIGN_USERS", // ubicacion de firma personales
    "config.STAMP_USERS" // ubicacion de firma personales
  ]
   
  try {

    // Ruta al archivo JAR
    const rutaAlJar = "/Users/luciochumil/Documents/MP_PROJECTS/Estanpado_firma/2019-43_mp_firma_unificada_jar/dist/firma-electronica.jar";

    // Ejecutar el archivo JAR
    const resp = jre.spawnSync(
      [rutaAlJar],
        'firma.electronica.Main', 
        params,
        { encoding: 'utf8' }
    );
  
    res.json({ resp });

  } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'Error al obtener datos' });
  }
}


exports.obtenerDatos = async  ( req, res ) => {
   
  try {
      const resp = await obtenerDatos();

      res.json({ resp });
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'Error al obtener datos' });
  }
}