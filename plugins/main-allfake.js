import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

var handler = m => m
handler.all = async function (m) { 
global.canalIdM = [
  "120363404434164076@newsletter",
  "120363403726798403@newsletter",
  "120363425526390282@newsletter",
  "120363404434164076@newsletter"
]

global.canalNombreM = [
  "Bolivar Bot", 
  "Bolivar Bot 📢 ┆ Channel-Info",
  "Chistes - videos y mas 💭",
  "BolivarBot"
]

global.channelRD = await getRandomChannel()

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

global.nombre = m.pushName || 'User-MD'
global.packsticker = ``

global.iconos = [
  'https://cdn.russellxz.click/a015cecd.jpg',
  'https://cdn.russellxz.click/d112a400.jpg',
  'https://cdn.russellxz.click/40fb346f.jpg',
  'https://cdn.russellxz.click/d8cefbd9.jpg',
  'https://cdn.russellxz.click/1d6aa06f.jpg',
  'https://cdn.russellxz.click/8df6a43c.jpg',
  'https://cdn.russellxz.click/0d27e894.jpg',
  'https://cdn.russellxz.click/98e7e0df.jpg',
  'https://cdn.russellxz.click/b262e815.jpg',
  'https://cdn.russellxz.click/f46d62d3.jpg',
  'https://cdn.russellxz.click/36caddb4.jpg'
]
global.icono = global.iconos[Math.floor(Math.random() * global.iconos.length)]

global.wm = 'Bolivar'
global.wm3 = '⫹⫺ 𝙈𝙪𝙡𝙩𝙞-𝘿𝙚𝙫𝙞𝙘𝙚 💻'
global.author = 'BolivarBot'
global.dev = 'Owner Bolivar'
global.textbot = 'BolivarBot'
global.etiqueta = 'Bolivar'
global.gt = 'Creado por guillermo 🤖'
global.me = 'Bolivar'

global.fkontak = { 
  key: { 
    participants: "0@s.whatsapp.net", 
    remoteJid: "status@broadcast", 
    fromMe: false, 
    id: "Halo" 
  }, 
  message: { 
    contactMessage: { 
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
    }
  }, 
  participant: "0@s.whatsapp.net" 
}

global.rcanal = { 
  contextInfo: { 
    isForwarded: true, 
    forwardedNewsletterMessageInfo: { 
      newsletterJid: channelRD.id, 
      serverMessageId: '', 
      newsletterName: channelRD.name 
    }, 
    externalAdReply: { 
      title: global.botname, 
      body: global.dev, 
      mediaUrl: null, 
      description: null, 
      previewType: "PHOTO", 
      thumbnailUrl: global.icono,
      sourceUrl: '', 
      mediaType: 1, 
      renderLargerThumbnail: false 
    }, 
    mentionedJid: null 
  }
}

global.listo = '*Aqui tiene*'
global.moneda = 'Yenes'
global.prefix = ['.', '!', '/', '#', '%']
}

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * global.canalIdM.length)
let id = global.canalIdM[randomIndex]
let name = global.canalNombreM[randomIndex]
return { id, name }
}

if (!Array.prototype.getRandom) {
Array.prototype.getRandom = function() {
return this[Math.floor(Math.random() * this.length)]
}
}