const Discord = require('discord.js');
const c = require('../config.json');
const ms = require('ms');

exports.run = async (client, message, args) => {

  let erro = new Discord.RichEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Vou conometrar um tempo para você*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}cronometro <tempo>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}cronometro 10s\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}lembrete, ${c.prefix}lembrar\``)
  .setColor('#a67dff')  

  let Timer = args[0];

  if (!args[0]){
    return message.channel.send(erro);
  }

  if (args[0] <= 0){
    return message.channel.send(erro);
  }

  message.channel.send(":alarm_clock: **»** Irei te chamar em: " + `\`${ms(ms(Timer), {long: true})}\``)

  setTimeout(function(){
    message.channel.send(`<a:sino:689563392243269644> BIP BIP BIP! acabou o tempo ${message.author}`)

  }, ms(Timer));
}

exports.help = {
    name: 'lembrar',
    aliases: ['lembrete', 'cronometro', 'cronômetro']
}
