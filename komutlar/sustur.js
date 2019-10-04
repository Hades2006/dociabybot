const Discord = require('discord.js');
const ms = require("ms");

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first();
  let sure = args.slice(1).join(' ');
  
  
  let muteRole = 'Muteli';
  if (message.mentions.users.size < 1) return message.reply('Susturacağın kişiyi etiketlemelisin!');
  
  if (sure.length < 1 && !sure) return message.reply('Susturacağım süreyi yaz?')
  
  message.guild.channels.forEach(async (channel, id) => {
        message.channel.overwritePermissions(muteRole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });

  await(message.guild.members.get(user.id).addRole(muteRole))
  
  const embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`<@${user.id}> adlı kullanıcı başarıyla susturuldu!`)
  .addField("Susturulma Süresi", sure.toString().replace(/(minute|min|m)/, 'dakika').replace(/(seconds|second|sec|s)/, 'saniye').replace(/(hours|hour|h)/, 'saat'))
  message.channel.send(embed2)
  
  setTimeout(function() {
    message.guild.members.get(user.id).removeRole(muteRole)
    message.channel.send(`<@${user.id}> kullanıcısının susturulma süresi bitti ve susturulması kaldırıldı!`);
  }, ms(sure));
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mute"],
  permLevel: 0
};

exports.help = {
  name: 'sustur',
  description: 'İstediğiniz kişiyi susturur.',
  usage: 'sustur'
};