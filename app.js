function encodeMsg (message){
	var newMessage = "";
	for (var i = 0; i < message.length; i++){
 		if (message[i] === "a"){
 			newMessage += 4;
 		}
 		else if (message[i] === "e"){
 			newMessage += 3;
 		}
 		else if (message[i] === "i"){
 			newMessage += 1;
 		}
 		else if (message[i] === "o"){
 			newMessage += 0;
 		}
 		else{
 			newMessage += message[i];
 		}	
 	}
 console.log(newMessage) 
}
encodeMsg('Javascript is Amazing')

function decodeMsg (message){
	var newMessage = "";
	for (var i = 0; i < message.length; i++){
 		if (message[i] === "4"){
 			newMessage +='a' ;
 		}
 		else if (message[i] === "3"){
 			newMessage += 'e' ;
 		}
 		else if (message[i] === "1"){
 			newMessage += 'i';
 		}
 		else if (message[i] === "0"){
 			newMessage += 'o';
 		}
 		else{
 			newMessage += message[i];
 		}	
 	}
 console.log(newMessage) 


}
decodeMsg('J4v4scr1pt 1s Am4z1ng')