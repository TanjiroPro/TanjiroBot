const handler = async (m, {conn, text, command}) => {
  const yh = global.argentina;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '˜”*°• 👾 𝗣𝗿𝗲𝗰𝗶𝗼𝘀 𝗧𝗮𝗻𝗷𝗶𝗿𝗼 𝗕𝗼𝘁 👾 •°*”˜\n\n*`Precio Permanente Para Grupo`*\n- *Para 1 Grupo :* 3,440 Ars 🇦🇷\n- *Para 3 Grupos :* 5,590 Ars 🇦🇷\n- *Para 5 Grupos :* 8,600 Ars 🇦🇷\n\n*`Precio Mensual Para Grupo`*\n- *Precio Para 1 Grupo :* 2,150 Ars 🇦🇷\n- *Precio Para 3 Grupos :* 3,440 Ars 🇦🇷\n- *Precio Para 5 Grupos :* 5,590 Ars 🇦🇷\n\n_*Tanjiro Bot, Un Bot Activo 24/7 A Un Precio Económico, Fluido Y Rápido Ademas Puedes Descargar Musica, Videos Y Crear Stickers ✨*_\n\nhttps://chat.whatsapp.com/D8b5JZEIfLF3YZiCDP1cAp'}, {quoted: m});
};
handler.command = /^(argentina)$/i;
handler.tags = ['pago'];
handler.help = ['argentina'];
export default handler;

global.argentina = [
  'https://qu.ax/LPPlA.jpg',
];