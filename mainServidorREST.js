// .....................................................................
// mainServidorREST.js
// .....................................................................
// .....................................................................
// .....................................................................
const express = require( 'express' )
const bodyParser = require( 'body-parser' )
var cors = require('cors')

// .....................................................................
// .....................................................................
function main() {
  // creo el servidor
  var servidorExpress = express()
  // para poder acceder a la carga de la petición http, asumiendo que es JSON
  servidorExpress.use(cors()) // Use this after the variable declaration

  servidorExpress.use ( bodyParser.text({type : 'application/json'}) )
  // cargo las reglas REST
  var reglas = require( "./ReglasREST.js")
  reglas.cargar( servidorExpress )
  // arranco el servidor
  var servicio = servidorExpress.listen( 3000, function() {
    console.log( "servidor REST escuchando en el puerto 3000 ")
  })

  // capturo control-c para cerrar el servicio ordenadamente
  process.on('SIGINT', function() {
    console.log (" terminando ")
    servicio.close ()
  })
} // ()
// .....................................................................
// .....................................................................
main()
