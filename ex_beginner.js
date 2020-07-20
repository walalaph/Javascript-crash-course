const name = 'Walailak';
let height = 155;
let isMale = false;
let city = null;
let bigNumber = 10n;

console.log(name, height, isMale, city);

const person = {
    name: 'Walailak',
    height: 155,
    city: 'Bangkok'
};
console.log(person.city);

person.height = 188;
console.log(person);

person.weight = 50;

//สร้าง array
const numbers = [5,10,15,20];
console.log(numbers[2])

//push เพิ่มค่าเข้าไป ใน array
numbers.push(25);
console.log(numbers);

//popลบค่าด้านหลังสุด ใน array
numbers.pop();
console.log(numbers);

//unshift เพิ่มค่าเข้าไปด้านหน้า ใน array
numbers.unshift(1);
console.log(numbers);

//shift ลบค่าด้านหน้าสุด
numbers.shift();
console.log(numbers);


let result = 10 + 5 * 2 / 2;
console.log(result);

//-------------------------------------

let password = '55';
if(password === ''){
    console.log('Password is required');
}else if(password.length >= 8 && password.length <= 12){
    console.log('Password is valid');
}else{
    console.log('Password is invalid');
}


// function

function add(a, b){
    return a+b;
}
console.log(add(5,3));


function calculateVat(money, vat){
    return money*vat/100;
}
const totalVat = calculateVat(100,7);
console.log(totalVat);

const totalVat10 = calculateVat(100,10);
console.log(totalVat10)


// loop /flow control
for(let i=0; i<10 ; i++){
    if(i===7){
        break;
    }
    console.log(i);
}


//DOM (Document Object Model) 
