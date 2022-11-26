// const { Client, Intents,Permissions,Discord } = require('discord.js');
// const client = new Client({ intents: [Intents.FLAGS.GUILDS],partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const Discord = require("discord.js");
require('dotenv').config({ path: '.env' })
const discordTTS = require('discord-tts');
const { getAudioUrl } = require("google-tts-api");
const {
    Permissions
} = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const keepAlive = require("./server.js");
const config = require("./config.json");
const { WebhookClient } = require("discord.js");
// const Database = require("@replit/database")
// const db = new Database()
// const CuldAutoban = new WebhookClient(process.env.culdAutobanid, process.env.culdAutobantoken);
// const addchannel = new WebhookClient(process.env.addChannelID, process.env.addChanneltoken);
let prefix = config.prefix;

const mongoose = require('mongoose')
mongoose.connect(process.env.mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'Connection error:'));
// const schema = require('./models/points')




client.once('ready', () => {
    let Guils = client.guilds.cache.size;
    let totalMembes = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
    client.user.setStatus("idle");
    client.user.setActivity(`${Guils} servers | ${totalMembes} Members`, { type: 'PLAYING' });
    console.log(Guils, totalMembes)
    console.log(`Hey I am live with Ak, developed by Ak❤#7777`);
    setInterval(() => {
        setTimeout(async function () {
            const Guilds = client.guilds.cache.size;
            const totalMembers = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
            // let GuildCount = Guilds+10;
            // let totalMembers = totalMemberss+10000;


            client.user.setStatus("idle");
            client.user.setActivity(`${Guilds} servers | ${totalMembers} Members`, { type: 'PLAYING' });
        }, 1000);
    }, 60000);

});
keepAlive();
client.login(process.env.TOKEN)
