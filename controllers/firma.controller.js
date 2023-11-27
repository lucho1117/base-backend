const { obtenerDatos } = require("../services/firma.services");
const jre = require('node-jre');


const params = [
    "6",
    "constants/certificado/ministeriopulico.ks", //"E:\\Desarrollo 2019\\2018-63_mp_backend-firma-electronica-institucional\\DAEMOND_FIRMA\\constants\\certificado\\ministeriopulico.ks";  // "E://requisitos/ministeriopulico.ks"; 
    "changeit", //ministeriopublico
    "MPf1rm@2018", 
    "http://consultasmp.mp.gob.gt/docs/index.html?cve=",
    "/Users/luciochumil/Documents/MP_PROJECTS/Estanpado_firma/prueba_estampado/aFirmar", //"E:\\requisitos\\",
    "",
    "/Users/luciochumil/Documents/MP_PROJECTS/Estanpado_firma/prueba_estampado/archivos",
    "/Users/luciochumil/Documents/MP_PROJECTS/Estanpado_firma/prueba_estampado/archivos",
    "",//tupla.nameConsulta,
    "/UJJFPJFPZB.pdf",//tupla.nameFirma,
    "file_f.pdf",
    "234567890",
    "constants/logos/",//"constants/logos/",
    "prueba",
    "http://consultasmp.mp.gob.gt/docs/index.html?cve=",
    "0",//tupla.flagMarcaAgua,//MARCA DE AGUA
    "tupla.generalInfoSign.nameUser",
    "tupla.generalInfoSign.puestoUser",
    "tupla.generalInfoSign.procedencia",
    "tupla.renas.nombre",
    "tupla.renas.cui",
    "tupla.renas.mensaje",
    "tupla.renas.fechaGenerado",
    "tupla.renas.fechaVence",
    "users", //json de datos usuarios 
    "config.CERT_USERS", // ubicacion de certificados personales
    "config.SIGN_USERS", // ubicacion de firma personales
    "config.STAMP_USERS" // ubicacion de firma personales
]



exports.estampadoFirma = async  ( req, res ) => {
   
    try {

      // Ruta al archivo JAR
      const rutaAlJar = "/Users/luciochumil/Documents/MP_PROJECTS/Estanpado_firma/2019-43_mp_firma_unificada_jar/firma-electronica.jar";

      // Configuración del entorno Java
     /*  const config = {
        // Opciones de Java (opcional)
        options: ['-Xmx512m'],
        // Ruta al archivo JAR
        classpath: rutaAlJar,
        
      }; */

      // Ejecutar el archivo JAR
      const resp = jre.spawnSync(
        [rutaAlJar],
          'firma.electronica.Main', 
          params,
          { encoding: 'utf8' }
      );
      console.log(resp)
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