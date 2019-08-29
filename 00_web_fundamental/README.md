<style>
.edit-file {
  border:2px solid blue;padding:3px 5px 3px 5px;
}
.tips {
  border:2px solid orange;padding:3px 5px 3px 5px;
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

```
<body>
  <p>
    Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.
  </p>
</body>
```

## Div

Tag `<div>` digunakan untuk mendefinisikan divisi atau seksi atau bagian pada dokumen HTML. Elemen `<div>` menjadi wadah bagi elemen lainnya.

```
<body>

  <div>
    Facebook
  </div>
  
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
  
  <div>
    Bahasa Indonesia
  </div>

</body>
```

<div class="tips">
Inspeksi dengan fitur Inspect Element dari peramban
</div>

## Img

Tag `<img/>` digunakan untuk menyisipkan gambar pada halaman HTML. Gambar itu sendiri dapat bersumber dari sebuah berkas di dekat berkas HTML itu sendiri maupun tautan URL yang valid.

```
  <div>
    <p>
      Facebook membantu Anda terhubung dan berbagi dengan orang- orang dalam kehidupan Anda.
    </p>
    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/OBaVg52wtTZ.png?_nc_x=Ij3Wp8lg5Kz"/>
  </div>
```

## List

Untuk membuat daftar, gunakan tag `<ul>` dan `<li>`.  Tag `<ul>` adalah pembungkus dari daftar item sementara `<li>` adalah pembungkus item itu sendiri.

```
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
```

## Links

Tautan menghubungkan dokumen HTML yang satu dengan yang lain. Saat sebuah tautan diklik, peramban akan menampilkan halaman web tujuan.

Tautan dibentuk dengan tag `<a>` dan halaman tujuannya didefinisikan dengan atribut `href`.

```
  <div>
    <a href="https://www.facebook.com">Facebook</a>
  </div>
```

## Input

Dokumen HTML dapat menerima input untuk diproses baik oleh kode di peramban maupun oleh server. Input ini dapat ditangani dengan tag `<input/>`


```
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

Isi berkas `styles.css`
```
#biru {
  background:blue;
}

```

Integrasi di HTML
```
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="biru">Omama</div>
  </body>
```

Buat berkas baru,

<span class="edit-file">&#9998;  styles.css</span>
```
/* Main CSS */
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


## Backgrounds

Dengan *background* sebuah elemen (biasanya `div`) dapat dilatari oleh warna atau gambar.

```
background-color:blue;
```
atau,
```
background-image: url("berkas-gambar.png");
```

`background-image` memiliki beberapa property pendukung seperti `background-repeat`, `background-position` dan lainnya.

<span class="edit-file">&#9998;  styles.css</span>
```
/* Main CSS */

#header {
  background:3B5598;
}
```
<span class="edit-file">&#9998;  index.html</span>
```
  <div id="header">
    <a href="https://www.facebook.com">Facebook</a>
  </div>
```

## Fonts

To be written.

## Text

To be written.

## Images

To be written.

## Margin & Padding

To be written.

## Borders

To be written.

## Links

To be written.

## Tables

To be written.

## Overflow

To be written.

## Position

To be written.

## Display

To be written.

## Gradient

To be written.

## Rotate

To be written.

## Animation

To be written.

## CSS Frameworks

To be written.

