TELEGRAM_BOT_TOKEN = '5620794555:AAGyg49Xuu4AibsCIUWqNwk6rQ9twyZfqMY';
const TeleBOT = require('telebot');
const bot = new TeleBOT(TELEGRAM_BOT_TOKEN)


bot.on('text', (msg) => msg.reply.text('Kelgan habar:  ' + msg.text));

bot.start();