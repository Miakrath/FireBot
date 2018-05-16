const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("command: *help")
    console.log("connected");
});

bot.login("NDQ2MzAwNjEyNTQ0NDMwMDgw.Dd3CKQ.jqFMAGvr-Js_DdjIAAXXkWXykX0")


bot.on('message', message => {
    if(message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");

    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
});

