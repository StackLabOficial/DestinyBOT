const Discord = require('discord.js'); 
const moment = require("moment");
const db = require("quick.db");

const status = { 
    online: "<:online:689727178665099267> Disponivel", 
    idle: "<:idle:689726690368421919> Ausente",       
    dnd: "<:dnd:689727224777408517> Ocupado", 
    offline: "<:offline:689726874838237277> Offline" 
};
exports.run = async (client, message, args) => {
 
    var acknowledgements = 'Nenhuma';
    
   
    const member = message.mentions.members.first() || message.member;
    var dinheiro = db.get(`reais_${member.id}`)
    if (dinheiro === null) dinheiro = 0;

        const emprego = await db.get(`trabaio_${member.id}`)
        if (emprego === 1) emprego = "💻 Programador"
        if (emprego === 2) emprego = "🔧 Mecânico"
        if (emprego === 3) emprego = "🔨 Construtor"
        if (emprego === 4) emprego = "🖌️ Designer"
        if (emprego === null) emprego = "Desempregado"
  
    const rep = db.get(`rep_${member.id}`)
    if (rep === null) rep = 0;
    
   const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
 
            let emb = new Discord.RichEmbed()

            .setAuthor(`${member.user.username}`, member.user.displayAvatarURL)
            .addField('<a:join:689563871656149135> » Data de entrada nesse Discord',`\`${moment(member.joinedAt).format("LLL")}\``)
            .addField(":date: » Data de criação da conta",`\`${moment(member.user.createdAt).format("LLL")}\``)
            .addField(`:bookmark: » Cargos [${member.roles.filter(r => r.id !== message.guild.id).map(a => `\`${a.name}\``).length}]`,`${member.roles.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(', ') || "Nenhum cargo encontrado."}`)
            .addField("<a:bolb_happy:657346070292201511> » Jogando", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Nenhum jogo detectado"}`)
            .addField("<a:discord_animated:689566699711889665> » Status",`${status[member.user.presence.status]}`)
            .addField("🔖 » Tag", `#${member.user.discriminator}`)
            .addField(":busts_in_silhouette: » Apelido", `\`${member.nickname !== null ? `${member.nickname}` : 'Nenhum apelido.'}\``)
            .addField(":yen: » Yen", `\`¥ ${dinheiro}\``)
            .addField(":briefcase: » Emprego", `\`${emprego}\``)
            .addField(':handshake: » Reputação',  `\`${rep} RP\``)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor('#068ca1')

            message.channel.send(emb)
            
}

exports.help = {
    name: 'userinfo',
    aliases: ['membroinfo']
}
