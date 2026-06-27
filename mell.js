import 'dotenv/config';
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
]

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
})

client.login(process.env.DISCORD_TOKEN);