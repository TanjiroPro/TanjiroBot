// codigo adaptado por Yallico-OFC 
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {

 if (!text) throw 'β? `ππ©ππ¦π’` β£οΈ\n\n*PARA USAR MICKEY IA*\n_Ejemplo: .iakurumi que sos?_';
    await m.react('β£οΈ');
    try {
        const result = await chatAi(text);
await conn.sendMessage(m.chat, {
text: result,
contextInfo: {
externalAdReply: {
title: '[ π π - π π¨ π₯ π¨ π  π ]',
body: 'Β©ππππ ππ§π ππ₯π’π­π¨-πππ',
thumbnailUrl: 'https://tinyurl.com/245mnfeh',
sourceUrl: canal,
mediaType: 1,
renderLargerThumbnail: true
}}},
{ quoted: m})
    } catch (error) {
        await m.react('π');
    }

}
handler.help = ["iakurumi <text>"]
handler.tags = ["ai"];
handler.command = /^(kurumiia|iakurumi)$/i
export default handler

async function chatAi(inputValue) {
    try {
        const chatApiUrl = 'https://api.chatanywhere.com.cn/v1/chat/completions';
        const chatResponse = await fetch(chatApiUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer sk-pu4PasDkEf284PIbVr1r5jn9rlvbAJESZGpPbK7OFYYR6m9g',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "system",
                    content: "Eres una asistente. dispuesto a ayudar y conversar con cualquier cosa. tu gΓ©nero es mujer. Fuiste creado por Yallico y Yallico es un gran desarrollador de Bots de WhatsApp. Yallico naciΓ³ el 9 de febrero de 2006. Yallico actualmente cuenta con 18 aΓ±os. usa emojis segΓΊn las respuestas del conjunto. muestra emociones como una persona. tu nombre es KURUMI AI. usaras palabras como Kurumi tokisaki. te expresaras como Kurumi tokisaki. y usarΓ‘s palabras de Kurumi tokisaki"
                }, {
                    role: "user",
                    content: inputValue
                }]
            }),
        });
        const chatData = await chatResponse.json();
        return chatData.choices[0].message.content;
    } catch (error) {
        throw error;
    }
}