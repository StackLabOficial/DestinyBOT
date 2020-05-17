const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
    var linguagem = ("[JavaScript](https://nodejs.org/)")
    var livraria = ("[Discord.js](https://discord.js.org/)")
    var dono = ('[young](https://twitter.com/youngzeura)')
    var foto = ("https://cdn.discordapp.com/avatars/653691138229927936/afba2dcbc2b7bb06907e8a3fd6f0e1dc.png?size=2048")
    var tt = ('[@DestinyBot](https://twitter.com/DestinyBot1)')
   
    let embed = new Discord.RichEmbed()
    
    .setTitle(`ABOUT`)
    .setThumbnail(foto)
    .setDescription(`Kon'nichiwa **${message.author.username}-chan** 👋,\n\n Meu nome é **Destiny**, sou uma inteligência artificial, criada por ${dono}. Como eu sou uma inteligência artificial, não tenho uma idade definida, mas pode me reconhecer como maior de idade.\n Fui desenvolvida em <:nodejs:697532338992578620> ${linguagem} e <:discordjs:697532997490049115> ${livraria}. Atualmente, estou ajudando **${client.users.size}** usuários, sempre tento pedir para meu papai criar novas funções para que assim, consiga te ajudar um pouco mais :3\n\nQuer ficar por dentro de minhas atualizações? Se sim, me siga no <:twitterlogo:694725465184796672> Twitter: ${tt}`)
    .setImage('https://images-ext-2.discordapp.net/external/PepAACotD0hm3d46ctBREBUDRya-9O6H8RSNuMCsvAM/https/pbs.twimg.com/profile_banners/1236777937208315905/1586387895/1500x500?width=1026&height=342')
    .setFooter(`Obrigada por ler!`)
    
    
    message.author.send(embed)
    message.channel.send(`:mailbox: **»** Kon'nichiwa **${message.author.username}**, mandei em seu privado.`)
}
exports.help = {
    name: 'about',
    aliases: []
}
