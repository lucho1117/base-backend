const { obtenerDatos } = require("../services/firma.services");
const jre = require('node-jre');





exports.estampadoFirma = async  ( req, res ) => {

  const file = req.params.documento + ".pdf";
  const params = [
    "8",
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
    `{'usuarios':[{'_id':'5dc2d41dae7f76fcf66758ce',
    'orderSign':1,
    'nip':'20171119',
    'name':'JOSÉ DANIEL GUDIEL DE LEÓN',
    'job':'ANALISTA PROGRAMADOR',
    'departament':'DEPARTAMENTO DEL SISTEMA INFORMATICO DEL CONTROL DE INVESTIGACION DEL MINISTERIO PUBLICO',
    'statusSign':true,
    'signDate':'01/08/2018 04:43',
    'keyStore':'ministeriopulico.ks',
    'certPass':'MP2017FDigital',
    'keyPass':'ministeriopublico',
    'signStore':'Logo_MP.png',
    'signR':'Logo_MP.png',
    'stampStore':'Logo_MP.png'},
    {'_id':'5dc2d41dae7f76fcf66758cd',
    'orderSign':2,
    'nip':'20170440',
    'name':'JORGE LUIS HIDALGO LÓPEZ',
    'job':'ANALISTA EN DESARROLLO DE APLICACIONES INFORMATICAS',
    'departament':'UNIDAD DE EVALUACION DEL DESEMPEÑO DEL MINISTERIO PUBLICO',
    'statusSign':true,
    'signDate':'01/08/2018 04:43',
    'keyStore':'ministeriopulico.ks',
    'certPass':'MP2017FDigital',
    'keyPass':'ministeriopublico',
    'signStore':'Logo_MP.png',
    'signR':'Logo_MP.png',
    'stampStore':'Logo_MP.png'}]}`, //json de datos usuarios 
    "config.CERT_USERS", // ubicacion de certificados personales
    "logos", // ubicacion de firma personales
    "logos" // ubicacion de firma personales
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