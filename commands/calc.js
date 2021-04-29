const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name: "calc",
    run: function (bot, message, args) {
        const operation = args.join('').replace(/[C-Zc-z]/g, '')    //.replace(/write/g, '').replace(/process/g, '').replace(/destroy/g, '').replace(/bot/g, '').replace(/clear/g, '').replace(/kill/g, '').replace(/eval/g, '').replace(/botconfig/g, '').replace(/exit/g, '').replace(/fs/g, '').replace(/require/g, '').replace(/req/g, '').replace(prefix, '').replace(/calc/, '');

        const calcAns = new Discord.MessageEmbed()
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM")
            .setTimestamp(Date.now());
        try {
            const answer = eval(operation);
            calcAns.setTitle("Eredmény: " + answer)
                .setDescription(`${operation}`)
        } catch (err) {
            calcAns.setTitle("Eredmény: " + botconfig.error.hiba)
                .setDescription(`${botconfig.error.calc}`)
        }
        message.channel.send(calcAns);

    }
}