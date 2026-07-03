const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const PREFIX = "!";

client.once("ready", () => {
  console.log(`${client.user.tag} is online!`);

  client.user.setActivity("!help", {
    type: ActivityType.Playing
  });
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  const cmd = message.content.slice(PREFIX.length).trim().toLowerCase();

  if (cmd === "ping") {
    return message.reply("🏓 Pong!");
  }

  if (cmd === "help") {
    return message.reply(`
📖 **AksaExclusive Bot**

!ping - Cek bot
!help - Bantuan
`);
  }
});

// NANTI DIISI TOKEN DI RENDER
client.login(process.env.TOKEN);
