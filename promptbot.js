var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);

var salesData = {
    "west": {
        units: 200,
        total: "$6,000"
    },
    "central": {
        units: 1,
        total: "$3,000"
    },
    "east": {
        units: 300,
        total: "$9,000"
    }
};

bot.dialog('/', [
    function (session) {
        builder.Prompts.choice(session, "Which region would you like sales for?", salesData); 
    },
    function (session, results) {
        if (results.response) {
            var region = salesData[results.response.entity];
            session.send("We sold %(units)d unit for a total of %(total)s.", region); 
        } else {
            session.send("ok");
        }
    }
]);