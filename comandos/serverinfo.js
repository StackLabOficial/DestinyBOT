const Discord = require("discord.js");

const moment = require("moment")
moment.locale('pt-BR')

exports.run = (client, message, args) => {

    function checkBots(guild) { 
        let botCount = 0; 
        guild.members.forEach(member => { 
            if (member.user.bot) botCount++; 
        });
        return botCount;
    }
    
    function checkMembers(guild) { 
        let memberCount = 0; 
        guild.members.forEach(member => { 
            if (!member.user.bot) memberCount++;
        });
        return memberCount;
    }

    const online = message.guild.members.filter(a => a.presence.status == "online").size;
    const ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    const ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    const offline = message.guild.members.filter(a => a.presence.status == "offline").size;

    const verlvl = {
        0: `\`Sem restrições\``,
        1: `\`Baixa\``,
        2: `\`Mediana\``,
        3: `\`Alta\``,
        4: `\`Hardcore\``
      }
    
        const sicon = message.guild.iconURL; 
        const dono = message.guild.owner.user.tag;
        const region = {
            "brazil": "Brasil",
            "eu-central": "Europa Central",
            "singapore": "Singapura",
            "us-central": "U.S Central",
            "sydney": "Sydney",
            "us-east": "U.S Leste",
            "us-south": "U.S Sul",
            "us-west": "U.S Oeste",
            "eu-west": "Europa Ocidental",
            "vip-us-east": "VIP U.S Lest",
            "london": "London",
            "amsterdam": "Amsterdam",
            "hongkong": "Hong Kong"
        };

        const texto = (`${message.guild.channels.filter(chan => chan.type === 'text').size}`)
        const voz = (`${message.guild.channels.filter(chan => chan.type === 'voice').size}`)
        
        const emojis;
        if (message.guild.emojis.size === 0) {
            emojis = '0';
        } else {
            emojis = message.guild.emojis.size;
        }
  
        let serverembed = new Discord.RichEmbed()
       
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .setColor('AQUA')
        .addField(`__**Informações**__`, `👑 » Proprietário: ${message.guild.owner} / \`${dono}\`\n🌎 » Região: \`${region[message.guild.region]}\`\n:open_file_folder: » Nivel de Verificação: \`${verlvl[message.guild.verificationLevel]}\`\n:laughing: » Emojis: \`${emojis}\``)
        .addField(`__**Datas**__`, `⚙️ » Servidor criado em: \`${moment(message.guild.createdAt).format('LLL')}\`\n:handshake: » Você se juntou aqui em: \`${moment(message.member.joinedAt).format('LLL')}\`\n<:Destiny_smile:697590701633962107> » Eu me juntei ao servidor em: \`${moment(client.joinedAt).format('LLL')}\``, true)
        .addField(`__**Canais**__ **(${texto + voz})**`, `💬 » Texto: \`${textoo}\`\n🎤 » Voz: \`${vozz}\``)
        .addField(`__**Membros**__ **(${message.guild.memberCount})**`, `<:online:689727178665099267> Disponiveis: \`${online}\` │ <:dnd:689727224777408517> Ocupados: \`${ocupado}\` │ <:idle:689726690368421919> Ausentes: \`${ausente}\` │ <:offline:689726874838237277> Offlines: \`${offline}\`\n:busts_in_silhouette: » Humanos: \`${checkMembers(message.guild)}\`\n<:Akura_bot:689750025982574632> » Robôs: \`${checkBots(message.guild)}\``)
        .addField(`__**Cargos**__`, message.guild.roles.map(a => `\`${a.name}\``).join(", "), true)
        .setFooter(`ID: ${message.guild.id}`)
        
    message.channel.send(serverembed);
   
}

exports.help = {
    name: 'serverinfo',
    aliases: ['guildinfo']
}
