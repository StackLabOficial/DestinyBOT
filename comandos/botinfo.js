const Discord = require("discord.js");
const cpuStat = require("cpu-stat");
const os = require('os')
const moment = require("moment")
const c = require('../config.json');
moment.locale('pt-BR')

exports.run = (client, message, args) => {

    var linguagem = ('[JavaScript](https://www.javascript.com/)')
    var utilizando = ('[Node.js](https://nodejs.org/en/)')
    var livraria = ('[Discord.js](https://discord.js.org/#/)')
    var dev = ('[@youngzeura](https://twitter.com/youngzeura)')
    var host = ('[Glitch](https://glitch.com/)')
    var adicioneeu = ('[Adicione-me](https://discordapp.com/api/oauth2/authorize?client_id=653691138229927936&permissions=8&scope=bot)')
    var suporte = ('[Suporte](https://discord.gg/ZnN76E7)')
    var animesroll = ('[AnimesROLL](https://anroll.net/)')

    let dias = 0; 
    let week = 0; 
 
     let uptime = ``; 
     let totalSegundos = (client.uptime / 1000); 
     let horas = Math.floor(totalSegundos / 3600); 
     totalSegundos %= 3600; 
     let minutos = Math.floor(totalSegundos / 60); 
     let segundos = Math.floor(totalSegundos % 60); 
 
     if(horas > 23){
         dias = dias + 1;
         horas = 0; 
     }
 
     if(dias == 7){ 
         dias = 0; 
         week = week + 1; 
     }
 
     if(week > 0){ 
         uptime += `${week} week, `;
     }
 
     if(minutos > 60){ 
         minutos = 0;
     }
 
     uptime += `\`${horas}h ${minutos}m ${segundos}s\``;

              cpuStat.usagePercent(function(err, percent, seconds) {
              

    let embed = new Discord.RichEmbed()

   .setColor('AQUA')
   .setDescription(`Kon'nichiwa **${message.author.username}** <:Destiny_ashamed:697598682656276530>!\nEspero que esteja tudo bem. Bom, meu nome é **Destiny**. Eu sou uma simples inteligência artificial para o Discord, criada com intuito de ajudar ao máximo os servidores que me adicionarem. Inclusive, espero que esteja ajudando o seu :3\n Agora, fique com algumas informações minhas!`)
   .addField(`__**Estatísticas**__`, `:airplane_small: » Servidores: \`${client.guilds.size}\`\n:busts_in_silhouette: » Membros: \`${client.users.size}\`\n:tv: » Canais: \`${client.channels.size}\``, true)
   .addField(`__**Status**__`, `<:plataforma:697805116647931924> » Plataforma: \`Windows\`\n:battery: » Arquitetura: \`x64\`\n:sleeping: » Online há: ${uptime}`, true)
   .addField(`__**CPU**__`, `:computer: » Modelo: \`${os.cpus().map(i => `${i.model}`)[0]}\`\n<:servidor:694006170968653915> » Uso: \`${percent.toFixed(2)}%\`\n:battery: » Memória Utilizada: \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\` / \`${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``)  
   .addField(`__**Desenvolvedor**__`, `<:twitterlogo:694725465184796672> » Twitter: ${dev}\n<:discordlogo:694726133056274485> » Discord: \`young#4565\``, true)
   .addField(`__**Informações**__`, `<:javascript:697532338992578620> » Linguagem: ${linguagem} utilizando <:nodejs:697808391577272340> ${utilizando}\n<:discordjs:697532997490049115> » Livraria: ${livraria}\n<:glitch:697808873536618546> » Host: ${host}\n:satellite: » Latência: \`${parseInt(client.ping)} ms\`\n:date: » Eu nasci em: \`${moment(client.user.createdAt).format('LLL')}\``)
   .addField(`__**Redes**__`, `<:Destiny_ownt:697590603315150898> » ${adicioneeu}\n:police_officer: » ${suporte}`, true)
   .addField(`__**Parceiros**__`, `<:animes_roll:691793123893968906> » ${animesroll}`, true)
   message.channel.send(embed)

            })
           }
      
exports.help = {
    name: 'botinfo',
    aliases: ['info', 'infobot', 'infos']
}
