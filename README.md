# Tools

Kumpulan tools siap pakai.

## Instalasi

```bash
npm i kumpulan-tools
```

## Tools-Toolsnya

### Tanggal

Mendapatkan tanggal terkini dengan format 2020-08-17 00:19:45

Caranya:

```html
<script>
	import {tanggal} from 'kumpulan-tools'
</script>
<p>{tanggal()}</p>
```

### Slug

Mendapatkan slug dari string

Caranya:

```html
<script>
	import {slug} from 'kumpulan-tools'
</script>
<p>{slug('hello world')}</p>
<!-- jadinya: hello-world -->
```

### Acak

Digunakan untuk mengacak array

Caranya:

```javascript
import {acak} from "kumpulan-tools"
let angka = [1, 2, 3, 4, 5]
angka = acak(angka)
```

### Atas

Scroll ke atas.

```javascript
import {atas} from 'kumpulan-tools'
atas()
```

### Clean

Membersihkan state dari kutip sehingga tidak merusak database dengan SQL Injection.

```javascript
import {clean} from 'kumpulan-tools'
clean('Aku mau "makan')
```

### Sleep

Memberi jeda dalam milidetik.

```javascript
import {sleep} from 'kumpulan-tools'
(async function(){
	console.log('Hello')
	await sleep(5000) // sleep 5 detik
	console.log('World')
})()
```

### toBase64

```javascript
import {toBase64} from 'kumpulan-tools'
$: if (files) {
	(async function () {
		const hasil = await toBase64(files[0])
		console.log(hasil)
	})()
}
```