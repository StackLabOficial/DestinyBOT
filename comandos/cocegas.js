const Discord = require('discord.js');
const c = require('../config.json');
const superagent = require('superagent');

exports.run = async (client, message, args) => {
  
  let erro = new Discord.RichEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Faça cócegas em alguém*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}cocegas <@user>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}cocegas @young\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}tickle\``)
  .setColor('#a67dff')  
  

    if (!message.mentions.users.first()) return message.channel.send(erro);
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/tickle");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setDescription(`**${message.author.username}** fez cócegas em **${message.mentions.users.first().username}** :joy:`)
    .setImage(body.url) 
    message.channel.send({embed})
}
exports.help = {
    name: 'tickle',
    aliases: ['cocegas', 'cócegas']
}   
