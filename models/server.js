const express = require('express');
const cors = require('cors')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/user';

        // middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use(cors())

        // Parseo y lectura del body
        this.app.use( express.json());

        // directorio publico
        this.app.use( express.static( 'public' ) )

    }

    routes() {
       
        this.app.use(this.usuariosPath, require('../routes/user'))

    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Server Corriendo en el puerto http://localhost:'+this.port)
        })
    }

}




module.exports = Server;