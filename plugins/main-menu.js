import { existsSync } from 'fs'
import { join } from 'path'
import { prepareWAMessageMedia, generateWAMessageFromContent, proto } from '@whiskeysockets/baileys'
import { performance } from 'perf_hooks'

let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let help = Object.values(global.plugins)
      .filter(p => !p.disabled)
      .map(p => ({
        help: Array.isArray(p.help) ? p.help : p.help ? [p.help] : [],
        tags: Array.isArray(p.tags) ? p.tags : p.tags ? [p.tags] : [],
      }))

    // Calcular ping
    let old = performance.now()
    let neww = performance.now()
    let speed = (neww - old).toFixed(4)

    let menuText = `*Hola 👋*, +${m.sender.split('@')[0]}.

 ִ \`Información del Bot` 
   
> 「⚔」𖡺 \`bot :\` *BolivarBot*
> 「⚔」𖡺 \`Ping :\` *${speed} ms*
> 「⚔」𖡺 \`Uptime :\` *${await getUptime()}*
> 「⚔」𖡺 \`RAM :\` *${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}* MB
> 「⚔」𖡺 \`Plugins :\` *${help.length}*
> 「⚔」𖡺 \`Owner :\` *@leoDev*
> 「⚔」𖡺 \`Mode :\` *${global.opts['self'] ? 'Private' : 'Public'}*

`

    const categories = {
  'BOLIVAR-INFO': ['main', 'info'],
  'INTELIGENCIA': ['bots', 'ia'],
  'JUEGOS': ['game', 'gacha'],
  'ECONOMÍA': ['economy', 'rpgnk'],
  'GRUPOS': ['group'],
  'DESCARGAS': ['downloader'],
  'MULTIMEDIA': ['sticker', 'audio', 'anime'],
  'TOOLS': ['tools', 'advanced'],
  'BÚSQUEDA': ['search', 'buscador'],
  'PREM': ['fun', 'premium', 'social', 'custom'],
  'OWNER': ['owner', 'creador'],
}

    for (let catName in categories) {
      let catTags = categories[catName]
      let comandos = help.filter(menu => menu.tags.some(tag => catTags.includes(tag)))

      if (comandos.length) {
        menuText += `> \`${catName}\` «\n`
        let uniqueCommands = [...new Set(comandos.flatMap(menu => menu.help))]
        for (let cmd of uniqueCommands) {
          menuText += `> `\`\`${_p}${cmd}\`\`\`\n`
        }
        menuText += `> \n\n`
      }
    }

    menuText += `> *BolivarBot*`

    await conn.sendMessage(m.chat, { react: { text: '🚀, key: m.key } })

    const localImagePath = join(process.cwd(), 'src', 'menu.jpg')

    const nativeButtons = [
      {
        name: 'cta_url',
        buttonParamsJson: JSON.stringify({ 
          display_text: '☃️ ᴄᴀɴᴀʟ', 
          url: 'https://whatsapp.com/channel/0029VbBvZH5LNSa4ovSSbQ2N' 
        })
      },
      {
        name: 'cta_url',
        buttonParamsJson: JSON.stringify({ 
          display_text: 'GitHub del Bot', 
          url: 'https://github.com/ByTraxnox-X2/BolivarBot' 
        })
      }
    ]

    let header
    if (existsSync(localImagePath)) {
      const media = await prepareWAMessageMedia({ image: { url: localImagePath } }, { upload: conn.waUploadToServer })
      header = proto.Message.InteractiveMessage.Header.fromObject({
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      })
    } else {
      header = proto.Message.InteractiveMessage.Header.fromObject({ hasMediaAttachment: false })
    }

    // === Crear mensaje interactivo ===
    const interactiveMessage = proto.Message.InteractiveMessage.fromObject({
      body: proto.Message.InteractiveMessage.Body.fromObject({ text: menuText }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: '' }),
      header,
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: nativeButtons
      })
    })

    const fkontak = await makeFkontak()
    const msg = generateWAMessageFromContent(m.chat, { interactiveMessage }, { 
      userJid: conn.user.jid, 
      quoted: fkontak 
    })
    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

  } catch (e) {
    console.error('❌ Error en el menú:', e)
    await conn.sendMessage(m.chat, {
      text: `⚡ *MENÚ BÁSICO*\n\n• ${_p}menu - Menú principal\n• ${_p}ping - Estado del bot\n• ${_p}prefijos - Ver prefijos\n\n⚠️ *Error:* ${e.message}`
    }, { quoted: m })
  }
}

// Quoted especial con mini-thumbnail
async function makeFkontak() {
  try {
    const res = await fetch('https://cdn.russellxz.click/64bba973.jpg')
    const thumb2 = Buffer.from(await res.arrayBuffer())
    return {
      key: { participants: '0@s.whatsapp.net', remoteJid: 'status@broadcast', fromMe: false, id: 'Halo' },
      message: { locationMessage: { name: 'Menu Actualizado', jpegThumbnail: thumb2 } },
      participant: '0@s.whatsapp.net'
    }
  } catch {
    return undefined
  }
}

// Función para obtener uptime
async function getUptime() {
  let totalSeconds = process.uptime()
  let hours = Math.floor(totalSeconds / 3600)
  let minutes = Math.floor((totalSeconds % 3600) / 60)
  let seconds = Math.floor(totalSeconds % 60)
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

handler.help = ['menu','help']
handler.tags = ['main']
handler.command = ['itsuki', 'menu', 'help']

export default handler
