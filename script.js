
function crcr(){

    const casa = "casa";

var larpt = document.getElementById("larpt").value;
var ancpt = document.getElementById("ancpt").value;
var larmp = document.getElementById("larmp").value;
var ancmp = document.getElementById("ancmp").value;
var reflarmp = document.getElementById("reflarmp").value;
var refancmp = document.getElementById("refancmp").value;

var larmpr = (larmp - reflarmp);
var ancmpr = (ancmp - refancmp);

//option1
var optlarlar = parseInt(larmpr/larpt);
var optancanc = parseInt(ancmpr/ancpt);
var opt1 = optlarlar*optancanc;
console.log("opt1: " + opt1);

//option2
var optlaranc = parseInt(larmpr/ancpt);
var optanclar = parseInt(ancmpr/larpt);
var opt2 = optlaranc*optanclar;
console.log("opt2: " + opt2);

if (opt1 > opt2){
    bestopt = opt1;
    var aremp = (((larmp)/1000)*((ancmp)/1000)); 
    var arept = ((((larpt/1000)*(ancpt/1000))) *opt1);
    desp = (((aremp - arept) / aremp) *100);

    console.log("area mp " + aremp);
    console.log("Area usada en PT: "+ arept);
    console.log("desp: " + desp);


} else{
    bestopt = opt2;
    var aremp = (((larmp)/1000)*((ancmp)/1000)); 
    var arept = ((((larpt/1000)*(ancpt/1000)))*opt2);
    desp = (((aremp - arept) / aremp) *100);

    console.log("area mp " +aremp);
    console.log("Area usada en PT: "+ arept);
    console.log("desp: " + desp);

}

console.log("Best Option: " + bestopt);


document.getElementById("bocrcr").innerHTML = ("En la mejor opción se obtienen : "  + bestopt + " und de PT. Con un % de desperdicio de MP del: " + desp.toFixed(2) + " %." );

};

