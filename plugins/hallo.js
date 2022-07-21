let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *ADA APA* ${htka}

              XYRA BOT
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'JOIN', url: 'https://chat.whatsapp.com/CmlrDN2xl0lCl4eBHLe6IJ'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.customPrefix = /^(woi|hallo|p)$/i
handler.command = new RegExp

export default handler
