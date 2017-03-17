var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);

bot.dialog('/', [
    function(session){
        builder.Prompts.text(session,"What's your name?")
},
    function(session, results){
        session.userData.name = results.response;
        session.send("Hello " + session.userData.name);
    }
])