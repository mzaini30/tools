# Tools

Kumpulan tools siap pakai.

## Instalasi

```bash
npm i mzaini30/tools --prefer-offline
```

## Contoh

```javascript
const tools = require('tools')
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
```

Hasil:

```
Angka diacak:
[
  2, 7, 6, 3,
  1, 8, 9, 4,
  0, 5
]

Judul: Aku mau makan nasi. Kamu mau ikut kah?
Slug: aku-mau-makan-nasi-kamu-mau-ikut-kah

Tanggal sekarang: 2021-01-30 14:59:57
```