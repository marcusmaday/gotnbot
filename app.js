const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTU2NTU2Mjk5MTI3NjE5NTg2.D27dmg.LH0dqheTWCkmdy_o6XXZKxT4SzM');

// const Discord = require('discord.js');
// const client = new Discord.Client();

// var logger = require('winston');
// var auth = require('./auth.json');
// // Configure logger settings
// logger.remove(logger.transports.Console);
// logger.add(new logger.transports.Console, {
// 	colorize: true
// });
// logger.level = 'debug';

// /**
//  * The ready event is vital, it means that only _after_ this will your bot start reacting to information
//  * received from Discord
//  */
// client.on('ready', () => {
//   logger.info(`Logged in as ${client.user.tag}!`);
// });

// // Create an event listener for messages
// client.on('message', message => {
// 	// Our bot needs to know if it will execute a command
// 	// It will listen for messages that will start with `!`
// 	if (message.content.substring(0, 1) == '!') {
// 		var args = message.content.substring(1).split(' ');
// 		var cmd = args[0];

// 		args = args.splice(1);
// 		switch(cmd) {
// 			// !ping
// 			case 'ping':
// 				message.channel.send('Pong!');
// 				break;
// 			case 'hi':
// 				message.channel.send("Hello there " + message.member);
// 				break;
// 		}
// 	}
// });

// client.login('NTU2NTU2Mjk5MTI3NjE5NTg2.D27dmg.LH0dqheTWCkmdy_o6XXZKxT4SzM');
