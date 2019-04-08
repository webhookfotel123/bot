const Discord = require("discord.js");
const bot = new Discord.Client();

let token = "NTYzNDExNTE1ODkwMjA0Njcy.XKsQPQ.TeKO_4YRQ1wRL_wubeQcii3pJkI";

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity(">pomoc | Wersja: 1.1", {type: "WATCHING"});
  });

  bot.login(token);