const datos = { mensaje: "¡Validando desde el script nativo!" };

fetch('http://localhost:3000/reporte', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(datos)
})
.then(respuesta => respuesta.json())
.then(jsonRecibido => {
  console.log("\n==================================");
  console.log("¡ÉXITO! Tu ruta POST responde:");
  console.log(jsonRecibido);
  console.log("==================================\n");
})
.catch(error => {
  console.error("Hubo un error al conectar con el servidor:", error.message);
});