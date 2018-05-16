const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("command: *help")
    console.log("connected");
});

bot.login("NDQ2MzAwNjEyNTQ0NDMwMDgw.Dd3CKQ.jqFMAGvr-Js_DdjIAAXXkWXykX0")


bot.on('message', message => {
    if(message.content === prefix + "help"){
        message.channel.send("Liste des commandes: \n *help \n *combat \n *calendrier \n ");
    }
    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
    if (message.content === prefix + "combat"){
        message.reply("Les combats prévus dans cette semaine sont : *Joueur* VS *Joueur* !")
    }
    if (message.content === prefix + "calendrier"){
        message.reply("Voici le calendrier des combats !")

    }


});

