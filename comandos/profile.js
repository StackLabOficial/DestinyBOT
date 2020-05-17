const db = require('quick.db');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const member = message.mentions.users.first() || message.author;
    const reais = await db.get(`reais_${member.id}`)
    if (reais === null) reais = 0;
  
    const rep = await db.fetch(`rep_${member.id}`)
    if (rep === null) rep = 0;
  
    const emprego = await db.get(`trabaio_${member.id}`)
    if (emprego === null) emprego = `Desempregado`
    if (emprego === 1) emprego = "💻 Programador"
    if (emprego === 2) emprego = "🔧 Mecânico"
    if (emprego === 3) emprego = "🔨 Construtor"
    if (emprego === 4) emprego = "🖌️ Designer"
  
  
    const desc = await db.get(`desc_${member.id}`)
    if (desc === null) desc = "Nenhuma biografia definida";

    let embed = new Discord.RichEmbed()
    
    .setDescription(`${desc}`)
    .addField(`:yen: **Yen**`, `\`¥ ${reais}\``, true)
    .addField(`:handshake: **Reputação**`, `\`${rep} RP\``, true)
    .addField(`:briefcase: **Emprego**`, `\`${emprego}\``)
    .setFooter(`Perfil de: ${member.username}`, member.avatarURL)
    .setColor('#36393e')

    message.channel.send(embed)
}

exports.help = {
    name: 'profile',
    aliases: ['perfil']
}
