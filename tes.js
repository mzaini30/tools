const tools = require('./')
console.log()

// acak
const angka = [...Array(10).keys()]
const acak = tools.acak(angka)
console.log('Angka diacak:')
console.log(acak)
console.log()

// slug
const judul = 'Aku mau makan nasi. Kamu mau ikut kah?'
console.log(`Judul: ${judul}`)
console.log(`Slug: ${tools.slug(judul)}`)
console.log()

// tanggal
console.log(`Tanggal sekarang: ${tools.tanggal()}`)

console.log()