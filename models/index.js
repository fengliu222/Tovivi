
var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var date = new Date();
var love = new Schema();
love.add({

	word:{type:String,index:true},
	pic:[String],
	audio:[String],
	video:[String],
	date:{
		type:Date,
		default:date.toUTCString()
	},
	owner:ObjectId
});
mongoose.model('love',love);


exports = module.exports=love;
exports = module.exports.get = function(model){
	return mongoose.model(model);
}