
/*
 * GET home page.
 */
var commonController = require("../controller/commonController");
var userController = require("../controller/userController");

exports = module.exports =function(app){
	app.get('/',commonController.index);
	app.get('/getlist',userController.getlist);
	//app.post('/user',userController.console,commonController.index);
	app.get('/say',userController.sayView);
	app.post('/say',userController.subLove);
	app.post('/removelog',userController.removelog);
}
