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

// client.on("guildMemberAdd", member => {
//   const defaultWelTitle = ``
//   let welcomeTitle =  

//     const myGuild = client.guilds.cache.find(guild => guild.id == member.guild.id)
//     let memberCount = myGuild.memberCount
//     if(member.guild.id !== member.guild.id)
//     return;
//     const welcomeEmbed = new Discord.MessageEmbed()
//     .setTitle(welcomeTitle)
//     .setDescription(welcomeDescription)
//     .setColor("RANDOM")
//     .setImage(welcomeImg),
//     welcomeChannel = member.guild.channels.cache.find(channel => channel.id === WelcomeChannel)
//     welcomeChannel.send(welcomeMessage, welcomeEmbed);
// })

// client.on("guildMemberAdd", member => {
//     const myGuild = client.guilds.cache.find(guild => guild.id == "897015342478553150")
//     let memberCount = myGuild.memberCount
//     if(member.guild.id !== "897015342478553150") return;
//     const welcomeembed = new Discord.MessageEmbed()
//     .setTitle(`<a:Welcome:898248276086759485> **WELCOME TO LAB  AND ASSIGNMENTS SERVER <a:pika_hi:897534621091258369> **`)
//     .setDescription(`
//     ━━━━━━━━━━━━━━━━━━━━━━━━━━ \n
//     <a:Dance:898135337392554015> **Read Rules ▷<#897015342478553152>** \n
//     <a:Dance:898135337392554015> **Get Your Roles ▷<#898255225339674664>** \n
//     <:02_happy:898133523368665128> **Intro Yourself  ▷<#897015342478553155>** \n
//     <:mescoe:898113979702988861> **We Are Now ${memberCount} Members** <:mescoe:898113979702988861>

//     ━━━━━━━━━━━━━━━━━━━━━━━━━━`)
//     .setColor("RANDOM")
//     .setImage("https://cdn.discordapp.com/attachments/898257177154838538/898257264782245898/Futuristic-Computer-Concept.gif"),
//     welcomeChannel = member.guild.channels.cache.find(channel => channel.id === "897035926495195156")
//     welcomeChannel.send(`**Hello ${member}**`, welcomeembed);
// })

// client.on("guildMemberAdd", member => {
//     // const myGuild = client.guilds.cache.find(guild => guild.id == "910545019864223745")
//     // let memberCount = myGuild.memberCount

//     // console.log(member.user.username)
//     // console.log(member.user.id)
//     if(member.guild.id === "785860205560332329") {

// }
//     if(member.guild.id === "818885300910161952") {

//       member.guild.members.fetch().then(fetchedMembers => {
//       const target_users = fetchedMembers.filter(m =>  m.user.username.includes("DAO Avatar") || m.user.username.includes("Support") || m.user.username.includes("NFTMoon METAVERSE") || m.user.username.includes("Aleksei") || m.user.username.includes("Captcha") || m.user.username.includes("bot") || m.user.username.includes("support") || m.user.username.includes("helpdesk"))

//       target_users.forEach(user => user.ban())

//       });
//       if(member.user.username.includes("DAO Avatar") || member.user.username.includes("Aleksei")|| member.user.username.includes("helpdesk")) 
//       {
//       let userId = member.user.id
//       member.guild.members.ban(userId)
//       .then(user => console.log(`Bot attack, Banned ${member.user.username || member.user.id || member.user} from ${member.guild.name}`))
//       .catch(console.error);

//       } else return;
//     } 

//     else if(member.guild.id === "897427183801348117") {

//       member.guild.members.fetch().then(fetchedMembers => {
//       const target_users = fetchedMembers.filter(m => m.user.username.startsWith("RTFKT") || m.user.username.startsWith("Clonex"))

//       // || m.user.username.includes("The Cult DAO"))

//       target_users.forEach(user => user.ban())

//       });
//       if(member.user.username.startsWith(`RTFKT`) || member.user.username.startsWith(`Clonex`) || member.user.username.startsWith(`CryptoBatz Announcement`) || member.user.username.startsWith(`Nike`)) 
//       {
//       let userId = member.user.id
//       // userId.ban({reason: `Bot attack Auto banned`})
//       // console.log(userId `banned`)
//       member.guild.members.ban(userId)
//       .then(user => console.log(`Bot attack, Banned ${member.user.username || member.user.id || member.user} from ${member.guild.name}`))
//       .catch(console.error);
//       // CuldAutoban.send(`Bot attack, Auto Banned **${member.user.tag || member.user.id || member.user}** from the server`)

//       } else return;
//     } else return;

// })

// client.on("guildMemberAdd", member => {
//     // const myGuild = client.guilds.cache.find(guild => guild.id == "910545019864223745")
//     // let memberCount = myGuild.memberCount

//     console.log(member.user.username)

//    console.log(member.user.username)
// })
// client.bal = (User) => new Promise(async ful => {
//   const data = await schema.findOne({ User })
//       if(!data) return ful(0)
//       if(!data.Points || data.Points === null) return ful(0)
//       ful(data.Points)
// })
//   client.add = (User, Money ) => {
//     schema.findOne({
//       User
//     }, async(err,data) => {
//       if(err) throw err
//       if (data) {
//         data.Points += Money
//       } else {
//         data = new schema({User: User, Points: Money})
//       }
//       data.save()
//     })
//   }
//   client.rmv =(User, Money) => {
//     schema.findOne({User}, async (err, data) => {
//       if (err) throw err
//       if(data) {
//         data.Points -=Money
//       } else {
//         data = new schema({User: User, Points: -Money})
//       }
//       data.save()
//     })
//   }

client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial) {
        try {
            await reaction.message.fetch();
        } catch (error) {
            console.error('Something went wrong when fetching the message: ', error);
        }
    }
    if (reaction.message.id === "910436081181261845") {
        const member = user;
        setTimeout(async function () {
            let Memberr = member.id
            let Mem = await reaction.message.guild.members.cache.get(Memberr)

            const Holderchannel = client.channels.cache.find(channel => channel.id === "910428119582789642")
            Holderchannel.send(`Welcome <@${Memberr}>! to THE CULT DAO 💕`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 60000)
                })
        }, 500);
    } else return;
});

client.on("message", async message => {



    if (message.content.toLowerCase().startsWith(`!spot`) || message.content.toLowerCase().startsWith(`!slot`)) {
        if (message.guild.id === "703622317871333427") return;
        if (message.channel.name !== "tournament-lobby") return;
        let catg = await message.channel.parent.name;
        let role1 = message.guild.roles.cache.find(role => role.name === catg);
        let role = `${role1}`;
        let roleId = role.slice(3, -1);
        let guildID = message.guild.id;
        const server_roles = client.guilds.cache.get(guildID).roles.cache.get(roleId).members.size;


        let catgg = catg.toLowerCase()

        if (catgg.includes("duo")) {
            let teamss = server_roles / 2
            let teams = parseInt(teamss)
            let remain = 24 - teams

            message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle(`TOURNAMENT INFO`)
                    .setDescription(`Tournament Name: **${catg}** \n Registered teams: **${teams}/24 Duo teams**`)
                    .setColor("RANDOM")
            )
        } else if (catgg.includes("squad")) {

            let teamss = server_roles / 4
            let teams = parseInt(teamss)
            let remain = 12 - teams

            message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle(`TOURNAMENT INFO`)
                    .setDescription(`Tournament Name: **${catg}** \n Registered teams: **${teams}/12 Squad teams**`)
                    .setColor("RANDOM")
            )

        }
        else if (catgg.includes("solo")) {
            let remain = 48 - server_roles
            let waitl = server_roles - 48
            if (waitl < 1) waitl = 0
            message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle(`TOURNAMENT INFO`)
                    .setDescription(`Tournament Name: **${catg}** \n Registered Slots: **${server_roles}/48 Slots**\n waitlist spot: **${waitl} spots** `)
                    .setColor("RANDOM")
            )
        } else {
            message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle(`TOURNAMENT INFO`)
                    .setDescription(`Tournament Name: **${catg}** \n Registered Slots: **${server_roles} Slots**`)
                    .setColor("RANDOM")
            )
        }
    }


    if (message.content.toLowerCase().startsWith(prefix + `winner`)) {
        let mention = message.mentions.users.first();
        if (message.member.hasPermission("MANAGE_GUILD")) {

            if (!mention) return message.channel.send(`Please mention someone!`);
            if (message.author.id === message.author.id) {
                message.delete()
            }
            const args = message.content.trim().split(' ');
            args.shift();
            let messages = message.content.slice(30);
            message.channel.send(`**:tada:WINNER:tada:** \n **gg ${mention}!, Won${messages}!**, **You can ask him/her if we're legit!**`)
                .then(function (message) {
                    message.react("<a:legitop:884885598962352138>")
                    message.react("<a:blue_tick:881254205355069511>")
                    message.pin()
                });

        } else {
            console.log("no permission")
        }
    }

    if (message.content.toLowerCase().startsWith(prefix + `rules`)) {
        if (!message.member.hasPermission("ADMINISTER")) return;
        if (message.author.id === message.author.id) {
            message.delete()
        }

        let guildName = message.guild.name.toUpperCase()
        let warnEmoji = `<a:warn:881256688215269477>`;

        message.channel.send(
            new Discord.MessageEmbed()
                .setTitle(`<:rules:884893722943320064> **__${guildName} SERVER RULES__** <:rules:884893722943320064>`)
                .setDescription(`\n${warnEmoji} 1) BE RESPECTFULL WITH ALL THE MEMBERS IN SERVER.\n \n${warnEmoji} 2) NO SPAM IN SERVER.\n \n${warnEmoji} 3) NO TOXIC BEHAVIOUR WITH ANYONE.\n \n${warnEmoji} 4) ANY TYPE OF ADVERTISE IS PROHIBITED.\n \n${warnEmoji} 5) ANY ISSUE / QUERY FEEL FREE TO ASK OUR STAFFS.\n \n${warnEmoji} 6) TAKE YOUR ROLES FROM \`#SELF-ROLE\` CHANNEL. \n \n${warnEmoji} 7) DON'T BEG FOR ROLES TO STAFFS.\n \n${warnEmoji} 8) MUST FOLLOW ALL RULES, IF SEEMS SOMEONE BREAKING RULES MAY LEADS TO WARN/BAN`)
                .setThumbnail(message.guild.iconURL())
                .setColor(`RANDOM`)
        )
            .then(function (message) {
                message.react("<a:blue_tick:881254205355069511>")
                message.react(warnEmoji)
                message.pin()
            });

    }

    if (message.content.toLowerCase().startsWith(prefix + `self`)) {
        if (!message.author.id == config.ownerID) return;
        message.channel.send(
            new Discord.MessageEmbed()
                .setTitle(`SELF ROLES`)
                .setDescription(`Update Ping`)
                .setColor("RANDOM")
        )
            .then(function (message) {
                message.react('❓')
            });
    }

    if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
        if (message.channel.type === "dm") return message.reply("I can't excute the command in DM's");
        const timeTaken = Date.now() - message.createdTimestamp;
        message.channel.send(
            new Discord.MessageEmbed()
                .setDescription(`Pong : <@${message.author.id}> This message had a latency of **${timeTaken}ms.**`)
                .setColor("RANDOM")
        )
    }

    if (message.content.toLowerCase().startsWith(`!gend`) || message.content.toLowerCase().startsWith(`!greroll`) || message.content.toLowerCase().startsWith(`g!end`) || message.content.toLowerCase().startsWith(`g!reroll`) || message.content.toLowerCase().startsWith(`10s`)) {
        if (!message.member.hasPermission("MANAGE_GUILD")) return console.log("no permission");

        message.channel.send(`https://cdn.discordapp.com/emojis/887714399622664262.gif?v=1`
        ).then(m => {
            var sendmsg = function () {
                m.edit(`**10 seconds over!**`)
            };
            setTimeout(sendmsg, 10100);

        });
    }



    if (message.content.toLowerCase().startsWith(`${prefix}embed`)) {
        // if(message.guild.id !== config.guildID) return;
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        if (message.channel.type === "dm") return;


        const args = message.content.slice().trim(4).split(' ');
        let tests = message.mentions.channels.first()
        let channel = `${args[1]}`
        if (!channel) {
            if (message.author.id === message.author.id) {
                message.delete()
            }
            annouce = message.channel.id
            messages = message.content.slice(7)

            const embedmsg = new Discord.MessageEmbed()
                .setDescription(`${messages}`)
                .setColor(`RANDOM`)

            message.channel.send(embedmsg)
                .then(function (message) {
                    message.react("<a:blue_tick:881254205355069511>")
                    message.react("<a:tick_mark:904634996235571250>")
                    // message.pin()

                });

        } else if (!channel.startsWith('<#') && !channel.endsWith('>')) {
            message.channel.send(
                `\`\`\`${config.prefix}embed [#channel] (text)\n        ^^^^^^^\nargument missing mention channel\`\`\``
            )
        } else {
            if (message.author.id === message.author.id) {
                message.delete()
            }
            let annouce = message.mentions.channels.first().id;
            let messages = message.content.slice(29);

            const embedmsg = new Discord.MessageEmbed()
                .setDescription(`${messages}`)
                .setColor(`RANDOM`)

            achannel = client.channels.cache.find(channel => channel.id === annouce)
            achannel.send(embedmsg)
                .then(function (message) {
                    message.react("<a:blue_tick:881254205355069511>")
                    message.react("<a:tick_mark:904634996235571250>")
                    // message.pin()

                });
            message.channel.send(`your message sent in <#${annouce}>`)
            console.log(tests)
        }

    }
    if (message.content.toLowerCase().startsWith(prefix + `serverlogs`)) {
        client.guilds.cache.forEach(guild => {
            console.log(`${guild.name} | ${guild.id} `);
        })
    }
    // if (message.content.toLowerCase().startsWith(prefix+`serverdetails`)) {
    //       const myGuild = client.guilds.find(guild => {guild.id == "859087377070030858"});
    //       let memberCount = myGuild.members.filter(member => !member.user.bot).size;
    //       message.channel.send("Member•" +memberCount+ "•User")
    // }

    const guildID = message.guild.id


    if (message.content.toLowerCase().startsWith(prefix + `slowmode`) || message.content.toLowerCase().startsWith(prefix + `sm`) || message.content.toLowerCase().startsWith(prefix + `slow`)) {
        const args = message.content.slice().trim(4).split(' ');
        if (message.member.hasPermission("ADMINISTRATOR")) {
            let timesec = `${args[1]}`
            if (args[1] != null) {
                if (Number.isNaN(+timesec)) return message.channel.send(`invalid time`);
                if (timesec > 21600) return message.channel.send(`I can set maximum 6 hour of slowmode`);
                if (timesec < 0) return;

                message.channel.setRateLimitPerUser(args[1], "slowmode added");
                message.channel.send(`slowmode ${args[1]} seconds`)
            }
        } else return;
    }
    if (message.content.toLowerCase().startsWith(prefix + `botban`)) {
        const args = message.content.slice().trim(7).split(' ');
        if (message.guild.id === "897427183801348117") {
            if (message.author.id != config.ownerID) return;
            message.guild.members.fetch().then(fetchedMembers => {
                const target_users = fetchedMembers.filter(m => m.user.username.includes("Fat Ape Club mint info") || m.user.username.includes("Random Character Collective"))
                // || m.user.username.includes("The Cult Liveᴮᴼᵀ") || m.user.username.includes("The Culd DAO") || m.user.username.includes("The Cult DAO") || m.user.username.includes("Adidas Mint") || m.user.username.includes("DOODLES NEWS")||m.user.username.includes("The cult Dao")||m.user.username.includes("The Cult DAO")||m.user.username.includes("The cult DAO")||m.user.username.includes("MEKAVERSE NEWS")||m.user.username.includes("Omicron"))





                target_users.forEach(user => user.ban())
            });
            message.channel.send(`banned`)
        } else if (message.guild.id === "818885300910161952") {
            if (message.author.id != config.ownerID) return;
            let bots = `${message}`
            let botName = `${bots.substring(8)}`
            // console.log(botName)
            message.guild.members.fetch().then(fetchedMembers => {
                const target_users = fetchedMembers.filter(m => m.user.username.includes(botName))

                target_users.forEach(user => user.ban())
            });
            message.channel.send(`banned`)

        } else return;
    }


    if (message.content.toLowerCase().startsWith(`${prefix}membercount`) || message.content.toLowerCase().startsWith(`${prefix}mc`)) {
        if (message.channel.type === "dm") return;
        let memberCount = message.guild.memberCount
        let onlinemem = message.guild.members.cache.filter(member => member.presence.status !== "offline").size;
        let offlinemem = message.guild.members.cache.filter(member => member.presence.status === "offline").size;
        let humann = message.guild.members.cache.filter(member => !member.user.bot).size;
        let bots = message.guild.members.cache.filter(member => member.user.bot).size;
        const mc = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} Server Membercount`)
            .setDescription(`Total Members: **${memberCount}** \nOnline : **${onlinemem}** \n`)
            // Offline : **${offlinemem}** \nHumans : **${humann}** \nBots : **${bots}**
            .setTimestamp()
            .setThumbnail(message.guild.iconURL())
            .setColor(`RANDOM`)
        message.channel.send(mc)
    }

    if (message.content.toLowerCase().startsWith(prefix + `floor`)) {
        if (message.author.id != config.ownerID) return;
        const sdk = require('api')('@opensea/v1.0#1felivgkyk6vyw2');
        sdk['retrieving-a-single-collection']({ collection_slug: 'the-cult-dao-ethereum' })
            // .then(res => console.log(res))
            .then(res => console.log(res.collection.stats.floor_price))
            .catch(err => console.error(err));

        setTimeout(async function () {
            let floor = sdk['retrieving-a-single-collection']({ collection_slug: 'the-cult-dao-ethereum' })
                .then(res => console.log(res.collection.stats.floor_price))
                .catch(err => console.error(err));
            console.log(floor)
            message.channel.send(`Floor is ${floor}`)
        }, 5000);
    }


    if (message.content.toLowerCase().startsWith(prefix + `servers`)) {
        if (message.author.id != config.ownerID) return;
        client.guilds.cache.forEach(guild => {
            console.log(`${guild.name} | ${guild.id} | ${guild.memberCount}`);
            message.channel.send(`**${guild.name}** | ${guild.id} | ${guild.memberCount}`)
        })

    }



    // if(message.content.toLowerCase().startsWith(prefix+`template 1`)) {
    //   if(message.author.id != config.ownerID) return;
    //   console.log('test 1')
    //   message.guild.channels.create("▬▬❐💫「 SERVER INFO 」💫❐▬▬", { type: "forum" });
    //   // message.guild.channels.create("⏤͟͟͞✰〢🍂ᴡᴇʟᴄᴏᴍᴇ",{parent_id:"984044015462793297"})
    //   console.log('test')
    // message.guild.createChannel("▬▬❐🎀「 PIN BOARD 」🎀❐▬▬", { type: "GUILD_CATEGORY" });
    // message.guild.createChannel("▬▬❐🍁「 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘 」🍁❐▬▬", { type: "GUILD_CATEGORY" });
    // message.guild.createChannel("▬▬▬❐🌼「 PLAY BoTS 」🌼❐▬▬▬", { type: "GUILD_CATEGORY" });
    // message.guild.createChannel("▬▬❐🎧「 𝙼𝚄𝚂𝙸𝙲 🎶 𝚉𝙾𝙽𝙴 」🎧❐▬▬", { type: "GUILD_CATEGORY" });
    // message.guild.createChannel("▬▬▬❐「 Voice Rooms 」❐▬▬▬", { type: "GUILD_CATEGORY" });
    // message.guild.createChannel("▬▬▬❐「 LOG ROOMS 」❐▬▬▬", { type: "GUILD_CATEGORY" });
    // }




    if (message.content.toLowerCase().startsWith(prefix + `inv`)) {
        console.log(message.guild)
    }




    if (message) {
        if (message.channel.id === "832908687776546827") {
            if (message.author.bot) return;
            let role = message.guild.roles.cache.find(r => r.id === "931819324862263316");
            let member = message.guild.members.cache.get(message.author.id)
            member.roles.add(role);
        }
        if (message.channel.id === "878971554313142287") {
            if (message.author.bot) return;
            let role = message.guild.roles.cache.find(r => r.id === "917350886982950943");
            let member = message.guild.members.cache.get(message.author.id)
            member.roles.add(role);
        }
    }
})

keepAlive();
client.login(process.env.TOKEN)
