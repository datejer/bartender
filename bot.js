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
        const cmds = "```b!help \nb!invite \nb!website \nb!server \nb!changelog```";
        const menu = "```b!coffee \nb!beer \nb!whisky \nb!manhattan \nb!martini \nb!margarita \nb!mojito \nb!bloody mary \nb!mai tai \nb!tequila \nb!vodka \nb!old fashioned```";
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
		message.channel.send(`__Here's an invite to the official support server:__ \nhttps://discord.gg/UDTXjbR`);
    }
	if (message.content === "b!announcement1") {
		if(message.author.id !== "214651290234388480") return;

		let ennembed = new Discord.RichEmbed()
		.setTitle("Announcement :tada:")
		.setDescription("This message is sent automaticly, sorry for any inconvenience.")
		.setColor("80FF00")
		.setTimestamp()
		.setFooter("Bartender | Created by ejer", "https://cdn.discordapp.com/avatars/440121235410649108/0e4e1e7d68d178e304c279f9fa1f9630.png")
		.setImage("https://i.imgur.com/81eaxn6.png")
		.setAuthor("ejer", "https://cdn.discordapp.com/avatars/214651290234388480/0c994a0c5b16eed434a3c3d1c9f79077.png")
		.addField("Official Support Server :eyes: ", "We have launched our official support Discord server! :tada:\nIf you want to report any bugs or have a suggestion please join the server! :bug:\nDon't miss out on any polls or announcements! :loudspeaker:  \nIt's also a great way to contact the owner for any help! :wave: ", false)
		.addField("Join now! :thumbsup:  ", "https://discord.gg/UDTXjbR", false)

		var userList = client.users.array();
		try {
			userList.forEach(function(user, index) {
				if (user.bot) {

				} else {
					setTimeout(function(){
						user.send(ennembed)
					},
					250 * index);
				}
			});
		} catch (err) {
			console.log("Could not send message to " + user.name);
		}
	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
