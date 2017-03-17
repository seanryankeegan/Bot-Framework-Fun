var builder = require('botbuilder');

var connecter = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connecter);

bot.dialog('/', function(session) {
    session.send('Hello World!');
    console.log("test");
});