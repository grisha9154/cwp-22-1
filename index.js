const math = {
    "+":(first,second)=>{return Number(first)+Number(second)},
    "-":(first,second)=>{return Number(first)-Number(second)},
    "*":(first,second)=>{return Number(first)*Number(second)},
    "/":(first,second)=>{return Number(first)/Number(second)},
};
console.log('Hi, 0.0.1');
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

module.exports = polishNatation;