const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
    client.user.setPresence({
        game: {
            name: `Serving ${client.guilds.size} guilds. | b!help`,
            type: 0
        }
    });
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
    client.user.setPresence({
        game: {
            name: `Serving ${client.guilds.size} guilds. | b!help`,
            type: 0
        }
    });
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
    client.user.setPresence({
        game: {
            name: `Serving ${client.guilds.size} guilds. | b!help`,
            type: 0
        }
    });
});

client.on('message', message => {
	if(message.author.bot) return;
	if (!message.guild) return;

	if (message.content === 'b!help') {
        const cmds = "```b!help \nb!invite```";
        const menu = "```b!coffee \nb!beer \nb!whisky \nb!manhattan \nb!martini \nb!margarita \nb!mojito \nb!bloody mary \nb!mai tai \nb!tequila \nb!vodka \nb!old fashioned```";
        const snacks = "```b!chips \nb!breadsticks \nb!crackers \nb!peanuts \nb!popcorn```";
        message.channel.send(`⌨ **My Commands:** 📟` + cmds + `🍷 **My Menu:** 🍹` + menu + `🍿 **My Snacks:** 🥜` + snacks);
    }
    if (message.content === 'b!coffee') {
		message.channel.send(`Your Coffee Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. ☕`, {files: ["./img/coffee.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!beer') {
		message.channel.send(`Your Beer Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍺`, {files: ["./img/beer.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!whisky') {
		message.channel.send(`Your Whisky Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🥃`, {files: ["./img/whisky.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!manhattan') {
		message.channel.send(`Your Manhattan Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍸`, {files: ["./img/manhattan.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!martini') {
		message.channel.send(`Your Martini Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍸`, {files: ["./img/martini.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!margarita') {
		message.channel.send(`Your Margarita Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍸`, {files: ["./img/margarita.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!mojito') {
		message.channel.send(`Your Mojito Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍸`, {files: ["./img/mojito.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!bloody mary') {
		message.channel.send(`Your Bloody Mary Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍷`, {files: ["./img/bm.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!mai tai') {
		message.channel.send(`Your Mai Tai Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🥃`, {files: ["./img/mt.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!tequila') {
		message.channel.send(`Your Tequila Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🥃`, {files: ["./img/tequila.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!vodka') {
		message.channel.send(`Your Vodka Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🥃`, {files: ["./img/vodka.png"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!old fashioned') {
		message.channel.send(`Your Old Fashioned Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🥃`, {files: ["./img/of.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!chips') {
		message.channel.send(`Your Chips Are Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir.`, {files: ["./img/chips.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 5000);
    }
    if (message.content === 'b!breadsticks') {
		message.channel.send(`Your Breadsticks Are Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍿`, {files: ["./img/bs.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 5000);
    }
    if (message.content === 'b!crackers') {
		message.channel.send(`Your Crackers Are Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍿`, {files: ["./img/crackers.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 5000);
    }
    if (message.content === 'b!peanuts') {
		message.channel.send(`Your Peanuts Are Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🥜`, {files: ["./img/peanuts.png"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 5000);
    }
    if (message.content === 'b!popcorn') {
		message.channel.send(`Your Popcorn Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍿`, {files: ["./img/popcorn.jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 5000);
    }
    if (message.content === "<@440121235410649108>") {
		message.channel.send(`*Yes?*`);
    }
    if (message.content === 'b!invite') {
		message.channel.send(`__Here's an invite link.__ *Invite me your server!* \nhttps://discordapp.com/oauth2/authorize?client_id=440121235410649108&permissions=428096&scope=bot`);
    }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
