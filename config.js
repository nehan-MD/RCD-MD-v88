//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUtCREVIMHBqbkQrOUszakV4Q2lYZGR2NDd6cG12Q2FNeW9HZ0tXcEtFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzJGUExCNDZpNWdoY3d3TVJWTEtvSUFBUDBHWGRkckN2cFFoUkdxK1poUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQkpKaVc0NUp5WkhFaVJBbzJTQ3BzeVJRVlZXQzVMTW0xZ0lhTUhTVFhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZaVVFVmxLZnZlOVNvK1AvSnZybENib3R3TExVT3Q1SlhwajJWQUR2K0NRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtHWDhITjdneUtkaUFKVndWVU1tOFBEaE5tUlIzK3greWlobk1UZ0twa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPR3dVOXRWeUNZdXVzZ3A0MVdNY1UzbnN0SUVhQUhxMWhpMWxKOW85MGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0FlcnhLWWlxdnRIMUxVSDgvNTV4RHp1akJQQXdpMHdUM2tVY3Ficm9YMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzA0emdxTjBnaklONERBcVV1SjNoOE5hVFdHKzNhQXJFNExrT1VCc3Fuaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJJYWNGSk9rWjRoMHhmR3VrQ1lYeUlFK3Rtd2FQK1dIV1J0b1RKYzZIRDc3YWJUdEs1RGswVGFNdzZjMFZmS2VGdVdCUFRUOHFxWlFrekFxK250bGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcsImFkdlNlY3JldEtleSI6IlB6ZjI4MjdFUzZKNGpPQlU0OEl0aFJ2NmJrSVZRS2pZcDB4TkEzUE1HMVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRIMDEwaGk4UzEtWUIxcmRMc0hwU1EiLCJwaG9uZUlkIjoiMzVjNzg2ZDgtNjI2ZC00ZWEyLTlkMmQtZDViYzIyNDA5ODU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN0bzZWUDV0UUpSNHBRVEF4QjU0bGp3WEZsND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2NVNyRG15STc4dTI2V2U3eDFSR3Z6TDA5Z2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWlJDWVkxN1oiLCJtZSI6eyJpZCI6Ijk0NzQwNDk2NzgyOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2al/Cdmo7wnZqR8J2aivCdmpcuLiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGlFbnZRREVLYUVxTFVHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid29SbHRNRjdVVUNQK1ZYU3QvY3ROOVlWb1AreWJWRitOZlJ0YTdmd0NYYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNmNqRkxoT2lMR2ZBS3ZxRTZDSmVUaUZjUlc2d20rL1pKWjREMTJYRWRwOTBza2lxeU01dTU0VzlDZDUvY1hza2JUNjJTQnZaeCt4K3ZzckpEbEtwQUE9PSIsImRldmljZVNpZ25hdHVyZSI6Inc3Y1dVOUF2UkgxZ282TUdhZFF1TWROSEMwUkxpdTNsSE9hRnpjanBSQjBxQm9zR0Znd1ppZEN2TlB1N1R3QVpTNU0xczZhV2hSQ05WTisxaGFMcGhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDA0OTY3ODI6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjS0VaYlRCZTFGQWovbFYwcmYzTFRmV0ZhRC9zbTFSZmpYMGJXdTM4QWwzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNDE3NzE0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdjciJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
