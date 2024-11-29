module.exports = {
config: {
  name: "tik",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "Download video from facebook",
  prefix: true,
  category: "admin",
  usages: "link",
  cooldowns: 5,
  dependencies: {
        'nayan-server': '',
  }
},
  
start: async function({ nayan, events, args }) {
  
  nayan.setMessageReaction("😘", events.messageID, (err) => {
  }, true);
  nayan.sendTypingIndicator(events.threadID, true);
  
  const { messageID, threadID } = events;

  
  const { tikdown } = require("nayan-video-downloader")
  const fs = require("fs");
  const axios = require("axios");
  const request = require("request");
  const prompt = args.join(" ");
  if (!args[0]) return nayan.reply("[ ! ] Input link.", threadID, messageID);

  const content = args.join(" ");
  if (!args[1]) nayan.reply(`┏━━━━━<𝗠𝗘𝗗𝗜𝗔>━━━━━┓\n┃𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗜𝗡𝗚 𝗩𝗜𝗗𝗘𝗢 \n┃𝗙𝗢𝗥 𝗬𝗢𝗨 📥\n┃    ↻ ◁ || ▷ ↺\n┃  𝗣𝗟𝗘𝗔𝗦𝗦𝗘 𝗪𝗔𝗜𝗧\n┗━━━━[ 𝗥𝗔𝗡𝗔 𝗕𝗢𝗧 ]━━━┛`, events.threadID, (err, info) => setTimeout(() => { nayan.unsendMessage(info.messageID) }, 20000));

 try {
  const res = await tikdown(`${content}`);
console.log(res)
   var file = fs.createWriteStream(__dirname + '/cache/tik.mp4');
   
        const play = res.data.video
   const title = res.data.title
        const rqs = request(encodeURI(`${play}`));
   
    

  rqs.pipe(file);  
  file.on('finish', () => {
    
    setTimeout(function() {
      
      return nayan.reply({
        body: `TITLE: ${title}`,
        attachment: fs.createReadStream(__dirname + '/cache/tik.mp4')
      }, threadID, messageID)
    }, 5000)
  })
    } catch (err) {
    nayan.reply(`error`, events.threadID, events.messageID);  
   }
}
};
