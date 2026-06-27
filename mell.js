import 'dotenv/config';
import http from 'http';
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const phrases = [
    "Убери нафиг ноги животное ебаное",
    "Я уже красный!",
    "Ам ам ам",
    "Герман довгань!"
];

const csz = [
    "Бурмалда",
    "Догхаус",
    "Зевсятина"

];

client.once('clientReady', () => [
  console.log("Ready!")
]);


client.on("messageCreate", async (message) =>{
    if (message.author.bot) return;

    if (message.content.toLowerCase().includes("меллстрой")) {
        try {
            const randPhrase = phrases[Math.floor(Math.random() * phrases.length)]
            await message.reply(randPhrase)
        } catch(error) {
            console.error("Error")
        }
    };

    if (message.content.toLowerCase().includes("казино")) {
        try {
            const randPhrase = csz[Math.floor(Math.random() * csz.length)]
            await message.reply(randPhrase)
        } catch(error) {
            console.error("Error")
        }
    };
})

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is running\n');
}).listen(process.env.PORT || 3000, () => {
  console.log('Web server is running');
});

client.login(process.env.DISCORD_TOKEN);
