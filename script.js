
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

if(larpt > 0 && larmp>0 && ancpt>0 && ancmp>0){
document.getElementById("bocrcr").innerHTML = ("En la mejor opción se obtienen : "  + bestopt + " und de PT. Con un % de desperdicio de MP del: " + desp.toFixed(2) + " %." );

}else{

document.getElementById("bocrcr").innerHTML = ("Sin Datos, Ingrese las dimensiones de MP y de PT.")


}

};


function crrl(){


var larpt = document.getElementById("rolarpt").value;
var ancpt = document.getElementById("roancpt").value;
var larmp = document.getElementById("rolarmp").value;
var ancmp = document.getElementById("roancmp").value;
var reflarmp = 0;//document.getElementById("roreflarmp").value;
var refancmp = document.getElementById("rorefancmp").value;

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

if(larpt > 0 && larmp>0 && ancpt>0 && ancmp>0){
document.getElementById("robocrcr").innerHTML = ("En la mejor opción se obtienen : "  + bestopt + " und de PT. Con un % de desperdicio de MP del: " + desp.toFixed(2) + " %." );

}else{

document.getElementById("robocrcr").innerHTML = ("Sin Datos, Ingrese las dimensiones de MP y de PT.")


}

};


function crtr(){

    const casa = "casa";

var larpt = parseFloat(document.getElementById("larpt").value);
var ancpt = parseFloat(document.getElementById("ancpt").value);
var larmp = parseFloat(document.getElementById("larmp").value);
var ancmp = parseFloat(document.getElementById("ancmp").value);
var reflarmp = parseFloat(document.getElementById("reflarmp").value);
var refancmp = parseFloat(document.getElementById("refancmp").value);
var marsegTr = parseFloat(document.getElementById("marmptr").value);
var espcavTr = parseFloat(document.getElementById("espcavtr").value);
var undLado1 = parseFloat(document.getElementById("undlado1tr").value);
var undLado2 = parseFloat(document.getElementById("undlado2tr").value);


console.log("Dim A: ",larpt);
console.log("Dim B: ",ancpt);
console.log("Margen Tr : ",marsegTr);
console.log("Espacio Cav : ",espcavTr);
console.log("Und/lado 1 : ",undLado1);
console.log("Und/lado2 : ",undLado2);


var dimTroqI = ((((larpt+espcavTr)*undLado1)-espcavTr)+(marsegTr*2));
console.log("Dim I Troquel: ",dimTroqI);

var dimTroqJ = ((((ancpt+espcavTr)*undLado2)-espcavTr)+(marsegTr*2));
console.log("Dim J Troquel: ",dimTroqJ);

var undTroq = undLado1*undLado2
console.log("Und/tr: ", undTroq);

var larmpr = (larmp - reflarmp);
var ancmpr = (ancmp - refancmp);

//option1 Troq
var optlarlar = parseInt(larmpr/dimTroqI);
var optancanc = parseInt(ancmpr/dimTroqJ);
var opt1 = optlarlar*optancanc;
console.log("opt1: " + opt1);

//option2 Troq
var optlaranc = parseInt(larmpr/dimTroqJ);
var optanclar = parseInt(ancmpr/dimTroqI);
var opt2 = optlaranc*optanclar;
console.log("opt2: " + opt2);

if (opt1 > opt2){
    bestopt = opt1;
    var aremp = (((larmp)/1000)*((ancmp)/1000)); 
    var arept = ((((larpt/1000)*(ancpt/1000))) *opt1);
    desp = (((aremp - arept) / aremp) *100);
    var ptTotal= opt1*undTroq;
    console.log("Unidades / Lam troq: ", ptTotal)

    console.log("area mp " + aremp);
    console.log("Area usada en PT: "+ arept);
    console.log("desp: " + desp);


} else{
    bestopt = opt2;
    var aremp = (((larmp)/1000)*((ancmp)/1000)); 
    var arept = ((((larpt/1000)*(ancpt/1000)))*opt2);
    desp = (((aremp - arept) / aremp) *100);
    var ptTotal= opt2*undTroq;
    console.log("Unidades / Lam troq: ", ptTotal)

    console.log("area mp " +aremp);
    console.log("Area usada en PT: "+ arept);
    console.log("desp: " + desp);

}

console.log("Best Option: " + bestopt);

if(larpt > 0 && larmp>0 && ancpt>0 && ancmp>0){
document.getElementById("bocrcr").innerHTML = ("El troquel de " + undLado1 + " x " + undLado2 + " etrega un total de "+ undTroq + " unidades por troquel, tiene una dimension de: " + dimTroqI + " x " + dimTroqJ + " mm. " + "En la mejor opción se obtienen : "  + bestopt + " secciones para troquelar, y "+ ptTotal +" und de PT por lámina. " );
//Con un % de desperdicio de MP del: " + desp.toFixed(2) + " %." );

}else{

document.getElementById("bocrcr").innerHTML = ("Sin Datos, Ingrese las dimensiones de MP y de PT.")


}

};




