  
const Discord = require("discord.js")
const client = new Discord.Client()

exports.run = async (client, message, args) => {
    if (!['530192493728366622'].includes(message.author.id)) {
    return message.channel.send(`<a:nop:698221501668655124> **»** Kon'nichiwa **${message.author.username}**, apenas meu papai pode utilizar esse comando.`)
    }
  
    let code = args.slice(0).join(" ");

        try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }
          
        message.channel.send(`:computer: Console\n\`\`\`js\n${ev}\`\`\``)
        } catch(err) {
            message.channel.send(`<a:sino:689563392243269644> **Erro**\n\`\`\`\n${err}\`\`\``)
        }
  }
 exports.help = {
      name: "eval",
   aliases: ['cmd', 'console']
 }
