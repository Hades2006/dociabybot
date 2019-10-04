// ıkarken yapılacaklar


/*const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000)*/

if (process.version.slice(1).split(".")[0] < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const {RichEmbed} = require('discord.js');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require('chalk');
const fs = require('fs');
const { stripIndents } = require('common-tags');
const moment = require('moment');


const db = require('quick.db');
const jimp = require('jimp');
const Jimp = require('jimp')
const snekfetch = require('snekfetch');
const useful = require('./x.js');


let komutum = JSON.parse(fs.readFileSync("./komutlar.json", "utf8"));

client.cmdd = komutum


//oydurum
client.on('message', message => {

    var msg = message.content;

    if (msg === ayarlar.prefix + 'oydurum') {
        message.channel.send('[ Oy Atarak Destek Olun :) https://discordbots.org/bot/578634207484575744/vote ', {
            files: [
                "https://discordbots.org/api/widget/upvotes/578634207484575744.png"
            ]
        });
    }
});
//oydurumson



// GEREKLİ YERLER
const serverStats = {
  guildID: '581510706025725955', 
  totalUsersID: '581510706508201986',
  memberCountID: '581510707053330432',
  botCountID: '581510707280085003'

};


client.on('guildMemberAdd', member => {

if (member.guild.id !== serverStats.guildID) return;

client.channels.get(serverStats.totalUsersID).setName(`Toplam Kullanıcı : ${member.guild.memberCount} `);
client.channels.get(serverStats.memberCountID).setName(`Üye Sayısı : ${member.guild.members.filter(m => !m.user.bot).size}`);
client.channels.get(serverStats.botCountID).setName(`Bot Sayısı : ${member.guild.members.filter(m => m.user.bot).size}`);

});

client.on('guildMemberRemove', member => {

if (member.guild.id !== serverStats.guildID) return;

client.channels.get(serverStats.totalUsersID).setName(`Toplam Kullanıcı : ${member.guild.memberCount} `);
client.channels.get(serverStats.memberCountID).setName(`Üye Sayısı : ${member.guild.members.filter(m => !m.user.bot).size}`);
client.channels.get(serverStats.botCountID).setName(`Bot Sayısı : ${member.guild.members.filter(m => m.user.bot).size}`);


});

client.useful = useful;
require("./modüller/fonksiyonlar.js")(client);
require('./util/eventLoader')(client);
client.config = require("./config.js");

client.ayarlar = {
        "oynuyor": "!yardım | !davet | cyber-blockers.glitch.me | Ayarlanabilir Panel Aktif !!",
        "official_sahip": "317974144253689856",
        "sahip": ['317974144253689856'],
        "yardimcilar": ['456526118929956866'],
        "isim": "Blocker",
        "botD": "https://discordapp.com/oauth2/authorize?client_id=578634207484575744&scope=bot&permissions=2146958847",
        "webS": "cyber-blockers.glitch.me/",
        "web": "https://cyber-blockers.glitch.me",
        "dblO": "https://discordbots.org/bot/578634207484575744/vote",
        "dbl": "https://discordbots.org/bot/578634207484575744",
        "dbltoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3ODYzNDIwNzQ4NDU3NTc0NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTYxMDQwOTQ2fQ.GUv1Mc4ag91T9b3u1K_jTn4q1XU64bIUjixW4iJdHEc",
        "webpanel": "https://cyber-blockers.glitch.me/",
        "versiyon": "1.0.0",
        "prefix": "!",
        "renk":  "DARKBLUE",
        "version":  "1.0.0",
 };
client.avatarURL = `https://cdn.discordapp.com/avatars/516600125649453066/c866646d27728bdb25fc39161c94a2e8.png?size=2048`
const ayarlar = client.ayarlar;

client.tr = require('./tr.js');
client.en = require('./en.js');

//var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${chalk.yellow(`»`)} ${message}`);
};





                         
 
  client.ayar = db;
   








client.on("ready", async () => {
  
  client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
  
  require("./modüller/panel.js")(client); 
  
  console.log(`${chalk.green(client.user.username)}${chalk.red(",")} ${chalk.blue(client.guilds.size)} ${chalk.yellow("Sunucu'ya")} ${chalk.red("ve")} ${chalk.blue(client.users.size.toLocaleString())} ${chalk.yellow("Kullanıcı'ya")} ${chalk.red("hizmet veriyor!")}`)
  client.user.setStatus("dnd");
  client.user.setActivity(client.ayarlar.oynuyor, { type: 'PLAYING' });
  
})
  
  
  
 







/*
client.on('guildMemberAdd', async member => {
 
  //	let kanal = await db.fetch(`hgKanal2_${member.guild.id}`)
   //  if (!kanal) return
  const Canvas = require('canvas')
	const canvas = Canvas.createCanvas(900, 280);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://pngimg.com/uploads/alien/alien_PNG103.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.user.tag}`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.user.tag}`, canvas.width / 3.7, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL || member.user.defaultAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'MEETRHosgeldin.png');

	member.guild.channels.get('531535859594297364').send(`Sunucuya hoşgeldin, ${member}!`, attachment);
});


client.on('guildMemberRemove', async member => {
  
	//let kanal = await db.fetch(`hgKanal2_${member.guild.id}`)
    //if (!kanal) return
    const Canvas = require('canvas')
	const canvas = Canvas.createCanvas(900, 280);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://pngimg.com/uploads/alien/alien_PNG103.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.user.tag}`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.user.tag}`, canvas.width / 3.7, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL || member.user.defaultAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'MEETRGuleGule.png');

	member.guild.channels.get('531535859594297364').send(`Güle güle, **${member.user.tag}**`, attachment);
});


const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');

    let fontSize = 54;

    do {
  
    ctx.font = `${fontSize -= 2}px Helvetica`;
    } while (ctx.measureText(text).width > canvas.width - 111);

    return ctx.font;
};

*/

const invites = {};


const wait = require('util').promisify(setTimeout);

client.on('ready', () => {

  wait(1000);


  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  try{
  if (db.has(`dKanal_${member.guild.id}`) === true) {
  member.guild.fetchInvites().then(guildInvites => {
   if (member.user.bot) return
    const ei = invites[member.guild.id];
    
    invites[member.guild.id] = guildInvites;
   
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    
    const inviter = client.users.get(invite.inviter.id);
   
    const kanal = member.guild.channels.get(db.fetch(`dKanal_${member.guild.id}`));
 
    kanal.send(`\`${member.user.tag}\` adlı kullanıcı \`${inviter.tag}\` adlı kullanıcının **${invite.code}** linkine sahip daveti ile sunucuya katıldı!`);
  

   
  });
  } else {
    return
  }
  } catch(err) {
    return
  }
});



client.on("message",async message => {
  if (!message.guild) return;
    let prefixyeni = db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
    let afk_kullanici = message.mentions.users.first() || message.author;
    if(message.content.startsWith(prefixyeni+"afk")) return;
  if (message.author.bot === true) return;
    if(message.content.includes(`<@${afk_kullanici.id}>`))
        if(db.has(`afks_${afk_kullanici.id}`)) {
                message.channel.send(`**${client.users.get(afk_kullanici.id).tag}** adlı kullanıcı şuanda AFK! \n**Sebep:** \n${db.fetch(`afks_${afk_kullanici.id}`)}`)
        }
  
        if(db.has(`afks_${message.author.id}`)) {
                message.reply("Artık afk değilsin!")
            db.delete(`afks_${message.author.id}`)
        }
  
  
    if (!message.guild) return;
  
let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
  if (message.author.bot) return;



  if (message.content === `<@${client.user.id}>`) {
    
    message.channel.send(`• Bu sunucuya ait ön-ek/prefix: \`${prefix}\` \n• Bu sunucuya ait yardım komutu: \`${prefix}yardım\` \n• Ön-ek/Prefix değiştirilse bile komutlar etiket ile çalışır. \nÖrnek: \`@${client.user.tag}\`yardım`)
    
  }
  
  if (message.content === `<@${client.user.id}> ${message.content}`) {
    
    message.channel.send(`• Bu sunucuya ait ön-ek/prefix: \`${prefix}\` \n• Bu sunucuya ait yardım komutu: \`${prefix}yardım\` \n• Ön-ek/Prefix değiştirilse bile komutlar etiket ile çalışır. \nÖrnek: \`@${client.user.tag}\`yardım`)
    
  }
});


client.on("message", async msg => {
  
  
 

  
  const prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  //const args = msg.content.slice.split(' ');
  const args = msg.content.trim().split(/ +/g);
  const fAK = await  db.fetch(`filtreAK_${msg.guild.id}`);
  let mesaj = args.slice(1).join(' ');
  const filtre = await db.fetch(`filtre_${msg.guild.id}`);
  
 
  if(fAK == 'açık') {
    
    
    
            
      const fltr = filtre
   if (fltr.some(word => msg.content.includes(word))) {
  if (!msg.member.hasPermission("ADMINISTRATOR")) {
    msg.delete()
     
   var k = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Filtre Sistemi")
        .setDescription(`Bu sunucuda yasaklanmış bir kelimeyi kullandınız, bu yüzden mesajınızı sildim.`)
        msg.channel.send(k).then(message => message.delete(5000));
     
  return;
  }
  } }
    
  
  
   if (!msg.guild) return;

  if (msg.author.bot) return;
  
 
  if (db.has(`capsE_${msg.guild.id}`) === true) {
    let x = /\w*[A-Z]\w*[A-Z]\w*/g;
    if (msg.content.match(x)) {
      if (mesaj.member.permissions.has("ADMINISTRATOR") === true) return;
      msg.delete();
      let y = await msg.reply(`Bu sunucuda büyük harf engeli açık, bu yüzden büyük harf açıkken yazı yazamazsın!`)
      y.delete(5000);
      return
    };
  };

  
  if (!msg.guild) return;
 
    if (db.has(`küfürE_${msg.guild.id}`) === true) {
    const kufur = new RegExp(/(göt|amk|aq|orospu|oruspu|oç|oc|sik|fuck|yarrak|piç|amq|amcık|çocu|sex|seks|amına|sg|siktir git)/)
  if (kufur.test(msg.content)==true) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
        var k = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Küfür Engeli!")
        .setDescription(`Bu sunucuda küfürler **${client.user.username}** tarafından engellenmektedir! Küfür etmene izin vermeyeceğim!`)
        msg.channel.send(k).then(message => message.delete(5000));
    }
}
    }

     
      if (db.has(`linkE_${msg.guild.id}`) === true) {
        const reklam = new RegExp(/(com|.com|www|dicord.gg|.tk|.pw|https:|http:|.info|.cf|gg|.net|.me|www.|WWW.|.COM|.NET|.TK|DİSCORD.GG|.PW)/)
      if (reklam.test(msg.content)==true) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          msg.delete()
           msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
            var ke = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor("Link Engeli!")
            .setDescription(`Bu sunucuda linkler **${client.user.username}** tarafından engellenmektedir! Reklam yapmana izin vermeyeceğim!`)
            msg.channel.send(ke).then(message => message.delete(5000));
        }
    }
        }





})


client.on("messageUpdate", async (msg) => {
  
  const prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  //const args = msg.content.slice.split(' ');
  const args = msg.content.trim().split(/ +/g);
  const fAK = await  db.fetch(`filtreAK_${msg.guild.id}`);
  let mesaj = args.slice(1).join(' ');
  const filtre = await db.fetch(`filtre_${msg.guild.id}`);
  
  
  if(fAK == 'açık') {
    
    
    
            
      const fltr = filtre
   if (fltr.some(word => msg.content.includes(word))) {
  if (!msg.member.hasPermission("ADMINISTRATOR")) {
    msg.delete()
     
   var k = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Filtre Sistemi")
        .setDescription(`Bu sunucuda yasaklanmış bir kelimeyi kullandınız, bu yüzden mesajınızı sildim.`)
        msg.channel.send(k).then(message => message.delete(5000));
     
  return;
  }
  } }
    
  
  
   if (!msg.guild) return;

  if (msg.author.bot) return;
  
  
  if (db.has(`capsE_${msg.guild.id}`) === true) {
    let x = /\w*[A-Z]\w*[A-Z]\w*/g;
    if (msg.content.match(x)) {
      if (mesaj.member.permissions.has("ADMINISTRATOR") === true) return;
      msg.delete();
      let y = await msg.reply(`Bu sunucuda büyük harf engeli açık, bu yüzden büyük harf açıkken yazı yazamazsın!`)
      y.delete(5000);
      return
    };
  };

  
  if (!msg.guild) return;
  
    if (db.has(`küfürE_${msg.guild.id}`) === true) {
    const kufur = new RegExp(/(göt|amk|aq|orospu|oruspu|oç|oc|sik|fuck|yarrak|piç|amq|amcık|çocu|sex|seks|amına|sg|siktir git)/)
  if (kufur.test(msg.content)==true) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
        var k = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Küfür Engeli!")
        .setDescription(`Bu sunucuda küfürler **${client.user.username}** tarafından engellenmektedir! Küfür etmene izin vermeyeceğim!`)
        msg.channel.send(k).then(message => message.delete(5000));
    }
}
    }

      
      if (db.has(`linkE_${msg.guild.id}`) === true) {
        const reklam = new RegExp(/(com|.com|www|dicord.gg|.tk|.pw|https:|http:|.info|.cf|gg|.net|.me|www.|WWW.|.COM|.NET|.TK|DİSCORD.GG|.PW)/)
      if (reklam.test(msg.content)==true) {
       if (!msg.member.hasPermission("ADMINISTRATOR")) {
          msg.delete()
           msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
            var ke = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor("link Engeli!")
            .setDescription(`Bu sunucuda linkler **${client.user.username}** tarafından engellenmektedir! Reklam yapmana izin vermeyeceğim!`)
            msg.channel.send(ke).then(message => message.delete(5000));
       }
    }
        }

  
});


client.on("message", async message => {
  
  if (!message.guild) return;
  
    if(db.has(`sayac_${message.guild.id}`) === true) {
        if(db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
            .setTitle(`Tebrikler ${message.guild.name}!`)
            .setDescription(`Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
            .setColor("RANDOM")
            message.channel.send({embed})
            message.guild.owner.send({embed})
            db.delete(`sayac_${message.guild.id}`)
        }
    }
})








client.on("guildMemberRemove", async member => {
    if (db.has(`sayac_${member.guild.id}`) === false) return
    if (db.has(`sKanal_${member.guild.id}`) === false) return
    const channel = db.fetch(`sKanal_${member.guild.id}`)
    member.guild.channels.get(channel).send(`**${member.user.tag}** Sunucudan ayrıldı! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.members.size}\` üye kaldı!`)
})


//let ot = JSON.parse(fs.readFileSync("./jsonlar/otoR.json", "utf8"));


client.on("guildMemberAdd", async member => {
  
  if (!member.guild) return;
  
  let prefix = await db.fetch(`prefix_${member.guild.id}`) || client.ayarlar.prefix;
  
  if(db.has(`gc_${member.guild.id}`) === false) return;
  
  const hgK = await db.fetch(`gc_${member.guild.id}`)
  if (!hgK) return;
  
  const giris = db.fetch(`girisM_${member.guild.id}`)
  
    member.guild.channels.get(hgK).send(db.has(`girisM_${member.guild.id}`) ? giris.replace('{kullanıcı}', `<@${member.user.id}>`).replace("{user}", `<@${member.user.id}>`).replace("{sunucu}", `**${member.guild.name}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`) : `<@${member.user.id}> Katıldı! **${client.ayarlar.webpanel}** adresinden veya (\`giriş-mesaj-ayarla\` komutu ile mesajı değiştirilebilir.)`);
});

client.on("guildMemberRemove", async member => {
  
  if (!member.guild) return;
  
  let prefix = await db.fetch(`prefix_${member.guild.id}`) || client.ayarlar.prefix;
  
  if(db.has(`gc_${member.guild.id}`) === false) return;
  
   const hgK = await db.fetch(`gc_${member.guild.id}`)
  if (!hgK) return;
  
  const cikis = db.fetch(`cikisM_${member.guild.id}`)
  
  member.guild.channels.get(hgK).send(db.has(`cikisM_${member.guild.id}`) ? cikis.replace('{kullanıcı}', `**${member.user.username}**`).replace("{user}", `**${member.user.username}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`) : `**${member.user.username}** Ayrıldı! **${client.ayarlar.webpanel}** adresinden veya (\`çıkış-mesaj-ayarla\` komutu ile mesaj değiştirilebilir.)`);
});


  
  
  


client.on("message",async  message => {

  if (!message.guild) return;
  
let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

  if(message.content.startsWith(prefix)) {
        let komutum = client.cmdd
        if(komutum[message.guild.id]) {
            for (var i = 0; i < Object.keys(komutum[message.guild.id]).length; i++) {
                if(message.content.slice(prefix.length) === Object.keys(komutum[message.guild.id][i])[0]) {
                   
                    message.channel.send(komutum[message.guild.id][i][Object.keys(komutum[message.guild.id][i])])
                  
                    return
                }
            }
        }
    }
});


client.on('message', async msg => {
  
  if (!msg.guild) return;
  
  let prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  
  if(!msg.guild.channels.get(db.fetch(`destekK_${msg.guild.id}`))) return
  var s = 'tr'
  var r = 'Destek Ekibi'
  var k = 'destek-kanalı'
  const dil = s
  
  let rol = '';
  let kanal = '';
  
  if (db.has(`destekK_${msg.guild.id}`) === true) {
 kanal = msg.guild.channels.get(db.fetch(`destekK_${msg.guild.id}`)).name
  }
  
  if (db.has(`destekK_${msg.guild.id}`) === false) {
  kanal = k
  }
  
  if (db.has(`destekR_${msg.guild.id}`) === true) {
  rol = msg.guild.roles.get(db.fetch(`destekR_${msg.guild.id}`))
  }
  
  if (db.has(`destekR_${msg.guild.id}`) === false) {
  rol = r
  }
  
  const reason = msg.content.split(" ").slice(1).join(" ");
  if (msg.channel.name== kanal) {
     if (msg.author.bot) return;
    /*if (!msg.guild.roles.exists("name", rol)) return msg.reply(client[dil].desteksistem.rolyok.replace("{rol}", r)).then(m2 => {
            m2.delete(5000)});*/
    if (msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`)) {
      
      msg.author.send(client[dil].desteksistem.aciktalepozel.replace("{kisi}", msg.author.tag).replace("{kanal}", `${msg.guild.channels.get(msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`).id)}`))
      msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`).send(client[dil].desteksistem.aciktalep.replace("{kisi}", msg.author.tag).replace("{sebep}", msg.content))
      
      msg.delete()
      return
    }
    if(msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)) {
      msg.guild.createChannel(`${client[dil].desteksistem.talep}-${msg.author.discriminator}`, "text").then(c => {
      const category = msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)
      c.setParent(category.id)
      let role = msg.guild.roles.find(r => r.name === rol.name);
      let role2 = msg.guild.roles.find(r => r.name === "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
      .setTitle(`_Merhaba ${msg.author.username}!_`)
      .addField(`» Destek Talebi Hakkında Bilgilendirme «`, `Yetkililerimiz en yakın zamanda burada sorunun ile ilgilenecektir! \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilir, \nSunucudaki tüm Destek Taleplerini kapatmak için ise \`${prefix}talepleri-kapat\` yazabilirsin!`)
      .addField(`» Destek Talebi Sebebi «`, `${msg.content}`, true)
      .addField(`» Destek Talebini Açan Kullanıcı «`, `<@${msg.author.id}>`, true)
      .setFooter(`${msg.guild.name} adlı sunucu ${client.user.username} Destek Sistemi'ni kullanıyor teşekkürler!`, msg.guild.iconURL)
      c.send({ embed: embed });
      c.send(`** @here | 📞Destek Talebi! ** \n**${msg.author.tag}** adlı kullanıcı \`${msg.content}\` sebebi ile Destek Talebi açtı!`)
      msg.delete()
      }).catch(console.error);
    }
  }

  if (msg.channel.name== kanal) {
    if(!msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)) {
      msg.guild.createChannel(client[dil].desteksistem.kategori, 'category').then(category => {
      category.setPosition(1)
      let every = msg.guild.roles.find(c => c.name === "@everyone");
      category.overwritePermissions(every, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false,
        READ_MESSAGE_HISTORY: false
      })
      msg.guild.createChannel(`${client[dil].desteksistem.talep}-${msg.author.discriminator}`, "text").then(c => {
      c.setParent(category.id)
      let role = msg.guild.roles.find(c => c.name === rol.name);
      let role2 = msg.guild.roles.find(c => c.name === "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
      .setTitle(`_Merhaba ${msg.author.username}!_`)
     .addField(`» Destek Talebi Hakkında Bilgilendirme «`, `Yetkililerimiz en yakın zamanda burada sorunun ile ilgilenecektir! \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilir, \nSunucudaki tüm Destek Taleplerini kapatmak için ise \`${prefix}talepleri-kapat\` yazabilirsin!`)
      .addField(`» Destek Talebi Sebebi «`, `${msg.content}`, true)
      .addField(`» Destek Talebini Açan Kullanıcı «`, `<@${msg.author.id}>`, true)
      .setFooter(`${msg.guild.name} adlı sunucu ${client.user.username} Destek Sistemi'ni kullanıyor teşekkürler!`, msg.guild.iconURL)
      c.send({ embed: embed });
      c.send(`** @here | 📞Destek Talebi! ** \n**${msg.author.tag}** adlı kullanıcı \`${msg.content}\` sebebi ile Destek Talebi açtı!`)
      msg.delete()
      }).catch(console.error);
    })
  }
}
})

client.on('message', async message => {
    if(!message.guild.channels.get(db.fetch(`destekK_${message.guild.id}`))) return

  if (!message.guild) return;
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
  var s = 'tr'
  var r = 'Destek Ekibi'
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var r = 'Support Team'
    }
  const dil = s
  
if (message.content.toLowerCase().startsWith(prefix + `kapat`)) {
  if (!message.channel.name.startsWith(`${client[dil].desteksistem.talep}-`)) return message.channel.send(`Bu komut sadece Destek Talebi kanallarında kullanılabilir.`);

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Destek Talebi Kapatma İşlemi!`)
  .setDescription(`Destek talebini kapatma işlemini onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
  .setFooter(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
  message.channel.send({embed})
  .then((m) => {
    message.channel.awaitMessages(response => response.content === 'evet', {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.delete();
      })
      .catch(() => {
        m.edit('Destek talebi kapatma isteği zaman aşımına uğradı.').then(m2 => {
            m2.delete()
        }, 3000);
      });
  });
  }
  

  
  //if (!message.guild) return;
  
 // let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  

  // const dil = s
  
  
  
});

//log sistemi

//let logA = JSON.parse(fs.readFileSync("./jsonlar/log.json", "utf8"));

client.on("guildMemberAdd", member => {
  
  //if (member.author.bot) return;
  
 // if (!logA[member.guild.id]) return;
  
  var user = member.user;
  var tarih = ''
			if(moment(user.createdAt).format('MM') === '01') {
				var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '02') {
				var tarih = `${moment(user.createdAt).format('DD')} Şubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '03') {
				var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '04') {
				var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '05') {
				var tarih = `${moment(user.createdAt).format('DD')} Mayıs ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '06') {
				var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '07') {
				var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '08') {
				var tarih = `${moment(user.createdAt).format('DD')} Ağustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '09') {
				var tarih = `${moment(user.createdAt).format('DD')} Eylül ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '10') {
				var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '11') {
				var tarih = `${moment(user.createdAt).format('DD')} Kasım ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '12') {
				var tarih = `${moment(user.createdAt).format('DD')} Aralık ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
  
  var tarih2 = ''
			if(moment(user.joinedAt).format('MM') === '01') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ocak ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '02') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Şubat ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '03') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mart ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '04') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Nisan ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '05') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mayıs ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '06') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Haziran ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '07') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Temmuz ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '08') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ağustos ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '09') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Eylül ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '10') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ekim ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '11') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Kasım ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '12') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Aralık ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
  
  //var kanal = member.guild.channels.get(logA[member.guild.id].log);
  
  if (db.has(`log_${member.guild.id}`) === false) return;
  
  var kanal = member.guild.channels.get(db.fetch(`log_${member.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Sunucuya Bir Kullanıcı Katıldı!`, member.user.avatarURL)
  .addField("Kullanıcı Tag", member.user.tag, true)
  .addField("ID", member.user.id, true)
  .addField("Discord Kayıt Tarihi", tarih, true)
  .addField("Sunucuya Katıldığı Tarih", tarih2, true)
  .setThumbnail(member.user.avatarURL)
  kanal.send(embed);
  
});

client.on("guildMemberRemove", member => {
  
  //if (member.author.bot) return;
  
 // if (!logA[member.guild.id]) return;
  
  var user = member.user;
  var tarih = ''
			if(moment(user.createdAt).format('MM') === '01') {
				var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '02') {
				var tarih = `${moment(user.createdAt).format('DD')} Şubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '03') {
				var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '04') {
				var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '05') {
				var tarih = `${moment(user.createdAt).format('DD')} Mayıs ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '06') {
				var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '07') {
				var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '08') {
				var tarih = `${moment(user.createdAt).format('DD')} Ağustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '09') {
				var tarih = `${moment(user.createdAt).format('DD')} Eylül ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '10') {
				var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '11') {
				var tarih = `${moment(user.createdAt).format('DD')} Kasım ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '12') {
				var tarih = `${moment(user.createdAt).format('DD')} Aralık ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
  
  var tarih2 = ''
			if(moment(user.joinedAt).format('MM') === '01') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ocak ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '02') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Şubat ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '03') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mart ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '04') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Nisan ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '05') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mayıs ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '06') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Haziran ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '07') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Temmuz ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '08') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ağustos ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '09') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Eylül ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '10') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ekim ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '11') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Kasım ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '12') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Aralık ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
  
  //var kanal = member.guild.channels.get(logA[member.guild.id].log);
  
  if (db.has(`log_${member.guild.id}`) === false) return;
  
  var kanal = member.guild.channels.get(db.fetch(`log_${member.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Sunucudan Bir Kullanıcı Ayrıldı!`, member.user.avatarURL)
  .addField("Kullanıcı Tag", member.user.tag, true)
  .addField("ID", member.user.id, true)
  .addField("Discord Kayıt Tarihi", tarih, true)
  .addField("Sunucuya Katıldığı Tarih", tarih2, true)
  .setThumbnail(member.user.avatarURL)
  kanal.send(embed);
  
});

client.on("messageDelete", message => {
  
  if (message.author.bot) return;
  
    

db.set(`atan_${message.channel.id}`, `${message.author.tag}`)
db.set(`mesaj_${message.channel.id}`, message.content)
  
  //if (!logA[message.guild.id]) return;
  
  var user = message.author;
  
  //var kanal = message.guild.channels.get(logA[message.guild.id].log);
  
  if (db.has(`log_${message.guild.id}`) === false) return;
  
  var kanal = message.guild.channels.get(db.fetch(`log_${message.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Mesaj Silindi!`, message.author.avatarURL)
  .addField("Kullanıcı Tag", message.author.tag, true)
  .addField("ID", message.author.id, true)
  .addField("Silinen Mesaj", "```" + message.content + "```")
  .setThumbnail(message.author.avatarURL)
  kanal.send(embed);
  
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  
  if (oldMsg.author.bot) return;
  
 // if (!logA[oldMsg.guild.id]) return;
  
  var user = oldMsg.author;
  
  //var kanal = oldMsg.guild.channels.get(logA[oldMsg.guild.id].log);
  
  if (db.has(`log_${oldMsg.guild.id}`) === false) return;
  
  var kanal = oldMsg.guild.channels.get(db.fetch(`log_${oldMsg.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Mesaj Düzenlendi!`, oldMsg.author.avatarURL)
  .addField("Kullanıcı Tag", oldMsg.author.tag, true)
  .addField("ID", oldMsg.author.id, true)
  .addField("Eski Mesaj", "```" + oldMsg.content + "```")
  .addField("Yeni Mesaj", "```" + newMsg.content + "```")
  .setThumbnail(oldMsg.author.avatarURL)
  kanal.send(embed);
  
});

client.on("roleCreate", role => {
  
 // if (!logA[role.guild.id]) return;
  
  if (db.has(`log_${role.guild.id}`) === false) return;
  
  var kanal = role.guild.channels.get(db.fetch(`log_${role.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Rol Oluşturuldu!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal.send(embed);
  
});

client.on("roleDelete", role => {
  
 // if (!logA[role.guild.id]) return;
  
  if (db.has(`log_${role.guild.id}`) === false) return;
  
 var kanal = role.guild.channels.get(db.fetch(`log_${role.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Rol Kaldırıldı!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal.send(embed);
  
});

client.on("roleUpdate", role => {
  
 // if (!logA[role.guild.id]) return;
  
  if (db.has(`log_${role.guild.id}`) === false) return;
  
  var kanal = role.guild.channels.get(db.fetch(`log_${role.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Rol Güncellendi!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal.send(embed);
  
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
  
 // if (!logA[oldMember.guild.id]) return;
  
  if (db.has(`log_${oldMember.guild.id}`) === false) return;
  
  var kanal = oldMember.guild.channels.get(db.fetch(`log_${oldMember.guild.id}`))
  if (!kanal) return;
  
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${newMember.user.tag} adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`)
    kanal.send(embed);
    
  } else if(newUserChannel === undefined){

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${newMember.user.tag} adlı kullanıcı bir sesli kanaldan çıkış yaptı!`)
    kanal.send(embed);
    
    
  }
});


// PROFİL SİSTEMİ BROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO BAŞLAR BU ARADA --------------------------------------------



// PROFİL SİSTEMİ BROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO BİTER BU ARADA ---------------------------------------------

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${chalk.red(files.length)} ${chalk.green("komut yüklenecek.")}`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`${chalk.green("Yüklenen komut:")} ${chalk.blue(props.help.name)}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.english = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  //log(`${chalk.red(files.length)} ${chalk.green("komut yüklenecek.")}`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    //log(`${chalk.green("Yüklenen komut:")} ${chalk.blue(props.help.name)}.`);
    client.english.set(props.help.enname, props)
  });
});


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};



client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
     
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


 

  client.on("message", async msg => {
  
  const request = require('node-superfetch');
  const db = require('quick.db');
  
    
    

    
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length > 7) {
    
    db.add(`puancik_${msg.author.id + msg.guild.id}`, 1)
};

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 250) {
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)
    
    msg.channel.send(`Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${db.fetch(`seviye_${msg.author.id + msg.guild.id}`)}** seviye oldun!`)
    
    db.delete(`puancik_${msg.author.id + msg.guild.id}`)
    
  };
});

const DBL = require("dblapi.js");
const dbl = new DBL(client.ayarlar.dbltoken, client);


client.on('ready', () => {
   setInterval(() => {
        dbl.postStats(client.guilds.size);
  }, 1800);
   });

  dbl.getStats("516600125649453066").then(stats => {
    console.log('DBL ye gerekli verileri girdim.') // {"server_count":2,"shards":[]}
 });

client.login('NTkwMTQ1NDc4MjM5NDUzMTg0.XRUR0A.KXiY58vi3IPX7GFonxUoRiviLWs')
