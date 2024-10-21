let students = [`Tadas`, `Ieva`,`Zoma`];
let studentsa = [`Tadas`, `Ieva`,`Zoma`];
students.push('Dave'); // to end
students.pop(); //remove last
students.unshift(`Karolis`, `Karoline`); //to start
students.splice(3, 0,`Red`);
students.shift(); 
console.log(students);
console.log(typeof(students));
//let firstName = prompt("enter your name");
//console.log(firstName);
//alert(`User name is: ${firstName}`);
//const guestList = [];
//let guestNumber = prompt("Enter guest number");
const blackList = ["steve","bill"];
function printGuests(guests){
    let x = 1;
    for(guest of guests){
        console.log(`${x}. ${guest}`);
        x++;
    }
}
function blackListChecker(guest){
    if(blackList.includes(guest))
        {
            guest += "(blacklist)"
            return guest;
        }
    else{
        return guest;
    }
}
function guestProgram(){
    const guestList = [];
    let guestNumber = prompt("Enter guest number");
    for(let i = 0; i < guestNumber; i++)
        {
            let guest = prompt("Write Guest name");       
            guestList.push(blackListChecker(guest));
        }  
        printGuests(guestList)
    }   
//guestProgram();

let items = "GPU, CPU, PSU, SSD";
items = items.split(",");
console.log(items);
items = items.join(" ");
console.log(items);
//students = JSON.stringify(students);
//students = JSON.parse(students);
console.log(students);
const filtered = studentsa.filter((word)=> word.length <5);
console.log(filtered);

const sales =[
    {
        id:12,
        title:`computers`,
        date:`2024-10-10`,
        count:15,
        sum:45638.56
    },
    {
        id:13,
        title:`phones`,
        date:`2024-07-25`,
        count:16,
        sum:45687.56
    },
    {
        id:14,
        title:`tablets`,
        date:`2024-02-07`,
        count:13,
        sum:36538.56
    },
    {
        id:15,
        title:`ather`,
        date:`2024-10-05`,
        count:5,
        sum:99638.56
    },
    {
        id:16,
        title:`services`,
        date:`2024-12-08`,
        count:20,
        sum:51568.56
    }
];
let fiveHundred = sales.filter((sale) => sale.sum > 50000.00);
//let decDate = sales.filter((sale) => sale.date.slice(5,7) == `12`);
let decDate2 = sales.filter((sale) => new Date(sale.date).getMonth() === `11` );
console.log(decDate2);
function printSales(sales){
    for(sale of sales){
        for(value in sale)
        {       
            console.log(`${value}: ${sale[value]}`);
        }
    }
}
//printSales(fiveHundred);
printSales(decDate2);
//printSales(decDate);
const getSum = (...nums)=>{
    return nums.reduce((total, num)=>total+num,0);
}
console.log(getSum(1,2,3,4,10))
function countSum(array){
let count =0;
for(num of array){
    count +=num;
}
return count;
}
//console.log(countSum(getSum(1,2,3,5,10)));

const numbars = [1,2,3,4,5];
let reduced = numbars.reduce((total,num)=>total+num,0);
numbars.sort((a,b)=> a-b);
console.log(numbars.sort((a,b)=> a-b));
console.log(reduced)
console.log(students.sort());
console.log(students.reverse());
function printStudents(){
    for(student of students){
        console.log(student);
    }
}
printStudents(students.sort());
console.log("Now reverse");
printStudents(students.reverse());
function sortedSales(sales){
let sortedSales = sales.sort((a,b)=>{
    if(a.title > b.title){
        return -1;
    }
    if(a.title < b.title){
        return 1;
    }
    if(a.title == b.title){
        return 0;
    }
})
return sortedSales;
}
console.log(sortedSales(sales));
function sortedSalesDesc(red){
     let salesDesc = red.slice();
     salesDesc.sort((a,b)=>{
        if(a.date > b.date){
            return -1;
        }
        if(a.date < b.date){
            return 1;
        }
        if(a.date == b.date){
            return 0;
        }
    })
    return salesDesc
}
console.log(sortedSalesDesc(sales));
printSales(sortedSales(sales));
printSales(sortedSalesDesc(sales));

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 40 },
    { id: 4, name: 'Jeans', category: 'Clothing', price: 60 },
    { id: 5, name: 'Coffee Maker', category: 'Appliances', price: 150 },
    { id: 6, name: 'Blender', category: 'Appliances', price: 120 },
    { id: 7, name: 'TV', category: 'Electronics', price: 600 },
    { id: 8, name: 'Socks', category: 'Clothing', price: 10 },
    { id: 9, name: 'Microwave', category: 'Appliances', price: 180 },
    { id: 10, name: 'Smart Watch', category: 'Electronics', price: 250 }
  ];

function filterProductsByCategory(products, categoryName){
    return products.filter((prod)=> prod.category === categoryName);
}
function sortProductsPriceAsc(products){
     products.sort((a,b)=>{
        if(a.price > b.price) return 1;
        if(a.price < b.price) return -1;
        if(a.price == b.price) return 0
    });
    return products;
}
function sortProductsPriceDesc(products){  
    products.sort((a,b)=>{
        if(a.price > b.price) return -1;
        if(a.price < b.price) return 1;
        if(a.price == b.price) return 0
    });
    return products
}
function sortProductsByPrice(order, products){
    if(order === `asc`){
       return sortProductsPriceAsc(products);
    }
    if(order === 'desc'){
        return sortProductsPriceDesc(products)
    } 
}
function printProducts(products){
    for(let product of products){
        console.log(JSON.stringify(product));
    }
}
function Main(products){
    printProducts(sortProductsByPrice('asc',filterProductsByCategory(products,`Electronics`)));
}
Main(products);

const array1= ["test","other"];
const array2= ["sometext"];
console.log(array1.concat(array2));
const lowestPrice = (products) =>{
    const prices = products.map(product => product.price);
    return Math.min(...prices); //check the ... what it means.
}
console.log(lowestPrice(products));