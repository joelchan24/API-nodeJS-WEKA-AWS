// .....................................................................
// ReglasREST.js
// .....................................................................
module.exports.cargar = function( servidorExpress) {

  const { exec } = require("child_process");

// POST /bolet
 servidorExpress.post(
   '/bolet',
   async function(peticion, respuesta){
     let res = JSON.parse(peticion.body)

      console.log("atribut1-> "+res.atribut1)
      console.log("atribut2-> "+res.atribut2)
      console.log("atribut3-> "+res.atribut3)
      console.log("atribut1-> "+res.atribut4)
      console.log("atribut2-> "+res.atribut5)
      console.log("atribut3-> "+res.atribut6)
      console.log("atribut1-> "+res.atribut7)
      console.log("atribut2-> "+res.atribut8)
      console.log("atribut3-> "+res.atribut9)
      console.log("atribut1-> "+res.atribut10)
      console.log("atribut2-> "+res.atribut11)
      console.log("atribut3-> "+res.atribut12)
      console.log("atribut1-> "+res.atribut13)
      console.log("atribut2-> "+res.atribut14)
      console.log("atribut3-> "+res.atribut15)
      console.log("atribut1-> "+res.atribut16)
      console.log("atribut2-> "+res.atribut17)
      console.log("atribut3-> "+res.atribut18)
      console.log("atribut1-> "+res.atribut19)
      console.log("atribut2-> "+res.atribut20)
      console.log("atribut3-> "+res.atribut21)
      console.log("atribut3-> "+res.atribut22)

       let fs = require( "fs" )
        fs.appendFile( "mushroom_predict.arff","'"+res.atribut1+"',"+"'"+res.atribut2+"',"+"'"+res.atribut3+"',"+"'"+res.atribut4+"',"+"'"+res.atribut5+"',"+"'"+res.atribut6+"',"+"'"+res.atribut7+"',"+"'"+res.atribut8+"',"+"'"+res.atribut9+"',"+"'"+res.atribut10+"',"+"'"+res.atribut11+"',"+"'"+res.atribut12+"',"+"'"+res.atribut13+"',"+"'"+res.atribut14+"',"+"'"+res.atribut15+"',"+"'"+res.atribut16+"',"+"'"+res.atribut17+"',"+"'"+res.atribut18+"',"+"'"+res.atribut19+"',"+"'"+res.atribut20+"',"+"'"+res.atribut21+"',"+"'"+res.atribut22+"'"+",?", function( err ) {
          if( err ) {
            console.log( "hubo un problema al escribir" )
          }
        })
        fs.appendFile( "mushroom_predict.arff", "\n%\n%\n", function( err ) {
          if( err ) {
            console.log( "hubo un problema al escribir" )
          }
        }) 

      exec("sh script.sh", (error, stdout, stderr) => {
    if (error) {
        console.log("error: "+error.message);
        respuesta.send("ha habido algún error "+error)
        return;
    }
    if (stderr) {
        console.log("stderr: "+stderr);
        respuesta.send("ha habido algún error "+stderr)
        return;
    }
    console.log("stdout: "+stdout);
    respuesta.send({"resultat" : stdout.replace('\n','')})
});

   }
 )

  }
