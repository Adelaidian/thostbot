const Discord = require('discord.js');
const client = new Discord.Client();

const token = "NjAwNTc5ODU5OTc4Mzg3NDc3.XTbTUw.aN4i1qLAXtdnP42UQdVyn7c4NLs"


client.login(token);


var userQueue1  = [];
var userQueue2 = [];
var userQueue3 = [];
var userQueue4 = [];

client.on("message", message =>{


    
addQueue(".", userQueue1, message, "Rank Queue");
addQueue("!", userQueue2, message, "Some Other Queue");
addQueue("$", userQueue3, message, "Some Other Queue2");
addQueue("?", userQueue4, message, "Some Other Queue3");


    

//misc commands

switch(message.content){
    case "!author":
        message.channel.send("Created by Michael Corleone for the Thievinghost Clan. (2019)");
}
    

    
});

function addQueue(prefix, userqueue, message, queueName){
    
    switch(message.content){
        case prefix + "join":  

            //check if user is already in queue
            

            for(let i = 0; i < userqueue.length; i++){
                if(userqueue[i].username === message.author.username){
                    message.channel.send("User already in queue.");
                    return;
                }

            }
          
            //if user is not in queue, push their object to the array
                userqueue.push(
                    {"username" : message.author.username
                     
                    }
                    );
                    message.channel.send(message.author.username + " joined!");
        
            break;



        case prefix + "queue":
                var queuelist = "";
                message.channel.send("**" + queueName + "**");

                if(userqueue.length == 0){
                    message.channel.send("Queue is empty");
                    
                }

                if(userqueue.length != 0){
                    for(let i = 0; i < userqueue.length; i++){
                        
                        
                        queuelist += "\n" + userqueue[i].username;
                    }
                    message.channel.send(queuelist);
                }
                
            break;

        case prefix + "clear":
            //make array blank (clear queue)
            userqueue = [];

            if(userqueue.length == 0){
                message.channel.send("**" + queueName + "** successfully cleared.");
            }
            else{
                message.channel.send("**Failed to clear queue**");
            }

            break;
    }
}










