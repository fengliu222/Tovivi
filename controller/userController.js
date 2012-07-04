var models = require("../models");

var loveModel = models.get("love");

	
exports = module.exports = {
	sayView:function(req,res,next){

		res.render("say",{
			layout:"layout.ejs",
			title:"Say love",
			 
		});
	},
	getlist:function(req,res,next){
		var query = loveModel.find({});
		query.sort('data',1);
		query.run(function(err,data){
			res.contentType('json');
			res.send(data);
		})

	},
	subLove:function(req,res,next){
		var data = req.body.user,
			love = data.love ,
			music = data.audio? data.audio : "",
			pic = data.pic? data.pic : "",
			video = data.video? data.video : "";

			console.log(pic);
		var post = new loveModel({
			word:love,
			audio:music,
			pic:pic,
			video:video
		});
		post.save(function(err){
		 	res.end();
		});

	}

}