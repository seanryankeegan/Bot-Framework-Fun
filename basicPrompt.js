// Tried to remake promptbot.js from memory

var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);

bot.dialog('/', [
    function(session){
        builder.Prompts.text(session, "WHat's your name?")
    },
    function(session, results){
        session.userData.name=results.response;
        session.send("Your name is " + session.userData.name);
    }
])