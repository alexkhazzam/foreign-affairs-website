const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: dotenv.config.env });
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.TOKEN;

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('Nzc0ODQzNDI5MDcwNDM4NDMx.X6drLQ.2u1SwKyIZqaTsoTpxpQvEBjn2ho');

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong');
    msg.channel.send('pong');
  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});

app.listen(PORT, () => {
  console.log(`Listening to requests on port ${PORT}`);
});
