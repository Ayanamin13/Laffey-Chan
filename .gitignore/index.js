const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Command: !help");
    console.log("Connected");
});

bot.login("ODcwMjI1MzE0NzUwNTQxODU0.YQJqew.DVskJbCa1onI_EdUxd2saC244-4");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -!help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué)");
   }
});
