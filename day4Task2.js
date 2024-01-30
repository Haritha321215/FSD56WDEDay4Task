//Do the below programs in arrow functions.
////===========================================================================================
//1. Print odd numbers in an array

////--------Arrow---------------------------------------------------------------------------
console.log("1. Print odd numbers in an array using arrow function")
const oddCheck = (arr)=>{
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            result.push(arr[i]);
        }
    }
    return result;        
}
arr = [1,4,5,6,4,3,7,9];
console.log(oddCheck(arr));
////======================================================================================
//2. Convert all the strings to title caps in a string array

////--------Arrow---------------------------------------------------------------------------
console.log("2. Convert all the strings to title caps in a string array using arrow function")
const titleCaps =  (arr)=>{
        let result = [];
        for(let i = 0; i < arr.length; i++){
            result.push(arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase());
        }
        return result;        
    }
let uin="Convert all the strings to title caps in a string arrow";
let strArray=uin.split(" ");
console.log(titleCaps(strArray));
////==========================================================================================
//3. Sum of all numbers in an array

////---------Arrow--------------------------------------------------------------------------
console.log("3. Sum of all numbers in an array using arrow functions");
const sumOfNumbers = (arr)=>{
    let sum=0;
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i]
    }
    return sum;        
}
let numArray=[4,7,3,9,5,7];
console.log(sumOfNumbers(numArray));
////========================================================================================

//4. Return all the prime numbers in an array
////--------Arrow---------------------------------------------------------------------------
console.log("4. Return all the prime numbers in an array using arrow functions");
const primeCheck = (num)=>{
    let flag = true;
    for (let i = 2; i <= num - 1; i++){
        if (num % i == 0) {
            flag = false;
            break;
        } 
    }
    return flag;     
}
const primeNumbers = (arr)=>{
    let primes=[];
    for(let i = 0; i < arr.length; i++){
       if(primeCheck(arr[i]))
            primes.push(arr[i]) 
    }
    return primes;        
}
let numArr=[4,7,3,9,5,7];
console.log(primeNumbers(numArr));

////========================================================================================

//5. Return all the palindromes in an array
////----------Arrow------------------------------------------------------------------------
console.log("5. Return all the palindromes in an array using arrow functions");
const palindromeCheck =(num)=>{
    //console.log(num);
    let flag = false;
    let numcopy=num;
    let rev=0;
    while(numcopy>0){
        rev=(rev*10)+(numcopy%10);
        numcopy=parseInt(numcopy/10);
    }
    if(num===rev){
        flag= true;
    }
    return flag; 
}
const palindromes =  (arr)=>{
    let palindromes=[];
    for(let i = 0; i < arr.length; i++){
       if(palindromeCheck(arr[i]))
       palindromes.push(arr[i]) 
    }
    return palindromes;        
}
let numArr1=[234,424,656,789,989,232];
console.log(palindromes(numArr1));
////==================================================================================