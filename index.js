const Discord = require('discord.js');
const client = new Discord.Client();

const token = "NjAyNzIyNjE0MTQxNTE3ODI0.XUZ0Uw.kHuFkAEGD46v0jxJo-XeojtRneU"


client.login(token);


var userQueue1  = [];
var userQueue2 = [];
var userQueue3 = [];
var userQueue4 = [];

client.on("message", message =>{


    
addQueue(".", userQueue1, message, "q1");
addQueue("!", userQueue2, message, "Friends List Queue");
addQueue("$", userQueue3, message, "q3");
addQueue("?", userQueue4, message, "q4");


    

//misc commands

switch(message.content){
    case "!auth":
        message.channel.send("This bot was created by @NewsCorpReporter#7291 - Thieivnghost Developer");
}
   switch(message.content){
    case "!giveaways":
        message.channel.send("You can join daily giveaways in the #giveaways section!");
} 
   switch(message.content){
    case "?help":
        message.channel.send("Try asking members your question in the #general tab. If they can't help there type __@staff__ to tag a staff member.");
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
                    message.channel.send(message.author.username + " **SUCCESS!** You have joined the queue.");
        
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









