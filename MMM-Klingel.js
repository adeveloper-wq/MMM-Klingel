require('dotenv').config();

Module.register("MMM-Klingel", {
	defaults: {
		
	},
	start: function() {
		this.sendSocketNotification("ACTIVATE_KLINGEL")
	},
		
	getDom: function() {
		var element = document.createElement("div")
		element.className = "klingel-sign"
		element.id = "KLINGEL"

		return element
	},
	notificationReceived: function(notification, payload, sender) {

	},
	socketNotificationReceived: function(notification, payload) {
		switch(notification) {
			case "KLINGEL":
				//var elem = document.getElementById("KLINGEL")
				//elem.innerHTML = payload
				if (payload.indexOf('Pforte') > -1){
					this.sendNotification("SHOW_ALERT", {title : payload, message : "Bitte Tür öffnen!", timer : 10000, imageUrl : process.env.imageUrl, imageHeight: '380px'});
				}else{
					this.sendNotification("SHOW_ALERT", {title : payload, message : "Bitte Tür öffnen!", timer : 10000});

				}
				break
		}
	}, 
})
