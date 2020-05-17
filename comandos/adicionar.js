const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let embed = new Discord.RichEmbed()

    .setDescription(`<:Destiny_smile:697590701633962107> Kon'nichiwa **${message.author.username}**, clique **[AQUI](https://discordapp.com/api/oauth2/authorize?client_id=653691138229927936&permissions=8&scope=bot)**, para me adicionar.`)
    .setColor('#36393e')

    message.author.send(embed)
    message.channel.send(`:mailbox: **»** Kon'nichiwa **${message.author.username}**, verifique suas mensagens privadas...`)

}

exports.help = {
    name: 'convidar',
    aliases: ['adicionar', 'convite']
}
