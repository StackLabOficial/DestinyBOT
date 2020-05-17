const Discord = require("discord.js")
const db = require('quick.db');
const c = require('../config.json');

exports.run = async (client, message, args) => {


    if (!['530192493728366622'].includes(message.author.id)) {
    return message.reply(`apenas desenvolvedores!`)
    }
  

    if (!args[0]) return message.channel.send(`escreva um número`)
    if (isNaN(args[0])) return message.channel.send(`NÚMERO!!!!!`)

    let member = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;
    
    message.channel.send(`${message.author} removeu **¥ ${args[0]}** da conta do usuário ${member}`)
    db.subtract(`reais_${member.id}`, args[0])

}

exports.help = {
    name: 'removeyen',
    aliases: ['removemoney']
}
