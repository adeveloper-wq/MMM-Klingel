var NodeHelper = require("node_helper")
var app = require("express")();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
   
module.exports = NodeHelper.create({
	start: function() {
		var self = this
		app.use(bodyParser.json())
		app.post('/',function(req,res){
			var msg=req.body.msg;
			console.log("Nachricht: " + msg);
			if (msg.indexOf('Klingel') > -1){
				self.sendSocketNotification("KLINGEL", (msg))
			}
			return res.send("...Klingel wird am Bildschirm angezeigt.")
		});

		 http.listen(3000, function(){
		 console.log('listening...');
		 });
	},
	socketNotificationReceived: function(notification) {
		switch(notification) {
			case "ACTIVATE_KLINGEL":

				break
		}
	},
})
