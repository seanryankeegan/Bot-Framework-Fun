var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);

bot.dialog('/', [
    function(session){
        builder.Prompts.text(session, "Hello, what's your name?");
    },
    function(session, results) {
        session.userData.name = results.response;
        builder.Prompts.number(session, "How many years have you been coding?");
    },
    function(session, results){
        session.userData.number = results.response;
        builder.Prompts.choice(session, "What language for node?",["JavaScript", "CoffeeScript", "TypeScript"]);
    },
    function(session, results){
        session.userData.language = results.response.entity;
        session.send("Got it, your name is " + session.userData.name + " and you've been coding for " + session.userData.number + " years and you write code in " + session.userData.language);
    }
])