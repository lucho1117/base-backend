exports.obtenerDatos = async () => {
    return new Promise ( ( resolve ) => {
        setTimeout(() => {
            resolve(['dato1', 'dato2', 'dato3']);
        },  1000 );
    });
}
