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
# JavaScript

## Intro

## Using JavaScript

### Tanam dalam HTML

```
<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Hello</title>
		<script>
			alert('Hello');
		</script>
	</head>
	<body>
	</body>
</html>

```

### Developer Console

<img src="assets/Screenshot from 2019-08-30 23-27-28.png">

### NodeJS

<img src="assets/Screenshot from 2019-08-30 23-26-19.png">

## Playing around for the first time in Developer Console

- String concat
- `alert()`
- `prompt()`
- `console.log()`

## Variabel dan Tipe Data

### Dynamic typing behaviour

### Variabel

- `var`
- `let`
- `const`

<img src="assets/Screenshot from 2019-08-30 23-59-02.png">

#### Deklarasi

```
var age = 15;
var year;
year = '2019';
```


#### Skup dan blok

Skup fungsi,
```
var message = 'Hello';
function say() {
  var message = 'Hai';
  consol.log(message);
}
say();
console.log(message);
```

Skup blok dengan `var`,
```
var message = 'Hello';
if (true) {
  var message = 'Hai';
  console.log(message);
}
console.log(message);
```

Skup blok dengan `let`,
```
let message = 'Hello';
if (true) {
  let message = 'Hai';
  console.log(message);
}
console.log(message);
```



### Tipe data

#### Number
```
var age = 19;
```
#### String
```
var city = 20;
```
#### Boolean
```
var isGood = true;
```
#### Array
```
var devices = ['smartphone', 'laptop'];
```
#### Object
```
var person = {
  name: 'Joko Anwar',
  occupation: 'Film Director'
  age: 43
}
console.log(person.name);
console.log(person.age);
person.age = 44;
console.log(person);
```
#### Concating multiple data type
```

console.log(5 + 6 + 'yes');
console.log('yes' + 5 + 6);

```

### Konversi tipe data

Semua dapat dikonversi ke string kecuali objek,
```
var arr = [1,2,3];
arr.toString();

var num = 49;
num.toString();

var bool = true;
bool.toString();

```

Untuk string ke number atau boolean,
```
var str = '98';
var myNumber = Number(str);
```

Untuk objek ke string dan sebaliknya,
```
var obj = { a: 1 }
var objStr = JSON.stringify(obj);
obj = JSON.parse(objStr);
```

## Operator

- `+`
- `-`
- `*`
- `/`
- `%`
- `**`
- `++`
- `--`

### Assignment operator

- `+=`
- `-=`

To be written.


## Array / Larik

```
var fruit1 = 'mangga';
var fruit2 = 'manggis';
var fruit3 = 'pir';
var fruit4 = 'anggur';
var fruit5 = 'jeruk';
```
```
var fruits = [
  'mangga',
  'manggis',
  'pir',
  'anggur',
  'jeruk'
]
```

### Index

```
fruits[0];
fruits[5];
fruits.indexOf('anggur');
```

### Manipulasi

#### Menyetel ke index langsung
```
fruits[1] = 'apel';
```

#### Push, Pop, Shift, Unshift
```
fruits.push('rambutan');
fruits.pop();
fruits.unshift('rambutan');
fruits.shift();
```

#### Slice and Splice

```
fruits.slice(0,1);
fruits.splice(0,1);
```

#### Order / Urutan

```
fruits.sort();
fruits.reverse();
```

#### Perulangan

```
fruits.forEach((fruit) => {
	console.log(fruit);
})

var myFruits = fruits.map((fruit) => {
	return `my ${fruit}`;
})

var mmm = fruits.filter((fruit) => {
  return fruit[0] === 'm';
	console.log(`my ${fruit}`);
})
```

## Manipulate String

### Concatenation

```
var lastName = "Ananda";
console.log("Yusach " + lastName);
```

### Template Literal

```
console.log(`Yusach ${lastName}`);
```

### Single quote, double quote and Escaping

```
console.log('Mohammad Roba'i');
```

```
console.log("Mohammad Roba'i");
```

```
console.log('Mohammad Roba\'i');
console.log("Mohammad Roba\"i");
```
### Trim

```
var village = '   Penari ';
trim(village);

```

### Replace

```
var str = 'Saya sedang belajar Javascript';
var newStr = str.replace('Javascript', 'JavaScript');
console.log(newStr);
var withoutA = str.replace(/a/g, '');
console.log(withoutA);
```

### Perlakuan sebagai array

#### Index

```
var city = 'Depok';
city[0];
city[2];
```

```
city[5];
```

```
city.indexOf('o');
city.indexOf('De');
city.indexOf('a');
```

#### Slice

```
var country = 'Swedent';
country.slice(0,2);
```

#### Length

```
var laptopType = 'ThinkPad';
laptopType.length;
```

#### Split

```
var greeting = 'Selamat datang kembali;
var arr = greeting.split(' ');
var str = arr.join(' ');
```

## If / Else

### Comparison operators

- `==`
- `===`
- `!=`
- `<`
- `>`
- `<=`
- `>=`

```
let age = 13;
let ageLimit = 18;
if (age <= ageLimit) {
  console.log('Haa!');
}

let isDelicious = true;
if (isDelicious) {
  console.log('Enak!');
} else {
  console.log('Hmmmppphhh!');
}
```

```
if (...) {
	if (...) {
    //
	} else {
		if (...) {
      //
		}
	}
} else if (...) {
  //
} else {
  //
}
```

## Perulangan (Loop)

To be written.

## Fungsi dan Ekspresi

To be written.

## Object, Properties & Methods

To be written.

## Object & Methods

To be written.

## DOM Manipulation

To be written.

## Advanced Objects

Inheritance, chain, passing function as arguments, function returning function

## Asynchronous

Callback, promise, async/await, ajax

## Modern JavaScript

NodeJS, Babel, Webpack/Gulp/Grunt
