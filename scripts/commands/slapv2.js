var mysterious = "Siegfried Sama";
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "slapv2",
  version: "3.0.0",
  permssion: 0,
  credits: `${mysterious}`,
  description: "girl to boy slap",
  category: "...",
  usages: "slapv2",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [ "https://i.postimg.cc/1tByLBHM/anime-slap.gif", "https://i.postimg.cc/SNqNc4hH/received-304835325430391.gif" , "https://i.postimg.cc/cJj5NdhH/received-898220558434168.gif" , "https://i.postimg.cc/B6ry2JPy/received-910783833652267.gif"];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Mention 1 person that you want to slap", threadID, messageID);
   var callback = () => api.sendMessage({body:`╭──────•◈•───────╮ \n\n_থাপ্পর👋 খা হালার পুত_😛👉 ${tag}` + `\n\nসরি, আমার ভুল হয়েছে মাফ করে দিন_🙁😸\n\n  𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗥𝗔𝗡𝗔\n╰──────•◈•───────╯`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/slap.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/slap.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/slap.gif")).on("close",() => callback());
              }
