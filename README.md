# Tools

Kumpulan tools siap pakai.

## Instalasi

```bash
npm i mzaini30/tools --prefer-offline
```

## Tools-Toolsnya

### Tanggal

Mendapatkan tanggal terkini dengan format 2020-08-17 00:19:45

Caranya:

```html
<script>
	import {tanggal} from 'tools'
</script>
<p>{tanggal()}</p>
```

### Slug

Mendapatkan slug dari string

Caranya:

```html
<script>
	import {slug} from 'tools'
</script>
<p>{slug('hello world')}</p>
<!-- jadinya: hello-world -->
```

### Acak

Digunakan untuk mengacak array

Caranya:

```javascript
import {acak} from "tools"
let angka = [1, 2, 3, 4, 5]
angka = acak(angka)
```

### Atas

Scroll ke atas.

```javascript
import {atas} from 'tools'
atas()
```

### Clean

Membersihkan state dari kutip sehingga tidak merusak database dengan SQL Injection.

```javascript
import {clean} from 'tools'
clean('Aku mau "makan')
```

### Sleep

Memberi jeda dalam milidetik.

```javascript
import {sleep} from 'tools'
(async function(){
	console.log('Hello')
	await sleep(5000) // sleep 5 detik
	console.log('World')
})()
```