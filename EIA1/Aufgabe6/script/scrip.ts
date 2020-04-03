var emissionAsia:number = 16274.1;
var emissionEurope:number = 4209.3;
var emissionNorthamerica:number = 6035.6;
var emissionSouthamerica:number = 1261.5;
var emissionAfrica:number = 1235.5;
var emissionAustralia:number = 2100.5;

var totalEmission:number = emissionAsia + emissionEurope + emissionNorthamerica + emissionSouthamerica + emissionAfrica + emissionAustralia;

var emissionAsiaStart:number = 12954.7;
var emissionEuropeStart:number = 4965.7;
var emissionNorthamericaStart:number = 6600.4;
var emissionSouthamericaStart:number = 1132.6;
var emissionAfricaStart:number = 1028;
var emissionAustraliaStart:number = 1993;

var relAsia:number = (emissionAsia / totalEmission)*100;
var relEurope:number = (emissionEurope / totalEmission)*100;
var relNorthamerica:number = (emissionNorthamerica / totalEmission)*100;
var relSouthamerica:number = (emissionSouthamerica / totalEmission)*100;
var relAfrica:number = (emissionAfrica / totalEmission)*100;
var relAustralia:number = (emissionAustralia / totalEmission)*100;

var growthrateAsia:number = ((emissionAsia / emissionAsiaStart)-1)*100;
var growthrateEurope:number = ((emissionEurope / emissionEuropeStart)-1)*100;
var growthrateNorthamerica:number = ((emissionNorthamerica / emissionNorthamericaStart)-1)*100;
var growthrateSouthamerica:number = ((emissionSouthamerica / emissionSouthamericaStart)-1)*100;
var growthrateAfrica:number = ((emissionAfrica / emissionAfricaStart)-1)*100;
var growthrateAustralia:number = ((emissionAustralia / emissionAustraliaStart)-1)*100;

var growthrateAsia_abs:number = emissionAsia-emissionAsiaStart;
var growthrateEurope_abs:number = emissionEurope-emissionEuropeStart;
var growthrateNorthamerica_abs:number = emissionNorthamerica-emissionNorthamericaStart;
var growthrateSouthamerica_abs:number = emissionSouthamerica-emissionSouthamericaStart;
var growthrateAfrica_abs:number = emissionAfrica-emissionAfricaStart;
var growthrateAustralia_abs:number = emissionAustralia-emissionAustraliaStart;


function europeFunction(){
    document.querySelector(".title").innerHTML = "Europe";
    document.querySelector(".kontinent").innerHTML = "Europe";
    document.querySelector(".gesamtemission").innerHTML = "" + emissionEurope;
    document.querySelector(".relativemission").innerHTML = "" + relEurope.toFixed(2) + " %";
    document.querySelector(".wachstumprozent").innerHTML = "" + growthrateEurope.toFixed(2) + " %";
    document.querySelector(".wachstumabsolut").innerHTML = "" + growthrateEurope_abs.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height:13.5%");
}

document.querySelector(".europe").addEventListener("click", europeFunction);

function northamericaFunction(){
    document.querySelector(".title").innerHTML = "North America";
    document.querySelector(".kontinent").innerHTML = "North America";
    document.querySelector(".gesamtemission").innerHTML = "" + emissionNorthamerica;
    document.querySelector(".relativemission").innerHTML = "" + relNorthamerica.toFixed(2) + " %";
    document.querySelector(".wachstumprozent").innerHTML = "" + growthrateNorthamerica.toFixed(2) + " %";
    document.querySelector(".wachstumabsolut").innerHTML = "" + growthrateNorthamerica_abs.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height:19.4%");
}

document.querySelector(".northamerica").addEventListener("click", northamericaFunction);

function southamericaFunction(){
    document.querySelector(".title").innerHTML = "South America";
    document.querySelector(".kontinent").innerHTML = "South America";
    document.querySelector(".gesamtemission").innerHTML = "" + emissionSouthamerica;
    document.querySelector(".relativemission").innerHTML = "" + relSouthamerica.toFixed(2) + " %";
    document.querySelector(".wachstumprozent").innerHTML = "" + growthrateSouthamerica.toFixed(2) + " %";
    document.querySelector(".wachstumabsolut").innerHTML = "" + growthrateSouthamerica_abs.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height:4.1%");
}

document.querySelector(".southamerica").addEventListener("click", southamericaFunction);

function africaFunction(){
    document.querySelector(".title").innerHTML = "Africa";
    document.querySelector(".kontinent").innerHTML = "Africa";
    document.querySelector(".gesamtemission").innerHTML = "" + emissionAfrica;
    document.querySelector(".relativemission").innerHTML = "" + relAfrica.toFixed(2) + " %";
    document.querySelector(".wachstumprozent").innerHTML = "" + growthrateAfrica.toFixed(2) + " %";
    document.querySelector(".wachstumabsolut").innerHTML = "" + growthrateAfrica_abs.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height:4%");
}

document.querySelector(".africa").addEventListener("click", africaFunction);

function asiaFunction(){
    document.querySelector(".title").innerHTML = "Asia";
    document.querySelector(".kontinent").innerHTML = "Asia";
    document.querySelector(".gesamtemission").innerHTML = "" + emissionAsia;
    document.querySelector(".relativemission").innerHTML = "" + relAsia.toFixed(2) + " %";
    document.querySelector(".wachstumprozent").innerHTML = "" + growthrateAsia.toFixed(2) + " %";
    document.querySelector(".wachstumabsolut").innerHTML = "" + growthrateAsia_abs.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height:52.3%");
}

document.querySelector(".asia").addEventListener("click", asiaFunction);

function australiaFunction(){
    document.querySelector(".title").innerHTML = "Australia";
    document.querySelector(".kontinent").innerHTML = "Australia";
    document.querySelector(".gesamtemission").innerHTML = "" + emissionAustralia;
    document.querySelector(".relativemission").innerHTML = "" + relAustralia.toFixed(2) + " %";
    document.querySelector(".wachstumprozent").innerHTML = "" + growthrateAustralia.toFixed(2) + " %";
    document.querySelector(".wachstumabsolut").innerHTML = "" + growthrateAustralia_abs.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height:4.1%");
}

document.querySelector(".australia").addEventListener("click", australiaFunction);


