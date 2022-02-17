const { response, request } = require('express')


const usuariosGet = (req = request, res = response) => {

    const { nombre = 'no name', q, apikey } = req.query;

    res.json({
        msg: 'get api',
        nombre,
        q,
        apikey
    });
}

const usuariosPut = (req = request, res= response) => {

    const { id } = req.params;

    res.json({
        msg: 'put apii',
        id
    })
  }

const usuariosPost = (req = request, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post api',
        nombre,
        edad
    })
  }  

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete api'
    })  
  }  

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch api'
    })  
  }  

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}