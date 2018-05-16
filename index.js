const Discord = require('discord.js')
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ combats: []})
    .write();
  
var prefix = ("!")

bot.on('ready', function() {
    bot.user.setActivity("Les commandes ==> [!help]")
    console.log("connected");
});

bot.login("NDQ2MzAwNjEyNTQ0NDMwMDgw.Dd3CKQ.jqFMAGvr-Js_DdjIAAXXkWXykX0")


bot.on('message', message => {
    if (message.content === prefix + "help"){
       var help_embed = new Discord.RichEmbed()
        .setColor('#F28900')
        .addField("Commandes du Bot : ", "!help : Affiche les commandes du Bot.")
        .addField("!Calendrier","Permet d'observer les matchs prévus dans une période de 1 mois.")
        .addField("!Duel", "Permet de défier un joueur.")
        .addField("!Combat","Permet de connaitre les combat qui se déroule cette semaine.")
        .setFooter("Tout abus des commandes seront sanctionnées.")

        message.channel.sendEmbed(help_embed);
        
        console.log("Commande help effectué");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === prefix + "/combat"){
        message.reply("Les combats prévus dans cette semaine sont : *Joueur* :crossed_swords:  *Joueur* !")
        console.log("Commande combat effectuée");
    }

    if (message.content === prefix + "calendrier"){
        message.reply("Voici le calendrier des combats !")
        console.log("Commande calendrier effectuée");
    }    

    
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()){

        case "combat":
        var value = message.content.substr(8);
        var author = message.author.toString();
        var number = db.get('combats').map('id +1').value()
        console.log(value); 
        message.reply("Ajout du combat à la base de donnée ")
        
            db.get('combats')
            .push({ id: +1+1, story_value : value , story_author: author})
            .write();
    
        break;
    }


});
