const { Telegraf } = require("telegraf");
const token = "5363737190:AAF8gWnttr5slxeMC1BnGZGSbmGuYR6OXtM";
const bot = new Telegraf(token);
const link = "";
bot.start((ctx) =>
  ctx.reply("Whats up my Brother", {
    reply_markup: {
      keyboard: [[{ text: "I know you want to", web_app: { url: link } }]],
    },
  })
);

bot.launch();