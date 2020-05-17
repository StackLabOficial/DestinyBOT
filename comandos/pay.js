const Discord = require("discord.js")
const db = require('quick.db')
const c = require('../config.json');

exports.run = async (client, message, args, config) => {
  
   let erro = new Discord.RichEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Pague yens para um usuário*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}pay <@user> <quantia>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}pay @yong 100\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}pagar\``)
  .setColor('#a67dff')  

    const member = message.mentions.users.first() 

    const money = db.get(`reais_${message.author.id}`)

    if (!member) {
        return message.channel.send(erro)
    }
  
    if (member === message.author) {
        return message.reply(`mencione outro usuário!`)
    }
  
    if (!args[1]) {
        return message.channel.send(erro)
    }
  
    if (!args[0]) {
        return message.channel.send(erro)
    }

    if (args[1] < 1) {
      return message.channel.send(`<:alert:696822589208920124> **»** Kon'nichiwa **${message.author.username}**, coloque um número acima de **¥ 1,00**`)
    }

    if (message.content.includes('-')) { 
        return message.channel.send(`<:alert:696822589208920124> **»** Kon'nichiwa **${message.author.username}**, você está tentando abusar?`)
    }
  
   if (isNaN(args[1])) {
     return message.channel.send(`lll`)
   }

    if (money < args[1]) {
        return message.channel.send(`<:alert:696822589208920124> **»** Kon'nichiwa **${message.author.username}**, você não possui **¥ ${args[1]}**.`)
    }

    message.channel.send(`Kon'nichiwa **${message.author.username}**, você realmente deseja pagar **¥ ${args[1]}** ao membro **${member.username}**?`).then(s => {
      s.react('653747627019599882')
        let filtro = (reaction, usuario) => reaction.emoji.id === "653747627019599882" && usuario.id === message.author.id;
        let coletor = s.createReactionCollector(filtro, {max: 1, time: 36000});

        coletor.on("collect", c => {
            c.remove(message.author.id);
          
          message.channel.send(`<:cartao:700491719761723503> **»** Pronto **${message.author.username}**, pagamento feito com êxito!`)
          s.delete()
         db.add(`reais_${member.id}`, args[1])
         db.subtract(`reais_${message.author.id}`, args[1])
           
     })
    })
}

exports.help = {
    name: 'pay',
    aliases: ['pagar']
}
