const math = {
    "+":(first,second)=>{return Number(first)+Number(second)},
    "-":(first,second)=>{return Number(first)-Number(second)},
    "*":(first,second)=>{return Number(first)*Number(second)},
    "/":(first,second)=>{return Number(first)/Number(second)},
};

function polishNatation(polishStr){
    let array = polishStr.split(' ');
    let number = [];
    array.forEach((element)=>{
       if(element!=='+'&&element!=='-'&&element!=='*'&&element!=='/'){
           number.push(element);
       }else{
           let second = number.pop();
           let first = number.pop();
           number.push(math[element](first,second));
       }
    });
    return number[0];
}
let a = '5 3 + 10 *';

let test = polishNatation(a);
console.log(test);