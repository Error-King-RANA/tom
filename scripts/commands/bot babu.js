const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: `goibot`,
  version: "1.0.0", 
  permission: 0,
  credits: "Rahad",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {}
};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["𝗝𝗮𝗻 𝗮𝗺𝗿 𝘂𝗺𝗺𝗮𝗵 😘" , "𝗞𝗮𝗰𝗵𝗲 𝗮𝘀𝗼 𝗲𝗶 𝗻𝗲 😘" , "𝗔𝗺𝗮𝗸𝗲 𝗸𝗶 𝘀𝗮𝗻𝘁𝗶 𝗱𝗶𝗯𝗮 𝗻𝗮 😒" , "𝗧𝘂𝗺𝗶 𝗲𝘁𝗼 𝗰𝘂𝘁𝗲 𝗸𝗻 🙈" , "𝗕𝗼𝗹𝗼 𝗷𝗮𝗻 𝘁𝘂𝗺𝗶 𝗸𝗶 𝗮𝗺𝗸 𝗹𝗼𝘃𝗲 𝗸𝗼𝗿𝗼 🙈" , "𝗚𝗿𝗼𝘂𝗽𝗲𝗿 𝘀𝗼𝗯𝗮𝗶𝗸𝗲 𝗹𝗼𝘃𝗲 𝘆𝗼𝘂 🙈", "𝗧𝘂𝗺𝗶 𝗲𝘁𝗼 𝗰𝘂𝘁𝗲 𝗸𝗻 😻" , "𝗛𝗺 𝗯𝗮𝗯𝘂 𝗯𝗼𝗹𝗼 😽" , "𝗜 𝗹𝗼𝘃𝗲 𝘂 𝗷𝗮𝗻 🥰" , "𝗞𝗲𝗺𝗻 𝗮𝘀𝗼 𝗷𝗮𝗻 😽" , "𝗧𝘂𝗺𝗶 𝘁𝗼 𝗱𝗲𝗸𝗵𝗶 𝗼𝗻𝗸 𝗰𝘂𝘁𝗲 🙀" ,"𝗛𝗼𝗽 , 𝗯𝗼𝘀𝘀 𝗯𝗼𝗹 𝗯𝗼𝘀𝘀 😻" , "𝗖𝘂𝗽 𝘁𝗵𝗮𝗸𝗼 𝘁𝗼 😾" , "𝗧𝗺𝗿 𝗻𝗮𝗻𝗮𝗿 𝗼𝗶𝘁𝗮 🙊" , "ℜ𝔞𝔫𝔞 𝔟𝔬𝔰 𝔪𝔞𝔯𝔟𝔢 𝔠𝔲𝔭 𝔱𝔥𝔞𝔨𝔬 😿" , "𝕽𝖆𝖓𝖆 𝖇𝖔𝖘 𝖒𝖆𝖗𝖇𝖊 𝖈𝖚𝖕 𝖐𝖗𝖔 🙊" , "𝗔𝗿𝗲𝗸𝗯𝗮𝗿 𝗯𝗮𝗯𝘂 𝗯𝗼𝗹𝗹𝗲 😾" , "𝗠𝘂𝗿𝗶 𝗸𝗵𝗮𝘄 𝗷𝗮𝗻 😸" , "ĶĨČĤÚ βŐĹβŐ ŃĂ 😼" , "ĴĂŃ ŚÚŃŐ Ĩ ĹŐVĔ Ú 😻" , "𝖀𝖒𝖒𝖆𝖍 𝖏𝖆𝖓 😻😻 " , "𝗔𝗿𝗲 𝗯𝗼𝗹𝗼 𝗮𝗺𝗿 𝗷𝗮𝗻 😻" , "𝗧𝘂𝗺𝗶𝗼 𝗮𝗺𝗮𝗸𝗲 𝗺𝗶𝘀𝘀 𝗸𝗿𝗼 😽" , "𝗚𝗵𝘂𝗿𝘁𝗲 𝗷𝗮𝗯𝗮 😽" , "𝗖𝗼𝗹𝗼 𝗷𝗮𝗻 𝗸𝗮𝗹 𝗱𝗲𝗸𝗵𝗮 𝗸𝗼𝗿𝗶 😁" , "𝗛𝗲 𝗯𝗼𝗹𝗼 𝘀𝘂𝗻𝗰𝗵𝗶 𝗮𝗺𝗶 😋" , "𝗔𝗿 𝗸𝗼𝘁𝗼 𝗯𝗮𝗿 𝗱𝗮𝗸𝗯𝗶 😎" , "হুম বলো কি বলবে 😒" , "𝗞𝗲 𝘁𝘂𝗺𝗶 𝗯𝗼𝘁𝘀𝗼 🙈" , "𝗧𝘂𝗺𝗶 𝗸𝗲𝗱𝗮 👀" , "𝗕𝗮𝗯𝘂 𝗻𝗮 𝗷𝗮𝗻𝘂 𝗯𝗼𝗹𝗼 😻" , "𝗨𝗺𝗺 𝗸𝗼𝘄 🌚" , "𝗞𝗶 𝗵𝗼𝘆𝗲𝗰𝗵𝗲 𝗷𝗮𝗻 😻","𝗝𝗮𝗻 𝘀𝘂𝗻𝗼 𝘂𝗺𝗺𝗮𝗵 😘" , "𝗜 𝗹𝗼𝘃𝗲 𝘆𝗼𝘂 𝗯𝗼𝗹 😾🔪" , "𝗘𝘁𝗼 𝗱𝗮𝗸𝗼 𝗸𝗻 😒" , "𝗛𝗺 𝗯𝗼𝗹𝗼 𝗷𝗮𝗻 😘" , "𝗝𝗮𝗻 𝗿𝗮𝘁𝗲 𝘃𝗶𝗱𝘂 𝗰𝗮𝗹𝗹 𝗱𝗶𝗼 🥰" , "𝗨𝗳𝗳 𝗷𝗮𝗻 𝘂𝗺𝗺𝗮𝗵 😽" ,];
  var rand = tl[Math.floor(Math.random() * tl.length)];

  if (event.body.indexOf("babu") == 0 || event.body.indexOf("Babu") == 0) {
    var msg = {
      body: `┏━━━━━━━━━━━━━━━━━━┓\n┃━➤🙋‍♂️𝙳𝚎𝚊𝚛 :${name},\n┃━➤💬:${rand}\n┗━━━━━━━━━━━━━━━━━━ ❞`
    };
    return api.sendMessage(msg, threadID, messageID);
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {
 
};
