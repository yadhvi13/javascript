const code = ["js","cpp","ruby","python","java"]
code.forEach( function (item) {
  //  console.log(item);
} )

// Arrow Function
const coding = ["js","cpp","ruby","python","java"]
coding.forEach( (value) => {
    //console.log(value);
})


//function printMe(item){
//    console.log(item);
//}
//coding.forEach(printMe)

coding.forEach( (item,index,arr)=>{
  //  console.log(item,index,arr);
} )


const mycoding = [
  {
  langaugename : "javascript",
  langaugefilename : "js"
},
{
  langaugename : "Java",
  langaugefilename : "java"
},
{
  langaugename : "Python",
  langaugefilename : "py"
}]

mycoding.forEach( (item)=>{

  console.log(`language name is ${item.langaugename} and language file name is ${item.langaugefilename}`);
 // console.log(item.langaugefilename);
})