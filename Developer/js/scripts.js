// السؤال الاول
// تعريفات
const languages = ["html","css","js","php"]
let needed_language=3;



console.log("مرحا بك في برنامج التوظيف")
let name = parseInt(prompt("ما اسمك"))
let age = parseInt(prompt("كم عمرك"))
let exp =prompt("كم عدد سنوات الخبرة لديك")
console.log("لغات البرمجة ")

console.log("1."+ languages[0]);
console.log("2."+ languages[1]);
console.log("3."+ languages[2]);
console.log("4."+ languages[3]);

let skill1=prompt("اختر لغة تتقنها")
let skill2=prompt("اختر لغة اخرى تتقنها")

// الشروط
if ((age>25) && (age<40) && (exp>3) && (skill1==languages[2] || skill2==languages[2]))
   {console.log("مقبول");} 

else {   
    console.log("مرفوض");
}


// ------------------------------
let temperature=[40,38,32,16,8]
function logger(temperature){
    for(let i = 0; i < temperature. length; i++){
        console.log(temperature[i]);
    }

} 

// ------------------------------
let feh_temp=[55,42,30,14]
function tocel(feh_temp){
    for(let i = 0; i < feh_temp. length; i++){
        result_array. push((parseInt(feh_temp[i]-32)*(5/9)));
    }
    return result_array;
}

// -------------------------------------
let hottestdays=[80,44,66,50]
function hottestdays(cel_temp){
    for(let i = 0; i < cel_temp. length; i++){
        if temperature[i] > min_value){
            hottestdays.push(temperature[i])
        }
    }
    return hottestdays;
}