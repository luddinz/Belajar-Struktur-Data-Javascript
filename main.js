// String

const nama = "Fariz";
const alamat = "Rumah saya no 19";
const warnaRumah = "Warna Abu-abu";
const letak = "Tangerang Selatan";
const pekerjaan = "berkerja di Tebet menjadi IT";

console.log(
  `Hallo, nama saya ${nama}. Saya tinggal di salah satu komplek di ${letak}, dan ${alamat}`
);
console.log(`${warnaRumah}, dekat dengan POS Satpam`);
console.log(`serta saya ${pekerjaan}`);

// Number

const angkaPecahan = (21.5 * 100) / 0.5;
console.log(angkaPecahan);

// Boolean

const foo = true;
const foo2 = false;
console.log(foo);
console.log(foo2);

// Null

const asd = null;
console.log(asd);

// Undefined

let asdf;
console.log(asdf);

// Javascript Array

// Object

const motorcycle = {
  type: "Aerox",
  model: "Variant S",
  year: "2019",
  color: "Black",
};

console.log(motorcycle);

// Push

const motorMatic = ["Aerox", "Vario", "NMax", "PCX"];
motorMatic.push("XMax", "Vesmet");
console.log(motorMatic);

// Pop

const motorMatic2 = ["Aerox", "Vario", "NMax", "PCX"];
motorMatic2.pop();
console.log(motorMatic2);

// Shift

let peeps = ["Alex", "Bobby", "Charl"];
peeps.shift();

console.log(peeps);

// Unshift

let friend = ["Alex"];
friend.unshift("Willy");
friend.unshift("Puff", "George");

console.log(friend);

// forEach

const numbers = [1, 2, 3, 4];

numbers.forEach((num) => {
  console.log(num);
});

// filter

let numbers2 = [1, 2, 3, 4];
let evenNumbers2 = numbers2.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers2);

// map

let numbers3 = [1, 2, 3, 4];
let multiplesOfFive = numbers3.map((num) => {
  return num * 5;
});

console.log(multiplesOfFive);

// concat

const s1 = "Hello guys, ";
const s2 = "welcome to bootcamp Binar. ";
const s3 = "Selamat Belajar!";
const Welcome = s1.concat(s2, s3);

console.log(Welcome);
