/*
 * Set Home Mod
 * Version : 1
 * Author : Darius Ellert Klaus / DevilLord Aero
 * Requester : Fitra Ibrahim Nyan
 *
 */

var home = [];
var homeX = [];
var homeY = [];
var homeZ = [];

function newLevel() {
	chat("Usage: /home [name] || /setHome [name] || /delHome [name]");
	chat("IMPORTANT!");
	chat("DO NOT USE SPACING FOR NAME!");
}

function procCmd(cmd) {
	c = cmd.split(" ");
	if(c[0] == "home") {
		if(c[1] != null || c[1] != "" || c[1] != undefined) {
			for(var i = 0;i<home.length;i++)
				if(c[1] == home[i]) {
					setPosition(getPlayerEnt(),homeX[i],homeY[i],homeZ[i]);
				} else {
					chat("There no home named as : " + c[1]);
				}
			}
		} else {
			chat("Please type the home name!");
		}
 	}
 	if(c[0] == "sethome") {
 		if(c[1] != null || c[1] != "" || c[1] != undefined) {
			for(var i = 0;i < home.length;i++) {
				if(c[1] != home[i]) {
					home.push(c[1]);
					homeX.push(getPlayerX());
					homeY.push(getPlayerY());
					homeZ.push(getPlayerZ());
					chat("Home setted at x: " + getPlayerX() + " y: " + getPlayerY() + "z: " + getPlayerZ() + "With name: " + c[1]);
					break;
				} else {
					chat("Home already exists");
				}
			}
		} else {
			chat("Please type the home name!");
		}
 	}
 	if(c[0] == "delhome") {
 		if(c[1] != null || c[1] != "" || c[1] != undefined) {
			for(var i = 0;i < home.length;i++) {
				if(c[1] == home[i]) {
					home.slice(i,1);
					homeX.slice(i,1);
					homeY.slice(i,1);
					homeZ.slice(i,1);
					chat("Succesfully deleted " + c[1] + " from home list");
					break;
				} else {
					chat("There no home named as : " + c[1]);
				}
			}
		} else {
			chat("Please type the home name!");
		}
 	}
 	if(c[0] == "homelist") {
 		for(var i = 0;i < home.length;i++) {
 			chat(home.toString());
 		}
 	}
}

chat = function(message) {
	clientMessage("[Home] " + message);
}
