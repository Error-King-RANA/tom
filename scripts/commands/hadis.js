/** THIS FULL BOT COMMAND FILE AND ALL API CREATE BY RANA  DONT CHINGE MY ANY CODE 🤙😗**/
module.exports.config = {
  name: "hadis",
  version: "1.0.0",
  permssion: 0,
  credits: "RANA", ///Dont Change Credit Cuz I Edit
  prefix : false,
  description: "Random pic",
  category: "Islamic Hadis",
  usages: "hadis",
  cooldowns: 11,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
 
module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["┏ ━━┅━━━┅━━┅━━━┅━━ ┓\n\n—। যে পবিত্র থাকতে চায় \nআল্লাহ তাকে পবিত্র রাখেন। (সহীহ বুখারী)..—।🕋🌺\n\n┗ ━━┅━━━┅━━┅━━━┅━━ ┛",
"┏ ━━┅━━━┅━━┅━━━┅━━ ┓\n\n●═🕋🤲—। বাহিরে শক্র আমার কি ক্ষতি করবে?\n যখন আমার সবচেয়ে বড় শক্র আমার নফস..—।😥😥\n\n┗ ━━┅━━━┅━━┅━━━┅━━ ┛",
"┏ ━━┅━━━┅━━┅━━━┅━━ ┓\n\n●═🕋🌺—। পাপ থেকে একমাত্র তারাই বাঁচতে পারে \nযারা মুখে নয়; অন্তর থেকে আল্লাহ তা’আলার শাস্তিকে ভয় করে —।\n\n┗ ━━┅━━━┅━━┅━━━┅━━ ┛",
"┏ ━━┅━━━┅━━┅━━━┅━━ ┓\n\n●═😽🕋—। কারো সাথে খারাপ ব্যবহার করিও না \nকারণ মৃত্যুর আগে হয়তো তার কাছে ক্ষমা চাওয়ার জন্য তাকে খুঁজে পাবেনা..—।🦋🕋\n\n┗ ━━┅━━━┅━━┅━━━┅━━ ┛",
"┏ ━━┅━━━┅━━┅━━━┅━━ ┓\n\n●═🕋🥰—।  নিশ্চয় নামাজ অশ্লীল ও গর্হিত কার্য থেকে বিরত রাখে। (সূরা আনকাবুত ৪৫—।🕋🌺 \n\n┗ ━━┅━━━┅━━┅━━━┅━━ ┛",
"┏ ━━┅━━━┅━━┅━━━┅━━ ┓\n\n●═🕋🤲—। যে ব্যক্তি নিষ্ঠার সাথে শহীদি মৃত্যু কামনা করে\n আল্লাহ্ তাকে শহীদদের মর্যাদায় পৌছিয়ে দিবেন, যদিও সে তার বিছানায় মৃত্যুবরণ করে। (সহীহ মুসলিমঃ —।🕋🌺\n\n┗ ━━┅━━━┅━━┅━━━┅━━ ┛",
"┏ ━━┅━━━┅━━┅━━━┅━━ ┓\n\n ●═🕋🌺—। পিতা-মাতার সন্তুষ্টিতে আল্লাহ্ সন্তুষ্ট আর \nপিতা- মাতার অসন্তুষ্টে আল্লাহ্ অসন্তুষ্ট। (তিরমিযী, সনদ হাসান, মিশকাত.. —।🕋🌺\n\n┗ ━━┅━━━┅━━┅━━━┅━━ ┛",
"┏ ━━┅━━━┅━━┅━━━┅━━ ┓\n\n●═😻🕋—। “যে ব্যক্তি মারা গেল অথচ জিহাদ করেনি \nএমনকি জিহাদের আকাঙ্ক্ষাও ব্যক্ত করেনি, সে মুনাফিকের ন্যায় মৃত্যুবরণ করল।” (সহীহ মুসলিমঃ , নাসায়ীঃ )—।🕋🌺\n\n┗ ━━┅━━━┅━━┅━━━┅━━ ┛",
"┏ ━━┅━━━┅━━┅━━━┅━━ ┓\n\n●═🕋🤲—। পাঁচ ওয়াক্ত সলাত আদায় করলে \nপঞ্চাশ ওয়াক্ত সলাতের সওয়াব পাওয়া যায় (সহীহ বুখায়, মুসলিম ও তিরমিযীঃ )—।🕋🌺\n\n┗ ━━┅━━━┅━━┅━━━┅━━ ┛",
"┏ ━━┅━━━┅━━┅━━━┅━━ ┓\n\n●═🌺🕋—। যে ব্যক্তি (পুরুষ) পায়ের টাখনুর নিচে \nকাপড় ঝুলিয়ে পরবে, সে জাহান্নামী। (সহীহ বুখারীঃ, মিশকাত, হা/)—।🕋🌺\n\n┗ ━━┅━━━┅━━┅━━━┅━━ ┛" 
 ];
;
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/d3QDPNZJ/412b962177524045a2eb43c0f9cfa8b6.jpg",
"https://i.postimg.cc/XJHGSrn6/ramadan-ninth-month-islamic-calendar-observed-by-muslims-around-world-as-month-fasting-prayer-reperc.jpg",
"https://i.postimg.cc/mhWWRHpQ/received-1202913210365646.jpg",
"https://i.postimg.cc/yxZCwPj1/received-179416495132916.jpg",
"https://i.postimg.cc/nh4xgMJR/ornamental-arabic-lantern-with-burning-candle-glowing-night-muslim-holy-month-ramadan-kareem-1034-24.jpg",
"https://i.postimg.cc/8c2N53cf/received-2183981171798286.jpg",
"https://i.postimg.cc/6QWwyCWc/received-259795433354586.jpg",
"https://i.postimg.cc/JzWRC9S9/received-317063074088232.jpg",
"https://i.postimg.cc/5tsJvjjV/received-583147497311518.jpg",
"https://i.postimg.cc/7ZMwHKkb/received-598373762409967.jpg",
"https://i.postimg.cc/05SPq6kG/a360f6b18ac94e86a7ba87a884a7d295.jpg",
"https://i.postimg.cc/DZDKjDqp/received-659497149400143.jpg",
"https://i.postimg.cc/WpC2XD8p/received-659559285696847.jpg",
"https://i.postimg.cc/4NcXMJ26/received-819496329472643.jpg",
];
   var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache55.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache55.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache55.jpg")).on("close",() => callback());
   };
