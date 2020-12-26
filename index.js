const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const katasenja = if ('katasenja') :
const kastun = ["Hampa itu seperti langkah tak berjejak, senja tapi tak jingga, cinta tapi tak dianggap","Tangannya menjadi pengganti tanganku untuk menuntunmu' Pundaknya menjadi pengganti pundakku untukmu bersandar. Biarlah gemercik gerimis, carik senja, secangkir teh, dan bait lagu menjadi penggantimu.","Kenapa aku suka senja? Karena negeri ini kebanyakan pagi, kekurangan senja, kebanyakan gairah, kurang perenungan.","Senja tak pernah salah hanya kenangan yang membuatnya basah.","Di bawah alismu hujan berteduh. Di merah matamu senja berlabuh.","Aku ingin kamu saja yang menemaniku membuka pagi hingga melepas senja, menenangkan malam dan membagi cerita.","Senja terlalu buru-buru berlalu, padahal aku baru hendak mewarnai langit untukmu dengan warna-warna rinduku yang selalu biru.","Melukiskanmu saat senja. Memanggil namamu ke ujung dunia. Tiada yang lebih pilu. Tiada yang menjawabku. Selain hatiku dan ombak berderu.","Ada yang tak tenggelam ketika senja datang: Rasa.","Senja yang retak. Kapal-kapal berlayar membawa kenangan. Airmatamu menjelma puisi paling duri, paling angin.","Tuhan, bersama tenggelamnya matahari senja ini,redakanlah kekecewaan dan kemarahan di hati ini. Sabarkanlah aku. Aamiin.","Beberapa penyair sibuk bersembunyi di balik senja, hujan, gemintang, ufuk, gunung, pantai, jingga, lembayung, kopi, renjana, juga berbagai kata romantis lainnya, untuk kemudian lupa pada fakta bahwa dunia sedang tidak baik-baik saja. Hingga akhirnya kata-kata hanyalah hiasan semata.","Maka siluetkan tubuhmu berlatar senja, karena tak sanggup kulihat airmatamu, kekasih.","Semerbak rindu kuasai udara panas ini, senja pun ikut berdebar menanti berita mu tentang perang dan cinta.","Aku hanyalah kunang-kunang dan engkau hanyalah senja. Saat gelap kita berbagi. Saat gelap kita abadi.","Disetiap senja, aku ingin melukis langit dengan warna mata kita: warna merah kerinduan.","Jika pena berganti rupa menjadi daun senja, biarlah dia mengering, lalu tersapu angin, sendiri dan dibiarkan oleh sepi.","Kupetik pipinya yang ranum,kuminum dukanya yang belum: Kekasihku, senja dan sendu telah diawetkan dalam kristal matamu.","Terkadang senja mengingatkan pada rumah, pada orang-orang yang membuat hati kita rindu untuk pulang.","Jika kamu merindukan seseorang, tataplah matahari sore. Kirimkan pesan rindumu untuknya lewat senja.","Uang, berilah aku rumah yang murah saja,yang cukup nyaman buat berteduh senja-senjaku, yang jendelanya hijau menganga seperti jendela mataku.","Kita hanyalah setitik senja yang kadang indah lalu surut dengan bermuram durja, dunia bagi masa kecil kita hanyalah mainan fana yang terus membumbung, mengitari angkasa dan membuat kita terlena akan keindahannya…","Dulu, pada suatu ketika, senja pernah indah, seindah janji-janji yang berujung menjadi sumpah serapah.","Aku melintasi kehidupan dan kala. Aku berlayar menembus senja. Kuberanikan diri menulis untuk mengabadikan momen hidup dalam lembaran kertas.","Di tengah angin senja yang mendesak, aku merasakan kekuasaan waktu, yang tanpa pandang bulu mengubah segala-galanya.","Gelisah, menampar tak basah pada senja yang bergeromis. Begitu keringkah ladang pertautan kita hingga tunas harapan enggan tumbuh lagi.","Setiap hari ada senja, tapi tidak setiap senja adalah senja keemasan, dan setiap senja keemasan itu tidaklah selalu sama.","Biarlah kunikmati kepedihan ini. Karena sesungguhnya perasaan perih disebabkan cinta yang terkulai sebelum berbunga, adalah sama sendunya dengan memeram cina itu sendiri selama bertahun-tahun. Bagai senja yang tak kunjung malam.","Begini rasanya harihari di linimasa. Wajahmu; 140 huruf yang terus menguntitku tanpa jarak hingga senja lesap dalam kita.","Percintaan itu fajar perkawinan. Perkawinan itu senja percintaan.","Usia senja bukanlah hal yang membuat sedih. Itu bisa jadi hal yang disyukuri jika kita menyelesaikan semua perkejaan kita.","Hidup seperti ini. Aku bisa merasakan senja yang bercampur bau tanah basah sepeninggal hujan."]
			        let katsen = kastun[Math.floor(Math.random() * kastun.length)]
			           client.reply(from, katsen, 'senja')
			        break
prefix = '.'
blocked = []

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})
	client.on('credentials-updated', () => {
		fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Halo @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]}👋`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: '⌛ Sedang di Prosess ⌛',
				success: '✔️ Berhasil ✔️',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌ Perintah ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '❌ Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '❌ Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					admin: '❌ Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: '❌ Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["6282137409151@s.whatsapp.net"] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
				case 'help':
				case 'menu':
					client.sendMessage(from, help(prefix), text)
					break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
				case 'stiker':
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								client.sendMessage(from, buff, sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					
				case 'gtts':
					if (args.length < 1) return client.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
				case 'meme':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
				case 'loli':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Citai Lolimu'})
					})
					break
				case 'nsfwloli':
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break
				case 'hilih':
					if (args.length < 1) return reply('Teksnya mana um?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'yt2mp3':
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytsearch':
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/ytsearch?q=${body.slice(10)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'tiktok':
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'tiktokstalk':
					try {
						if (args.length < 1) return client.sendMessage(from, 'Usernamenya mana um?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Kemungkinan username tidak valid')
					}
					break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('Yang mau di tulis apaan?')
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/nulis?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
					break
				case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa um?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana um?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'tstiker':
				case 'tsticker':
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
     
				case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'clearall':
					if (!isOwner) return reply('Lah kamu owner aku bukan ?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
				case 'bc':
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `* GUSTIAN BROADCAST * \n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `* GUSTIAN BROADCAST *\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
                          }
					break
                         if (text.includes("setname")){
                         const teks = text.replace(/ setname /, "")
                         let nama = `${teks}`;
                         let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
                     conn.groupUpdateSubject(idgrup, nama);
                         conn.sendMessage(id, 'Succes Change Name Group' ,MessageType.text, { quoted: m } );
                  }
               if (text.includes("setdesc")){
                 const teks = text.replace(/setdesc /, "")
              let desk = `${teks}`;
              let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
              conn.groupUpdateDescription(idgrup, desk)
           conn.sendMessage(id, 'Succes Change Description Group' ,MessageType.text, { quoted: m } );
                            }
            else if (text == 'opengc'){
               let hasil = `${id.split("@s.whatsapp.net")[0]}`;
               conn.groupSettingChange (hasil, GroupSettingChange.messageSend, false);
          conn.sendMessage(id, 'SUCCES, GRUP TELAH DIBUKA' ,MessageType.text, { quoted: m } );
                            }
          else if (text == 'closegc'){
               let hasil = `${id.split("@s.whatsapp.net")[0]}`;
                  conn.groupSettingChange (hasil, GroupSettingChange.messageSend, true);
              conn.sendMessage(id, 'SUCCES, GRUP TELAH DITUTUP' ,MessageType.text, { quoted: m } );
                             }
				case 'listadmins':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
           case 'setpp':
                 if(!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner!', id)
                 const isqwtimg1 = quotedMsg && quotedMsg.type === 'image'
			      if (isMedia && type == 'image' || isqwtimg1) {
				    const dataMedia = isqwtimg1 ? quotedMsg : message
				    const _mimetypee = dataMedia.mimetype
				     const mediaData = await decryptMedia(dataMedia, uaOverride)
				      const imageBase64 = `data:${_mimetypee};base64,${mediaData.toString('base64')}`
                      await client.setProfilePic(imageBase64)
                       await client.reply(from, 'Berhasil mengubah foto profile!', id)
                       }
                     break
      case 'clearall':
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const allChatz = await client.getAllChats()
            for (let dchat of allChatz) {
                await client.deleteChat(dchat.id)
            }
            client.reply(from, 'Succes clear all chat!', id)
            break
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
			        }
         case 'nulis':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *.nulis [teks]*', id)
            const nulis = encodeURIComponent(body.slice(7))
            client.reply(from, mess.wait, id)
            let urlnulis = `https://mhankbarbar.herokuapp.com/nulis?text=${nulis}&apiKey=${apiKey}`
            await fetch(urlnulis, {method: "GET"})
            .then(res => res.json())
            .then(async (json) => {
                await client.sendFileFromUrl(from, json.result, 'Nulis.jpg', 'Nih anjim', id)
            }).catch(e => client.reply(from, "Error: "+ e));
                     break
      case 'katasenja':
		   const kastun = ["Hampa itu seperti langkah tak berjejak, senja tapi tak jingga, cinta tapi tak dianggap","Tangannya menjadi pengganti tanganku untuk menuntunmu' Pundaknya menjadi pengganti pundakku untukmu bersandar. Biarlah gemercik gerimis, carik senja, secangkir teh, dan bait lagu menjadi penggantimu.","Kenapa aku suka senja? Karena negeri ini kebanyakan pagi, kekurangan senja, kebanyakan gairah, kurang perenungan.","Senja tak pernah salah hanya kenangan yang membuatnya basah.","Di bawah alismu hujan berteduh. Di merah matamu senja berlabuh.","Aku ingin kamu saja yang menemaniku membuka pagi hingga melepas senja, menenangkan malam dan membagi cerita.","Senja terlalu buru-buru berlalu, padahal aku baru hendak mewarnai langit untukmu dengan warna-warna rinduku yang selalu biru.","Melukiskanmu saat senja. Memanggil namamu ke ujung dunia. Tiada yang lebih pilu. Tiada yang menjawabku. Selain hatiku dan ombak berderu.","Ada yang tak tenggelam ketika senja datang: Rasa.","Senja yang retak. Kapal-kapal berlayar membawa kenangan. Airmatamu menjelma puisi paling duri, paling angin.","Tuhan, bersama tenggelamnya matahari senja ini,redakanlah kekecewaan dan kemarahan di hati ini. Sabarkanlah aku. Aamiin.","Beberapa penyair sibuk bersembunyi di balik senja, hujan, gemintang, ufuk, gunung, pantai, jingga, lembayung, kopi, renjana, juga berbagai kata romantis lainnya, untuk kemudian lupa pada fakta bahwa dunia sedang tidak baik-baik saja. Hingga akhirnya kata-kata hanyalah hiasan semata.","Maka siluetkan tubuhmu berlatar senja, karena tak sanggup kulihat airmatamu, kekasih.","Semerbak rindu kuasai udara panas ini, senja pun ikut berdebar menanti berita mu tentang perang dan cinta.","Aku hanyalah kunang-kunang dan engkau hanyalah senja. Saat gelap kita berbagi. Saat gelap kita abadi.","Disetiap senja, aku ingin melukis langit dengan warna mata kita: warna merah kerinduan.","Jika pena berganti rupa menjadi daun senja, biarlah dia mengering, lalu tersapu angin, sendiri dan dibiarkan oleh sepi.","Kupetik pipinya yang ranum,kuminum dukanya yang belum: Kekasihku, senja dan sendu telah diawetkan dalam kristal matamu.","Terkadang senja mengingatkan pada rumah, pada orang-orang yang membuat hati kita rindu untuk pulang.","Jika kamu merindukan seseorang, tataplah matahari sore. Kirimkan pesan rindumu untuknya lewat senja.","Uang, berilah aku rumah yang murah saja,yang cukup nyaman buat berteduh senja-senjaku, yang jendelanya hijau menganga seperti jendela mataku.","Kita hanyalah setitik senja yang kadang indah lalu surut dengan bermuram durja, dunia bagi masa kecil kita hanyalah mainan fana yang terus membumbung, mengitari angkasa dan membuat kita terlena akan keindahannya…","Dulu, pada suatu ketika, senja pernah indah, seindah janji-janji yang berujung menjadi sumpah serapah.","Aku melintasi kehidupan dan kala. Aku berlayar menembus senja. Kuberanikan diri menulis untuk mengabadikan momen hidup dalam lembaran kertas.","Di tengah angin senja yang mendesak, aku merasakan kekuasaan waktu, yang tanpa pandang bulu mengubah segala-galanya.","Gelisah, menampar tak basah pada senja yang bergeromis. Begitu keringkah ladang pertautan kita hingga tunas harapan enggan tumbuh lagi.","Setiap hari ada senja, tapi tidak setiap senja adalah senja keemasan, dan setiap senja keemasan itu tidaklah selalu sama.","Biarlah kunikmati kepedihan ini. Karena sesungguhnya perasaan perih disebabkan cinta yang terkulai sebelum berbunga, adalah sama sendunya dengan memeram cina itu sendiri selama bertahun-tahun. Bagai senja yang tak kunjung malam.","Begini rasanya harihari di linimasa. Wajahmu; 140 huruf yang terus menguntitku tanpa jarak hingga senja lesap dalam kita.","Percintaan itu fajar perkawinan. Perkawinan itu senja percintaan.","Usia senja bukanlah hal yang membuat sedih. Itu bisa jadi hal yang disyukuri jika kita menyelesaikan semua perkejaan kita.","Hidup seperti ini. Aku bisa merasakan senja yang bercampur bau tanah basah sepeninggal hujan."]
			        let katsen = kastun[Math.floor(Math.random() * kastun.length)]
			           client.reply(from, katsen, 'senja')
			        break
        case 'aesthetic':
           const aestetic = ["http://wa-botstiker.my.id/images/aesthetic/aachal-6geVJeZJMg8-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/abyan-athif-BCx6t5pJwVw-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/alexander-popov-UUJzCuHUfYI-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/alexander-popov-kx1r9Fgqe7s-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/alexander-popov-lXaOSpd_UQw-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/anders-jilden-AkUR27wtaxs-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/andrea-boschini-5Ipk8IgNpPg-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/anmol-gupta-6Zpojuvyr-E-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/austin-chan-ukzHlkoz1IE-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/bantersnaps-1sUs8JbGx74-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/beasty--HxIhfS_dUk-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/daniel-tseng-W9kq9suABY4-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/estee-janssens-MUf7Ly04sOI-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/fabian-moller-gI7zgb80QWY-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/florian-klauer-mk7D-4UCfmg-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/ian-dooley-aaAllJ6bmac-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/karthikeya-gs-ZMM2sVJKd3A-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/kevin-laminto-hSeh-3ID830-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/larm-rmah-CB8tGaFoW38-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/matthew-ronder-seid-GWzCpqXPNDw-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/orfeas-green-G5A5ZNjS2tE-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/pari-karra-elK1z1WcsR8-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/sean-foley-qEWEz-U5p8Q-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/sean-foley-z4gWzj0p93c-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/tamara-gore-ldZrvy2SOEA-unsplash.jpg","http://wa-botstiker.my.id/images/aesthetic/vanessa-serpas-S4fYv5LQ4_A-unsplash.jpg"]
           let aes = aestetic[Math.floor(Math.random() * aestetic.length)]
           client.sendFileFromUrl(from, aes, 'aestetic.jpg', 'aesthetic')
           break
        case 'cecan3':
            const itemssh = ["https://i.pinimg.com/originals/74/b0/26/74b0268d2f4546996fa25afdafa980dc.jpg","https://i.pinimg.com/originals/f2/e9/1d/f2e91d2e9b671d6ebf59bacab216762f.jpg","https://i.pinimg.com/originals/80/72/79/807279a91face343ca53bffcec989cf4.jpg","https://i.pinimg.com/originals/a1/11/1a/a1111abf90379e4fa883fa3b8b5d643a.jpg","https://i.pinimg.com/originals/09/bd/57/09bd57e50174134865c250684e9ddda1.jpg","https://i.pinimg.com/originals/73/a2/3d/73a23de8b98399afd93eb723540bae80.jpg","https://i.pinimg.com/originals/72/ee/27/72ee2735bbdb1b1a4992efbf4094477e.png","https://i.pinimg.com/originals/cb/a2/89/cba28917d4f8d5b8de63ec89b66d1afe.jpg","https://i.pinimg.com/originals/98/02/64/9802648c9c057644f754434871fc4e2e.jpg","https://i.pinimg.com/originals/46/c2/7b/46c27b4b1d2ae4459f750afd0d8021b1.jpg","https://i.pinimg.com/originals/68/56/1e/68561ed7e1a97842030fb0f39edf9c80.jpg","https://i.pinimg.com/originals/73/3e/ed/733eed5f6d1b8a9f22e692b993e70491.jpg","https://i.pinimg.com/originals/f5/71/6a/f5716a30204f93707bd2c8fc91bc9462.jpg","https://i.pinimg.com/originals/16/52/1d/16521d9b7ea44aa0a28e360bb5f705d6.jpg","https://i.pinimg.com/originals/27/fe/e8/27fee89007af1025d601c87763f1dc1d.jpg","https://i.pinimg.com/originals/d8/12/4a/d8124a11bd20912b0402ff61130f8489.jpg","https://i.pinimg.com/originals/eb/44/81/eb4481101e8b8763428e8fbbad3a7bdb.jpg","https://i.pinimg.com/originals/a6/34/cf/a634cfa655269069439e9476780b46fe.jpg","https://i.pinimg.com/originals/b5/01/72/b50172848dd7e3465beb16adb0599684.jpg","https://i.pinimg.com/originals/54/42/36/54423601bc0c926de050fc2d0836be79.jpg","https://i.pinimg.com/originals/e2/3c/0c/e23c0c12244ad392c982d6267d262dd2.jpg","https://i.pinimg.com/originals/fa/10/ca/fa10ca99305c151b3ae8cad8a20794f2.jpg","https://i.pinimg.com/originals/b4/02/be/b402bed7c76e052f368dac1ec740210a.jpg","https://i.pinimg.com/originals/32/43/8f/32438f37c5b6a1b2dabbf934162b11e4.jpg","https://i.pinimg.com/originals/55/49/cc/5549ccb0b32a10216b09f67632070507.jpg","https://i.pinimg.com/originals/a3/aa/aa/a3aaaae3a00f4211af2e8e4ecb1da007.jpg","https://i.pinimg.com/originals/fa/5f/6d/fa5f6d5e40adc51c2095333d7501e76f.jpg","https://i.pinimg.com/originals/44/e4/f7/44e4f767400646e3bc5bc6e0ebf7368d.jpg","https://i.pinimg.com/originals/34/20/8e/34208e0a125963d781b9171cb54bc171.jpg","https://i.pinimg.com/originals/8d/a4/0b/8da40b8c05ed685a39c93b27e4d69046.jpg","https://i.pinimg.com/originals/81/eb/13/81eb13ba9c391c3bbb56f0667b717740.jpg","https://i.pinimg.com/originals/56/3f/89/563f896b53f0787abf9ccef902d5209c.jpg","https://i.pinimg.com/originals/4e/b0/01/4eb0010c0fbab4324989af5186e3aa4a.jpg","https://i.pinimg.com/originals/68/94/13/68941383215d751d5c6eb72af4549019.jpg","https://i.pinimg.com/originals/12/b4/ee/12b4eef886901649cca0799faa9f651f.jpg","https://i.pinimg.com/originals/01/4b/9e/014b9edaf6f3cf315793b0a63c24fa35.jpg","https://i.pinimg.com/originals/78/fa/10/78fa10ab94c0dc9e19a18358a9752070.jpg","https://i.pinimg.com/originals/53/4e/85/534e85a5af73e256d5dd824bef563de0.jpg","https://i.pinimg.com/originals/9f/37/7a/9f377a105a0f7cc4bea1f553bea36d06.jpg","https://i.pinimg.com/originals/a6/6c/6c/a66c6cde03ea6ad72ca36776c5bb2ed9.jpg","https://i.pinimg.com/originals/5e/16/97/5e16970e6a84f3a4959c8d7e7117d287.jpg","https://i.pinimg.com/originals/88/c0/72/88c072ea8f6b047c8971efa099f2ab25.jpg","https://i.pinimg.com/originals/03/5f/ed/035fed621d33d42f453f314049a09244.jpg","https://i.pinimg.com/originals/0d/53/15/0d53156e1fa4d591d32e2ecd8c10f953.jpg","https://i.pinimg.com/originals/d0/5e/b8/d05eb893d80d9a02aa03d4b1314adff5.jpg","https://i.pinimg.com/originals/7c/e5/d8/7ce5d88853231888e9798f65a24ad11a.jpg","https://i.pinimg.com/originals/7c/67/0f/7c670fde8e6428661073e0a01996406b.jpg","https://i.pinimg.com/originals/6a/74/e5/6a74e5c6c6aeca129e9f5fd6976c77cb.jpg","https://i.pinimg.com/originals/3b/89/9c/3b899c8c52604a10812ee06b8ef4ad84.jpg","https://i.pinimg.com/originals/6a/15/1e/6a151e72a8f017c8988eb570841c8b35.jpg"]
            let cewesh = itemssh[Math.floor(Math.random() *itemssh.length)]
            client.sendFileFromUrl(from, cewesh, 'ptlsh.jpeg', 'Piw', id)
            break
        case 'cecan2':
            const itemslh = ["https://i.pinimg.com/originals/69/d7/b3/69d7b3d5a089e7cbee0250ea5da9b14b.jpg","https://i.pinimg.com/originals/78/fa/10/78fa10ab94c0dc9e19a18358a9752070.jpg","https://i.pinimg.com/originals/93/e0/a3/93e0a3816183696ff89b1ad7db2fd3c0.jpg","https://i.pinimg.com/originals/a6/34/cf/a634cfa655269069439e9476780b46fe.jpg","https://i.pinimg.com/originals/dc/f5/69/dcf569a7b08efcae64d0747b51d04a7d.jpg","https://i.pinimg.com/originals/4f/96/2b/4f962b89bd7ceb438b3e9ebbd075184c.jpg","https://i.pinimg.com/originals/c2/fb/e7/c2fbe7a6955a85c51b9ee8062a7b68d3.jpg","https://i.pinimg.com/originals/44/54/24/44542415cf206f2c041e3bbb52a69419.jpg","https://i.pinimg.com/originals/ae/3c/40/ae3c40e0a2f653811b5a67ccd6b9d8cc.jpg","https://i.pinimg.com/originals/bd/fa/33/bdfa3317d96e6cdafaf27e3b337d05b4.jpg","https://i.pinimg.com/originals/75/6a/f2/756af236ae909431567ed184c43aae6f.png","https://i.pinimg.com/originals/a5/95/d7/a595d7fe6b8dc00d1aaa7287f1dd304e.jpg","https://i.pinimg.com/originals/40/37/78/40377871ee06a4a434c39e90b1f647e1.jpg","https://i.pinimg.com/originals/45/73/ac/4573ac9484c480500872b7c91f758040.jpg","https://i.pinimg.com/originals/32/7d/0b/327d0be89cc60321128d0f0bdaadfc15.jpg","https://i.pinimg.com/originals/f4/a1/0f/f4a10ffd44aea604383be84a34f69f90.jpg","https://i.pinimg.com/originals/ec/7f/b5/ec7fb5506136f72876633aab957a755a.jpg","https://i.pinimg.com/originals/4c/e9/15/4ce915c8245586f541c4d0a8b71cc500.jpg","https://i.pinimg.com/originals/03/2a/14/032a145e96154753e33bdda30d9f41f1.jpg","https://i.pinimg.com/originals/f4/5b/07/f45b070de82acec89092eaea1b415029.jpg","https://i.pinimg.com/originals/a9/f2/da/a9f2da1277fb7bc801856c3b9c12d37d.jpg","https://i.pinimg.com/originals/af/ab/93/afab93ebbf109a601dcb77b5baa494b4.jpg","https://i.pinimg.com/originals/b9/38/df/b938dfba6c139ad45ce51203a43eac0d.jpg","https://i.pinimg.com/originals/af/10/0a/af100a49cb8f53f0dd5b48664ede9db8.jpg","https://i.pinimg.com/originals/99/18/6c/99186c2145e1223f885103f51817be78.jpg","https://i.pinimg.com/originals/3c/fd/c9/3cfdc9ba7cf79ed061808e162162f4da.jpg","https://i.pinimg.com/originals/31/95/64/319564a33b5ed46a52d30c18d2310f22.jpg","https://i.pinimg.com/originals/1c/2d/9f/1c2d9ffdd104200355bab43c9d3fad20.gif","https://i.pinimg.com/originals/4a/aa/12/4aaa12940f51fdfb1684964df3796c4c.jpg","https://i.pinimg.com/originals/37/90/bc/3790bc29be16d95174af4eff4ee3859f.jpg","https://i.pinimg.com/originals/4c/12/8f/4c128fda6e71a9f4c670a78a21d8c196.jpg","https://i.pinimg.com/originals/34/92/10/3492100b4a924458a2bf5340d68293c2.jpg","https://i.pinimg.com/originals/5a/dd/12/5add12091eafba364ec76c91d20e75ac.jpg","https://i.pinimg.com/originals/da/c3/59/dac359d1fc87193c2b9d85bb96fedcbc.jpg","https://i.pinimg.com/originals/2e/d6/a9/2ed6a9670d942220eab92b99bb0d1c09.jpg","https://i.pinimg.com/originals/f1/89/e3/f189e3d9b353f91b60060cc64e6706c9.jpg","https://i.pinimg.com/originals/8c/06/c2/8c06c22283cf98abdb8922e2f3aa0a6a.jpg","https://i.pinimg.com/originals/8b/6f/0b/8b6f0b1e213240eaad90894292a2d3c1.jpg","https://i.pinimg.com/originals/89/bf/b8/89bfb86392d39477adcd66444cf19845.jpg","https://i.pinimg.com/originals/35/e2/cc/35e2cc3c535d8f1cfeaf13cce69ac984.jpg","https://i.pinimg.com/originals/c0/01/a1/c001a16e2629872a3d7ea7fdbe5a4e98.jpg","https://i.pinimg.com/originals/b4/eb/48/b4eb486def2d413716c5fa033af9fb34.jpg","https://i.pinimg.com/originals/55/ee/7b/55ee7b5f4889cc34ec1a01d2e7875b53.jpg","https://i.pinimg.com/originals/0c/b3/0e/0cb30ea660aafbae32cc07433bf3eea2.jpg","https://i.pinimg.com/originals/1f/50/23/1f5023991f2a01cff748e84c4cf3612d.jpg","https://i.pinimg.com/originals/ab/53/07/ab5307df9234934f385eb6235aa6c2cd.jpg","https://i.pinimg.com/originals/e1/a1/7c/e1a17c5f359846741c687ef1fcadb316.jpg","https://i.pinimg.com/originals/16/1b/21/161b215ee2f8e0a040c91f18c054d705.jpg","https://i.pinimg.com/originals/da/07/1a/da071a5fafbc6487d38edd4e9f3401db.jpg","https://i.pinimg.com/originals/54/f4/26/54f42615f9ad45743e6fb08ed86623f0.jpg"]
            let cewelh = itemslh[Math.floor(Math.random() *itemslh.length)]
            client.sendFileFromUrl(from, cewelh, 'ptlsh.jpeg', 'Wkwkwkw', id)
            break
       case 'wallhp':
            const wall = ["http://wa-botstiker.my.id/images/wallpaper/1000+%20Wallpaper%20HD%20Keren,%20Lucu%20%7bTerlengkap%7d.jpg","http://wa-botstiker.my.id/images/wallpaper/Believe%20in%20yourself.jpg","http://wa-botstiker.my.id/images/wallpaper/Cute%20Black%20Wallpaper%20iPhone%20flower%20backgrounds%20for%20iphone.jpg","http://wa-botstiker.my.id/images/wallpaper/Disney%20Movie%20Big%20Hero%206%20(2014)%20Desktop%20&%20iPhone%20Wallpapers%20HD.jpg","http://wa-botstiker.my.id/images/wallpaper/Wallpaper.jpg","http://wa-botstiker.my.id/images/wallpaper/download%20(1).jpg","http://wa-botstiker.my.id/images/wallpaper/pastel%20wallpaper%20_%20Tumblr.jpg"]
            let wal = wall[Math.floor(Math.random() * wall.length)]
            client.sendFileFromUrl(from, wal, 'wall.jpg', 'Wallpapernya kakak')
             break
       case 'join':
                 //return client.reply(from, 'Jika ingin meng-invite bot ke group anda, silahkan izin ke wa.me/6282137409151', id)
                 if (args.length < 2) return client.reply(from, 'Kirim perintah *!join linkgroup kunci*\n\nEx:\n!join https://chat.whatsapp.com/blablablablablabla abcde\nuntuk kunci kamu bisa mendapatkannya hanya dengan chat owner ketik !owner', id)
            const link = args[1]
            const key = args[2]
            const tGr = await client.getAllGroups()
            const minMem = 100
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            if (key !== '120203') return client.reply(from, '*kunci* salah! silahkan chat owner bot unruk mendapatkan key yang valid', id)
            const check = await client.inviteInfo(link)
            if (!isLink) return client.reply(from, 'Ini link? 👊🤬', id)
            if (tGr.length > 5) return client.reply(from, 'Maaf jumlah group sudah maksimal!', id)
            if (check.size < minMem) return client.reply(from, 'Member group tidak melebihi 100, bot tidak bisa masuk', id)
            if (check.status === 200) {
                await client.joinGroupViaLink(link).then(() => client.reply(from, 'Done!'))
                          } else {
                         client.reply(from, 'Link group tidak valid!', id)
                           }
                       break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
