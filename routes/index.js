var express = require('express');
var router = express.Router();


//CREANDO METODOS PARA EL API REST
var mongoose = require('mongoose');
var Paciente = mongoose.model('Paciente'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//GET - listar pacientes
router.get('/pacientes', function(req, res, next){
	Paciente.find(function(err, pacientes){
		if(err){
			return next(err);
		}
		res.json(pacientes);
	})
})

router.post('/paciente', function(req, res, next){
	var paciente = new Paciente(req.body);

	paciente.save(function(err, paciente){
		if (err) {
			return next(err);
		}
		res.json(paciente);
	})
})


module.exports = router;
