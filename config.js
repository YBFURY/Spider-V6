//Bot by 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒//


require("./all/module")
global.owner = "2349121214408" 
global.namaCreator = "𝕶𝖎𝖓𝖌 𝕾𝖆𝖒" 
global.autoJoin = false 
global.antilink = false 
global.versisc = '6.0' 
global.codeInvite = "https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e"
global.isLink = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e'
global.sessionName = '{"noiseKey":{"private":{"type":"Buffer","data":"aCHCPmydfvQyaWn2duqihLO2j+LQEmRKTMNy/sDD5nc="},"public":{"type":"Buffer","data":"{="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"cJgvqrdVdPbndfynOLr76n541XasAhvGRTPF2S601FU="},"public":{"type":"Buffer","data":"SzfE/LuigVf9PEWTsEgZN2yCk3gjDCjK6Le6MBXJaRY="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"iBKhoKxebfeNLeCd5D4jrb8wVQc1BshuEnEblonXAXA="},"public":{"type":"Buffer","data":"r5riEbcGPVt2Gd+PCCtILBVWDmhYiRfFH6kcA1wmR14="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"2HPNTscYCltKSJBpNhKL06Y7HQg67DOgtl9+GUZ5YUA="},"public":{"type":"Buffer","data":"ENLJFO960KtdTzmbG+E/Y970q0uKdnS/whEO5NEq9HE="}},"signature":{"type":"Buffer","data":"7BVu2v9UUjn8zU00+kR/61/RruYtB0rzmH4ibKsk1ecO8v8ZQFQ829rnTWHgQ6peVojoD1cSRyRMNnJCfFKsAg=="},"keyId":1},"registrationId":162,"advSecretKey":"bQJrXL3b33moTh04n/P+gMM2ghqPf+tp+i5okyw7eqQ=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"QwFlTer5QVWhA2kWmqg1Wg","phoneId":"ae29a691-0941-4048-9468-8d2722b3ff58","identityId":{"type":"Buffer","data":"gYK6G8DTou5F4wDJQ7/wzmkqhNY="},"registered":true,"backupToken":{"type":"Buffer","data":"rrbPe0rGC6W2KUCaPxBgfETcBeI="},"registration":{},"pairingCode":"ZTCGDRMQ","me":{"id":"2349121214408:61@s.whatsapp.net"},"account":{"details":"CNzLt7cGEN3R5rYGGAIgACgA","accountSignatureKey":"F94f2C1xko/uV+lmxt1C2hQ8CHU1l2IbiIkkVvlLbVw=","accountSignature":"hwtLGxmxlcbDA7e3rpMSP7BLKWDmbCtBeDnXpWSyQwGZCaEC6BfHLUAzE4cIQZtySK4fKBYUyXj9HGxh4g+9Dg==","deviceSignature":"i+sCNgc3eVoptetjQ30K1fUkGqlFhqoclgybOOWhmpyE2iS54wTNjPBgiKBbmXE1zOUG0f/x3FdVWv0ejtMBCg=="},"signalIdentities":[{"identifier":{"name":"2349121214408:61@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRfeH9gtcZKP7lfpZsbdQtoUPAh1NZdiG4iJJFb5S21c"}}],"platform":"android","lastAccountSyncTimestamp":172554}'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "𝕶𝖎𝖓𝖌 𝕾𝖆𝖒" 
global.author = "𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6" 
global.jumlah = "5" 
global.namabot = "𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6" 
global.domain = 'https://kingsam.sellerpanelerol.me' // your domian
global.apikey = 'ptla_VRxkhvalZQ3EhHyAax9QYxgT5cbsx2MrO69gBpVZmmd' // Isi Apikey Plta Lu
global.capikey = 'ptlc_sQ3d4GxCiztyV5DbhUJSWtvnSCyKzeMXoWIr2lVyqal' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.apilinode = ''
global.apitokendo = ''
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
