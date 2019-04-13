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
        const cmds = "```b!help \nb!invite \nb!website \nb!server \nb!changelog \nb!donate```";
        const menu = "```b!coffee \nb!beer \nb!whisky \nb!manhattan \nb!martini \nb!margarita \nb!mojito \nb!bloody mary \nb!mai tai \nb!tequila \nb!vodka \nb!old fashioned \nb!rum```";
        const snacks = "```b!chips \nb!breadsticks \nb!crackers \nb!peanuts \nb!popcorn```";
        message.channel.send(`⌨ **My Commands:** 📟` + cmds + `🍷 **My Menu:** 🍹` + menu + `🍿 **My Snacks:** 🥜` + snacks);
    }
    if (message.content === 'b!coffee') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Coffee Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. ☕`, {files: ["./img/coffee" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!beer') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Beer Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍺`, {files: ["./img/beer" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!whisky') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Whisky Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🥃`, {files: ["./img/whisky" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!manhattan') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Manhattan Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍸`, {files: ["./img/manhattan" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!martini') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Martini Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍸`, {files: ["./img/martini" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!margarita') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Margarita Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍸`, {files: ["./img/margarita" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!mojito') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Mojito Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍸`, {files: ["./img/mojito" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!bloody mary') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Bloody Mary Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍷`, {files: ["./img/bm" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!mai tai') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Mai Tai Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🥃`, {files: ["./img/mt" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!tequila') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Tequila Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🥃`, {files: ["./img/tequila" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!vodka') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Vodka Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🥃`, {files: ["./img/vodka" + rn + ".png"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!old fashioned') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Old Fashioned Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🥃`, {files: ["./img/of" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 15000);
    }
    if (message.content === 'b!chips') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Chips Are Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir.`, {files: ["./img/chips" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 5000);
    }
    if (message.content === 'b!breadsticks') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Breadsticks Are Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍿`, {files: ["./img/bs" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 5000);
    }
    if (message.content === 'b!crackers') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Crackers Are Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍿`, {files: ["./img/crackers" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 5000);
    }
    if (message.content === 'b!peanuts') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Peanuts Are Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🥜`, {files: ["./img/peanuts" + rn + ".png"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 5000);
    }
    if (message.content === 'b!popcorn') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Popcorn Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🍿`, {files: ["./img/popcorn" + rn + ".jpg"]}).then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
		}, 5000);
    }
    if (message.content === 'b!rum') {
    	let rn = Math.floor(Math.random() * 5) + 1;
		message.channel.send(`Your Rum Is Being Made. *Please Wait.*`);
		setTimeout(function() {
		    message.channel.send(`Here You Go Sir. 🥃`, {files: ["./img/rum" + rn + ".jpg"]}).then(function (message) {
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
    if (message.content === "b!changelog") {
		message.channel.send(`__Here's a link to the changelog:__ \nhttp://bartender.rf.gd/changelog.html`);
    }
    if (message.content === "b!website") {
		message.channel.send(`__Here's a link to the website:__ \nhttp://bartender.rf.gd/`);
    }
    if (message.content === "b!server") {
		message.channel.send(`__Here's an invite to the server:__ \nhttps://discord.gg/JSRTVDR`);
    }
    if (message.content === "b!donate") {
		message.channel.send(`__You can donate to help us keep the bot alive using this link:__ \nhttp://donate.ejer.ga/`);
    }
});

client.on('message', message => {
	if(message.author.bot) return;
	if (!message.guild) return;
	
	if (message.content.startsWith("b!")) {
		console.log("[CMD] " + message.author.tag + ": " + message.content);
	}
});

client.on('message', message => {
	if(message.author.bot) return;
	if (message.guild) return;

	console.log("[DM] " + message.author.tag + ": " + message.content);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
