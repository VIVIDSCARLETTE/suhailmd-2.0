const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_17_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NixcbiAgICAgICAgODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDM1LFxuICAgICAgICA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDkwLFxuICAgICAgICA2MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyLFxuICAgICAgICA5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNixcbiAgICAgICAgMTkxLFxuICAgICAgICA0MixcbiAgICAgICAgMjM2LFxuICAgICAgICA0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDgyLFxuICAgICAgICA1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0LFxuICAgICAgICA3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMmgwVzBnTEtaUDZXMnVTallWOVVqMERwVVVpV2htbVlyOEs2UGxhS09mND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTYxMjQwODk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwNEM0RDM1RTJEODE5N0FDMkZCQzZFNjFCRjQ0MEE4OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE1Nzk0NzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVWZRV2FDTXhRemVGWlBWTmlQR09kUVwiLFxuICBcInBob25lSWRcIjogXCI1M2E4MTliNS02ODI2LTQ4MGItODA5OC1jNTA3YmE4MzdlYThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMTQ1LFxuICAgICAgMTI5LFxuICAgICAgNjMsXG4gICAgICAxNjksXG4gICAgICAyNDMsXG4gICAgICAyNSxcbiAgICAgIDEzMSxcbiAgICAgIDE2MixcbiAgICAgIDE1MyxcbiAgICAgIDExMSxcbiAgICAgIDQ1LFxuICAgICAgMTAyLFxuICAgICAgMTI5LFxuICAgICAgMzEsXG4gICAgICA5NyxcbiAgICAgIDY4LFxuICAgICAgMjI1LFxuICAgICAgMjE4LFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICAxMjUsXG4gICAgICA1LFxuICAgICAgMTkwLFxuICAgICAgMjIwLFxuICAgICAgNCxcbiAgICAgIDE5LFxuICAgICAgMTk3LFxuICAgICAgMjQ1LFxuICAgICAgMTY5LFxuICAgICAgMTA4LFxuICAgICAgODQsXG4gICAgICAxOTIsXG4gICAgICAxOTUsXG4gICAgICA0MCxcbiAgICAgIDE0MyxcbiAgICAgIDIwMixcbiAgICAgIDQ1LFxuICAgICAgMTE2LFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFZOEVMNUE1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYxMjQwODk5Ojg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiREFOTlkgWFwiLFxuICAgIFwibGlkXCI6IFwiMTc3MDE3NTEzMzEyNDcxOjg0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p5NThxa0ZFTW1jMTdrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQndpNXFkbTdCRTYvQjRrckdxOCtxTWtwNUNtQ0xPS3o3Tmc5RmJNQjZodz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4M1Mycmk5SXhSZ21JbGJEVzJrZDQvMFY5SXoyWS9pTngvWituMmp0UzlIU0w5R1dMNEpJblY5K2VzeFc3azdOMEVFK0dTZHg2cnhUcFlMak8wWXNCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrYndKbGhXZ0NmWkRuZ2ZleWs1d0dTL0VES2pXL0pvdGFOcUJqZmprRmFDbmNJWFpOVkJOSTdPcFZjdDFrZzhSR1VXdW1MY05ETmZoY08weE45OWhpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYxMjQwODk5Ojg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTU3OTQ2OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUU1QVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTVBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMTkwT2dlRld4WStCQkxkb1FTR2ZXZjhacUR1K3ZMYzN2bGoybk5qMFhUOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDMwMDM1NjEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEzNDQzNDY1NDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
