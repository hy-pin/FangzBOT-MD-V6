let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} DANA ${htka}

HayðŸ‘‹, ingin melanjutkan pembayaran?

💌 *Pembayaran*
💳 Via: Dana
📞 Nomor: 08895377665
👤 A/n: pino
📦 Mitra: Pino BOT
💰 Metode pembayaran: Online ( ~Cod~ )

📣 *Beli*

✏️ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


❗KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'JOIN', url: 'https://chat.whatsapp.com/CmlrDN2xl0lCl4eBHLe6IJ'}},
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^dana$/i
handler.private = true

export default handler
