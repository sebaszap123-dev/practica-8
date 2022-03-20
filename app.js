// Se creo un package.json con información que me fue pidiendo

var http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello worldit\n");
  })
  .listen(1337, "127.0.0.1");

// se ejecuta el codigo y la consola se queda como en espera
// Se puede cerrar con ctrl + C

// Se logro usar la función de flecha

// Al entrar a localhost:1337 se abre la "pagina" que se creo al ejecutar el codigo
// Y se puede visualizar el hello world
// #abrir la herramienta de desarrollo

// Sale el estado de conexion 200 ok
// La version de HTTP/1.1 y el tramaño transferido
/* tipos de conecciones el content type y todo lo que pedia
Al momento de ejecutar el npm init,
También estan los encabezados de petición
Cache, lenguaje, el agente de usuario en mi caso mozilla
y la connection que es keep-alive
*/
