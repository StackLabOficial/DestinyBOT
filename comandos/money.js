const db = require('quick.db');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const member = message.mentions.users.first() || message.author;
  
    const reais = await db.get(`reais_${member.id}`)
    if (reais === null) reais = 0;
  
    let embed = new Discord.RichEmbed()

    .addField(`<:yenbag:700521423076196412> **Saldo atual**`, `**¥ ${reais}**`)
    .setColor('#ffff99')
    .setFooter(`Usuário: ${member.username}`)

    message.channel.send(embed)
}

exports.help = {
    name: 'money',
    aliases: ['dinheiro', 'yen', 'saldo']
}
