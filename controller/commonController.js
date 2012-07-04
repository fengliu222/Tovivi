var models = require("../models");
var loveModel = models.get("love");

exports = module.exports = {
	index:function(req,res,next){
		 
		loveModel.find({}).sort("date",-1).execFind(function(err,docs){
			
			res.render("index",{
				layout:'layout.ejs',
				title:'To My GirlFriend',
				content:docs
			}); 
		})
		
	}
}