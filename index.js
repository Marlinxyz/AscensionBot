const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on('ready', () =>{
    console.log('Ascension is Online!');

    bot.user.setActivity('for !help', {type: 'LISTENING'})
    
})

