const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349114929581";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_03_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDg5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg0LFxuICAgICAgICA3NixcbiAgICAgICAgMTEzLFxuICAgICAgICA0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjExLFxuICAgICAgICA1MyxcbiAgICAgICAgOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwLFxuICAgICAgICA4MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY5LFxuICAgICAgICA0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDkzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDkzLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDgzLFxuICAgICAgICA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDc2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMTY2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3LFxuICAgICAgICA3NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDc5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTczLFxuICAgICAgICA1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgODAsXG4gICAgICAgIDgxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOTV6ai80d0dkdWJnSndURXQrdzk1dm5FbENyZ2xFYUxoblpPdWVzT201OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQk9MQjM4VmJRbTZwcC1MQnZIZHBNUVwiLFxuICBcInBob25lSWRcIjogXCJiMzcwODBjMC0zYTM1LTQ3NTItODM1My0xMDNlMGJjMWZmN2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICA2MyxcbiAgICAgIDIwLFxuICAgICAgMjQxLFxuICAgICAgMTE4LFxuICAgICAgMzUsXG4gICAgICAxNDUsXG4gICAgICAxODcsXG4gICAgICAyMjcsXG4gICAgICAyMSxcbiAgICAgIDExNixcbiAgICAgIDIxLFxuICAgICAgMTI3LFxuICAgICAgMTMwLFxuICAgICAgMTE3LFxuICAgICAgMTk4LFxuICAgICAgMTIsXG4gICAgICAxMDgsXG4gICAgICAyMTcsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY3LFxuICAgICAgODMsXG4gICAgICAxNDMsXG4gICAgICAxMTYsXG4gICAgICAyMDIsXG4gICAgICAxMTYsXG4gICAgICAxODIsXG4gICAgICA4MixcbiAgICAgIDEwLFxuICAgICAgMjM5LFxuICAgICAgMTg0LFxuICAgICAgMjEsXG4gICAgICA0NixcbiAgICAgIDIxOCxcbiAgICAgIDE5MyxcbiAgICAgIDg0LFxuICAgICAgMTIwLFxuICAgICAgMTI1LFxuICAgICAgMjM4LFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjNFNTJER1BcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTQ5Mjk1ODE6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjgwNDA2NDg1NDg1ODI6ODlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3pyNXJZREVQdVZ0TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuWVJ4L2U1RjVLbTJldzkyMFN6RlAxQktsR2c3b0lGcjBxNkZlRkU4N0VvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhYUUhDK2d0TW52L0Fwc2pUZW8zOUtFRnFXUVFjZndTVTlDMTIyQ1UwVEZIb2J1bzRIRWtHNlR4cURWdENSOVk5d3hoaVZHVSs1djl1NXVNb0ptRkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVaMGFtNXQvVzhPK0VGaEN2RW9neUZxNXhza0RuQk9sbnY1YWRzRklqMnN1ZXRlbk9sYVEwY2gzQlRUc1VRbUtwbGJtYkF6U3dpQlFOYnhPUTJWMGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTQ5Mjk1ODE6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUxOTQyM1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "⚡",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "☠︎︎Shalli-nosky☠︎︎",
  packname: process.env.PACK_NAME || "☠︎︎Shalli-nosky☠︎︎",
  botname : process.env.BOT_NAME  || "☠︎︎Shalli-nosky☠︎︎",
  ownername:process.env.OWNER_NAME|| "☠︎︎Shalli-nosky☠︎︎",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
