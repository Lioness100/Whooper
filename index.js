const Discord = require('discord.js);
const client = new Discord.Client();

client.on('ready', (ready) => {
   console.log('why revolug. why.')
};

const woopers = ['insert link here', 'and here', 'and here', 'and maybe here as well if you are a true madlad']

client.on('message', (message) => {
   if (message.content === '!wooper')
      message.channel.send(new Discord.MessageEmbed()
         .setColor('GREEN')
         .setTitle('revolug why')
         .setImage(woopers[Math.floor(Math.random() * woopers.length)]);
      );
}

client.login('put your token here');
