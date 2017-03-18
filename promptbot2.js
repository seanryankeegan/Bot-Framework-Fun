var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);


bot.dialog('/', [
    function(session){
        builder.Prompts.text(session, "What's your name?");
    },
    function(session,results){
        session.userData.name = results.response;
        builder.Prompts.number(session, "Thanks " + results.response + ", what's your favorite number?");
    },
    function(session,results){
        session.userData.number = results.response;
        builder.Prompts.choice(session,"What ice cream do you like?",["chocolate","vanilla","strawberry"])
    },
    function(session, results){
        console.log("results=", results)
        session.userData.iceCream = results.response.entity;
        session.send("Thanks %s, you like the number %s and the ice cream flavor %s", session.userData.name, session.userData.number, session.userData.iceCream);
    }
])
