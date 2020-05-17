const Discord = require("discord.js");
const db = require("quick.db");

const config = require("./config.json");
const fs = require("fs");

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    console.log(`${f} ✓`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.on("error", err => {
  console.log(err.message);
});

client.on("ready", () => {
  console.log(`I'm ready!`);

  const tabela = [
    {name: "o canto dos pássaros", type: "LISTENING"},
    {name: "Undertale", type: "PLAYING" },
    {name: "animes :3", type: "WATCHING"},
    {name: "a playlist no Spotify do young", type: "LISTENING" },
    {name: `meu papai se chama: young#4565`, type: "LISTENING" },
    {name: `meu prefixo é d! » d!ajuda`, type: "LISTENING" },
    {name: "o meu papai programar", type: "WATCHING" },
    {name: "tweets sem nexo (@DestinyBot1)", type: "WATCHING" },
    {name: `amor para ${client.users.size} usuários`, type: "STREAMING", url: "https://twitch.tv/younguei"},
    {name: `em ${client.guilds.size} servidores`, type: "PLAYING" },
    {name: `Netflix com o boy`, type: "WATCHING" },
    {name: `d!botinfo » Para mais informações sobre minha existência`,type: "LISTENING"},
    {name: `boas energias para todos do servidor`,type: "STREAMING",url: "https://twitch.tv/younguei"},
    {name: `d!perfil » Crie um perfil dentro dos meus dados`, type: "LISTENING"},
    {name: `meus códigos no Glitch.com`, type: "PLAYING"},
    {name: `d!about » Um texto explicando sobre mim`, type: "LISTENING"}
  ];

  function setStatus() {
    let altstatus = tabela[Math.floor(Math.random() * tabela.length)];
    client.user.setPresence({ game: altstatus });
  }
  setStatus();
  setInterval(() => setStatus(), 10000);
});

client.on("guildMemberAdd", guildMember => {
  var role = guildMember.guild.roles.get(
    db.get(`autoRole_${guildMember.guild.id}`)
  );
  guildMember.addRole(role.id).catch(e => {
    return;
  });

  var mensagem = db.get(`mensagem_${guildMember.guild.id}`);
  var titulo = db.get(`titulo_${guildMember.guild.id}`);

  var canal = guildMember.guild.channels.get(
    db.get(`autoChannel_${guildMember.guild.id}`)
  );
  let embed = new Discord.RichEmbed()

    .setTitle(titulo)
    .setDescription(mensagem)
    .setColor("#00fc93")
    .setFooter(`ID do Membro: ${guildMember.id}`, guildMember.user.avatarURL);

  canal.send(`${guildMember}`, embed);
});

client.on("guildMemberRemove", guildMember => {
  var mensagem = db.get(`removeMessage_${guildMember.guild.id}`);
  var titulo = db.get(`removeTitle_${guildMember.guild.id}`);

  var canal = guildMember.guild.channels.get(
    db.get(`removeCanal_${guildMember.guild.id}`)
  );
  let embed = new Discord.RichEmbed()

    .setTitle(titulo)
    .setDescription(mensagem)
    .setColor("#c21b1b")
    .setFooter(`ID do Membro: ${guildMember.id}`, guildMember.user.avatarURL);

  canal.send(`\`${guildMember.user.tag}\``, embed);
});

client.on("guildCreate", guild => {
  var canal = client.channels.get("698215400567079012");

  canal.send(`<a:bolb_happy:657346070292201511> Me adicionaram em um servidor! \`${guild.name} [${guild.id}]\`\n\n**Informações**\n👥 » Membros: \`${guild.memberCount}\`\n👑 » Proprietário: \`${guild.owner.user.tag}\`\n🏳️ » Região: \`${guild.region}\``);
});

client.on("guildDelete", guild => {
  var canal = client.channels.get("698215400567079012");

  canal.send(`<:blob_sad:687040398123728975> Me excluiram de um servidor! \`${guild.name} [${guild.id}]\`\n\n__**Informações**__\n👥 » Membros: \`${guild.memberCount}\`\n👑 » Proprietário: \`${guild.owner.user.tag}\`\n🏳️ » Região: \`${guild.region}\``);
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  if (message.isMentioned(client.user)) { 
      message.channel.send(`Kon'nichiwa **${message.author.username}**, está perdido? Tente utilizar: \`${config.prefix}ajuda\`!`);
  }

  var messagem = db.get(`messagem_${message.guild.id}`);
  var idmessage = db.get(`messageid_${message.guild.id}`);

  if (message.channel.id === idmessage) {
    if (message.content.startsWith(`${config.prefix}`)) {
      return message.channel.send(messagem);
    }
  }

    var args = message.content.substring(config.prefix.length).split(" ");
     if (!message.content.startsWith(config.prefix)) return;


  let prefix = config.prefix;
  let cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let command =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if (command) {
    command.run(client, message, args);
  } else {
    message.channel.send(
      `<:Destiny_whut:697600895877382235> **»** Kon'nichiwa **${message.author.username}**, este comando é inexistente...`
    );
  }
});

client.login(config.token);
