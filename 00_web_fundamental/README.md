<style>
.edit-file {
  border:2px solid blue;padding:3px 5px 3px 5px;
}
.tips {
  border:2px solid orange;padding:3px 5px 3px 5px;
}
img {
	width:980px;
  border:1px solid lightgrey;padding:4px 4px 4px 4px;
}
</style>
# Web Fundamental

## Web

### Sejarah

### Spesifikasi, Consorsium dan Working Group

### Bagaimana Teknologi Web Bekerja

# HTML

Valid HTML.

<span class="edit-file">&#9998;  index.html</span>
```
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>KempingKebut</title>
  <meta name="description" content="KempingKebut">
  <meta name="author" content="me">
  <link rel="stylesheet" href="css/styles.css?v=1.0">
</head>
<body>

</body>
</html>
```

## Tag, Attribute & Element

Tag adalah sintaks yang mengawali dan mengakhiri sebuah elemen. Contoh, `<html>` selalu ditutup dengan `</html>`.

Ada juga jenis tag yang berdiri sendiri tanpa penutup, contoh `<img/>`

Atribut membantu mengatur preferensi dari sebuah tag. Misal, tag `<meta>` memiliki atribut `name` dan `description` untuk menge-set sebuah nilai ke elemen meta.

Elemen adalah representasi dari struktur semantik dokumen HTML. Sebuah elemen mencakup satu kesatuan tag yang komplit, termasuk anak-anaknya.

## DOM

DOM (Document Object Model) adalah standar untuk mengakses dan mengatur dokumen XML atau HTML. Setiap elemen memiliki antar muka DOM yang dapat diakses secara programatikal, misal melalu bahasa JavaScript.

<div class="tips">
Demo manipulasi DOM melalui JavaScript
</div>

## Header

Tag `<head>` menyimpan informasi spesifik mengenai halaman web, kadang disebut sebagai metadata. Informasi tersebut antara lain seperti judul dari dokumen (`<title>`), jenis set karakter tautan, tautan ke skrip dan informasi lainnya.

## Paragraph

<span class="edit-file">&#9998;  index.html</span>
```
...

<body>
  <p>
    Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.
  </p>
</body>

...
```

## Div

Tag `<div>` digunakan untuk mendefinisikan divisi atau seksi atau bagian pada dokumen HTML. Elemen `<div>` menjadi wadah bagi elemen lainnya.

<span class="edit-file">&#9998;  index.html</span>
```
...

<body>

  <div>
    <div>
    	<div>
     	 facebook
    	</div>
    </div>
  </div>

  <div>
    <div>

      <div>
        <p>
          Facebook membantu Anda terhubung dan berbagi dengan orang- orang dalam kehidupan Anda.
        </p>
      </div>

      <div>
        Daftar
        <div>
          Ini cepat dan mudah.
        </div>
      </div>

    </div>
  </div>


  <div>
    Bahasa Indonesia
  </div>

</body>

...
```

<div class="tips">
Inspeksi dengan fitur Inspect Element dari peramban
</div>

## Img

Tag `<img/>` digunakan untuk menyisipkan gambar pada halaman HTML. Gambar itu sendiri dapat bersumber dari sebuah berkas di dekat berkas HTML itu sendiri maupun tautan URL yang valid.

<span class="edit-file">&#9998;  index.html</span>
```
...

  <div>
    <p>
      Facebook membantu Anda terhubung dan berbagi dengan orang- orang dalam kehidupan Anda.
    </p>
    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/OBaVg52wtTZ.png"/>
  </div>

...
```

<img src="assets/Screenshot from 2019-08-30 01-02-05.png"/>

## List

Untuk membuat daftar, gunakan tag `<ul>` dan `<li>`.  Tag `<ul>` adalah pembungkus dari daftar item sementara `<li>` adalah pembungkus item itu sendiri.

<span class="edit-file">&#9998;  index.html</span>
```
...

  <div>
    <ul>
      <li>
        Bahasa Indonesia
      </li>
      <li>
        English (UK)
      </li>
      <li>
        Bahasa Jawa
      </li>
      <li>
        Bahasa Melayu
      </li>
    </ul>
  </div>

...
```

## Links

Tautan menghubungkan dokumen HTML yang satu dengan yang lain. Saat sebuah tautan diklik, peramban akan menampilkan halaman web tujuan.

Tautan dibentuk dengan tag `<a>` dan halaman tujuannya didefinisikan dengan atribut `href`.

<span class="edit-file">&#9998;  index.html</span>
```
...

    <div>
      <div>
      	<div>
       	 <a href="https://www.facebook.com">facebook</a>
      	</div>
      </div>
    </div>

...
```

## Input

Dokumen HTML dapat menerima input untuk diproses baik oleh kode di peramban maupun oleh server. Input ini dapat ditangani dengan tag `<input/>`

<span class="edit-file">&#9998;  index.html</span>
```
...

    <div>
      Daftar
      <div>
    	Ini cepat dan mudah.
      </div>

      <div>

        <input placeholder="Nama depan"/>
        <input placeholder="Nama belakang"/>
        <div>
          <input placeholder="Nomor seluler atau email"/>
        </div>
        <div>
          <input placeholder="Kata sandi baru"/>
        </div>

        <div>
          Tanggal Lahir<br/>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <select>
            <option>Januari</option>
            <option>Februari</option>
            <option>Maret</option>
          </select>
          <select>
            <option>1998</option>
            <option>1999</option>
            <option>2000</option>
          </select>
        </div>

        <div>
          Jenis Kelamin<br/>
          <input type="checkbox"/> Perempuan
          <input type="checkbox"/> Laki-laki
          <input type="checkbox"/> Khusus
        </div>

      </div>

    </div>

...
```

Contoh tag lain untuk menerima input misalnya `<textarea>` dan select `<select>`.

## Tables

Form. daftar



# CSS (Cascading Style Sheet)

## Selector

- `tag` untuk tag
- `.` untuk *class*
- `#` untuk *id*

## Integrasi

### *Inline*

```
  <div style="background:blue;">Omama</div>
```
### Ditanam dalam HTML

```
  <style>
    .biru {
      background:blue;
    }
  </style>
  <div class="biru">Omama</div>
```
### Berkas terpisah

<span class="edit-file">&#9998;  styles.css</span>
```
/* Main CSS */

.biru {
  background:blue;
}

```

<span class="edit-file">&#9998;  index.html</span>
```
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="biru"">
      <div>
      	<div>
        <a href="https://www.facebook.com">facebook</a>
      	</div>
      </div>
    </div>
  </body>
```

## Ukuran (Measurement

- %
- em
- mm
- pt
- px

## Colors

Nilai warna dapat diwakili oleh *color name*, kode *hex* maupun kode desimal RGB.

| Name |  Hex  |  Desimal RG  |
| ------ | ------ | ------ |
| light-salmon | FFA07A | 255,160,122 |
| crimson | DC143C | 220,20,60 |
| red | FF0000 | 255,0,0 |


## Background & Color

Dengan *background* sebuah elemen (biasanya `div`) dapat dilatari oleh warna atau gambar.

```
background-color:blue;
```
atau,
```
background-image: url("berkas-gambar.png");
```

`background-image` memiliki beberapa property pendukung seperti `background-repeat`, `background-position` dan lainnya.

Sementara *property* `color` akan berdampak ke isi dari sebuah elemen. Bila sebuah elemen div berisi teks memiliki `color:blue;`, maka teks dalam div tersebut akan berwarna biru.

<span class="edit-file">&#9998;  styles.css</span>
```
/* Main CSS */

.biru {
  background:blue;
}

#header-wrapper {
  background:3B5598;
  color:white;
}

#header-logo {
  color:#FFF;
}
```

<span class="edit-file">&#9998;  index.html</span>
```
  <div id="header-wrapper">
  	<div>
   	 <a id="header-logo" href="https://www.facebook.com">facebook</a>
  	</div>
  </div>
```

## Fonts

Font memiliki banyak property seperti `font-family`, `font-style`, `font-size`

<span class="edit-file">&#9998;  styles.css</span>
```
...

#header-logo {
  color:#FFF;
  font-weight:bold;
}

body {
  font-family:Arial !important;
}

```

## Text

<span class="edit-file">&#9998;  styles.css</span>
```
...

#header-logo {
  color:#FFF;
  font-weight:bold;
	text-decoration:none;
}

body {
  font-family:Arial !important;
  text-align:center;
}

...

```

## Layouting, Margin & Padding

<img src="assets/Screenshot from 2019-08-30 00-54-30.png">
<img src="assets/Screenshot from 2019-08-30 00-46-43.png">
<img src="assets/Screenshot from 2019-08-30 00-48-38.png">


<span class="edit-file">&#9998;  styles.css</span>
```
...
#header-wrapper {
  background:#3B5598;
  margin-bottom:-16px;
}
...

body {
  font-family:Arial !important;
  margin:0;
}

#header {
	width:980px;
  margin:0 auto;
}

#content-wrapper {
  background:blue;
}

#content {
	width:980px;
  margin:0 auto;
  background:red;
}

...

```

<span class="edit-file">&#9998;  index.html</span>
```
...

  <div id="header-wrapper">
	  <div id="header">
	  	<div>
    		<a id="header-logo" href="https://www.facebook.com">facebook</a>
			</div>
		</div>
  </div>

  <div id="content-wrapper">
    <div id="content">
      <div>
        <p>
          Facebook membantu Anda terhubung dan berbagi dengan orang- orang dalam kehidupan Anda.
        </p>

...

  <div id="footer-wrapper">
    <ul>
      <li>
        Bahasa Indonesia
      </li>

...
```

<img src="assets/Screenshot from 2019-08-30 00-41-18.png">

## Borders

```

```

## Overflow

```

```

## Position

```

```

## Display

```

```

## CSS Frameworks

- Bootstrap
- Elastic UI

