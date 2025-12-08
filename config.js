import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'
import fs from 'fs'
import * as cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import { dirname } from 'path' 

global.__dirname = (url) => dirname(fileURLToPath(url));


//aquí los retirados👑🥀
global.retirado = [
['593','NO',true]
];

/*habrán comandos especiales para los retirados algo q los identifique | nota ustedes pondrán los coamndos y q solo funcione para los retirados*/

// Configuraciones principales
global.roowner = ['593994272885', '593997940406']
global.owner = [
   ['593994272885', 'Bolivar', true],
   ['593997940406', 'Guillermo', true],
   ];

global.mods = ['593997940406', '593994272885']
global.suittag = ['593997940406', '593994272885']
global.prems = ['593997940406', '593994272885']

// Información del bot 
global.libreria = 'Baileys'
global.baileys = 'V 6.7.9'
global.languaje = 'Español'
global.vs = '7.5.2'
global.vsJB = '5.0'
global.nameqr = 'Bolivar'
global.namebot = 'BolivarBot'
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.ItsukiJadibts = true
global.Choso = true
global.prefix = ['.', '!', '/' , '#', '%']
global.apikey = 'ItsukiNakanoIA'
global.botNumber = '593968632076'
// Números y settings globales para varios códigos
global.packname = '𝘽𝙤𝙡𝙞𝙫𝙖𝙧𝘽𝙤𝙩🤖'
global.botname = '𝘽𝙤𝙡𝙞𝙫𝙖𝙧𝘽𝙤𝙩 ❄️'
global.wm = '© Bolivar'
global.wm3 = '⫹⫺ 𝙈𝙪𝙡𝙩𝙞-𝘿𝙚𝙫𝙞𝙘𝙚 💻'
global.author = '𝘽𝙤𝙡𝙞𝙫𝙖𝙧'
global.dev = '𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙡𝙞𝙫𝙖𝙧'
global.textbot = '𝘽𝙤𝙡𝙞𝙫𝙖𝙧 | 𝘽𝙤𝙩'
global.etiqueta = '𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙡𝙞𝙫𝙖𝙧'
global.gt = '𝘾𝙧𝙚𝙖𝙙𝙤 𝙥𝙤𝙧 𝙗𝙤𝙡𝙞𝙫𝙖𝙧, 𝙪𝙣 𝙗𝙤𝙩 𝙢𝙪𝙮 𝙗𝙤𝙣𝙞𝙩𝙤 𝙮 𝙛𝙖𝙘𝙞𝙡 𝙙𝙚 𝙪𝙨𝙖𝙧 🤖'
global.me = '𝘽𝙤𝙡𝙞𝙫𝙖𝙧𝘽𝙤𝙩'
global.listo = '*Aqui tiene*'
global.moneda = 'Tienes'
global.multiplier = 69
global.maxwarn = 3
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

// Enlaces oficiales del bot
global.gp1 = '𝙽𝚘 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚋𝚕𝚎 𝚊𝚞𝚗'
global.comunidad1 = '𝙽𝚘 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚋𝚕𝚎 𝚊𝚞𝚗'
global.channel = '𝙽𝚘 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚋𝚕𝚎 𝚊𝚞𝚗'
global.channel2 = '𝙽𝚘 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚋𝚕𝚎 𝚊𝚞𝚗'
global.md = '𝙽𝚘 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚋𝚕𝚎 𝚊𝚞𝚗'
global.correo = '𝙽𝚘 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚋𝚕𝚎 𝚊𝚞𝚗'

// Apis para las descargas y más
global.APIs = {
  ryzen: 'https://api.ryzendesu.vip',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  delirius: 'https://delirius-apiofc.vercel.app',
  siputzx: 'https://api.siputzx.my.id', // usado como fallback para sugerencias IA
  mayapi: 'https://mayapi.ooguy.com'
}

global.APIKeys = {
  'https://api.xteam.xyz': 'YOUR_XTEAM_KEY',
  'https://api.lolhuman.xyz': 'API_KEY',
  'https://api.betabotz.eu.org': 'API_KEY',
  'https://mayapi.ooguy.com': 'may-f53d1d49'
}

// Endpoints de IA
global.SIPUTZX_AI = {
  base: global.APIs?.siputzx || 'https://api.siputzx.my.id',
  bardPath: '/api/ai/bard',
  queryParam: 'query',
  headers: { accept: '*/*' }
}


global.chatDefaults = {
  isBanned: false,
  sAutoresponder: '',
  welcome: true,
  autolevelup: false,
  autoAceptar: false,
  autosticker: false,
  autoRechazar: false,
  autoresponder: false,
  detect: true,
  antiBot: false,
  antiBot2: false,
  modoadmin: false,
  antiLink: true,
  antiImg: false,
  reaction: false,
  nsfw: false,
  antifake: false,
  delete: false,
  expired: 0,
  antiLag: false,
  per: [],
  antitoxic: false
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  try { import(pathToFileURL(file).href + `?update=${Date.now()}`) } catch {}
})

// Configuraciones finales
export default {
  prefix: global.prefix,
  owner: global.owner,
  sessionDirName: global.sessions,
  sessionName: global.sessions,
  botNumber: global.botNumber,
  chatDefaults: global.chatDefaults
}
