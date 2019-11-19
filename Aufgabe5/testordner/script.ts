var emissionAsia:number = 16274.1;
var emissionEurope:number = 4209.3;
var emissionNorthamerica:number = 6035.6;
var emissionSouthamerica:number = 1261.5;
var emissionAfrica:number = 1235.5;
var emissionAustralia:number = 2100.5;

var emissionAsiaStart:number = 12954.7;
var emissionEuropeStart:number = 4965.7;
var emissionNorthamericaStart:number = 6600.4;
var emissionSouthamericaStart:number = 1132.6;
var emissionAfricaStart:number = 1028;
var emissionAustraliaStart:number = 1993;

var totalEmission:number = emissionAsia + emissionEurope + emissionNorthamerica + emissionSouthamerica + emissionAfrica + emissionAustralia;

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

console.log("Die Gesamtemission ist: " + totalEmission);

console.log("Gesamtemissionen Asien: " + emissionAsia)
console.log("Gesamtemissionen Europa: " + emissionEurope)
console.log("Gesamtemissionen Nordamerika: " + emissionNorthamerica)
console.log("Gesamtemissionen Südamerika: " + emissionSouthamerica)
console.log("Gesamtemissionen Afrika: " + emissionAfrica)
console.log("Gesamtemissionen Australien: " + emissionAustralia)

console.log("Teil1");
console.log("Der Anteil von Asiens Emissionen am Gesamtwert: " + relAsia + " Prozent");
console.log("Der Anteil von Europas Emissionen am Gesamtwert: " + relEurope + " Prozent");
console.log("Der Anteil von Nordamerikas Emissionen am Gesamtwert: " + relNorthamerica + " Prozent");
console.log("Der Anteil von Südamerikas Emissionen am Gesamtwert: " + relSouthamerica + " Prozent");
console.log("Der Anteil von Afrikas Emissionen am Gesamtwert: " + relAfrica + " Prozent");
console.log("Der Anteil von Australiens Emissionen am Gesamtwert: " + relAustralia + " Prozent");

console.log("Teil2");
console.log("Wachstumsrate Asienemissionen zwischen 2008 und 2018 (in %): " + growthrateAsia);
console.log("Wachstumsrate Europaemissionen zwischen 2008 und 2018 (in %): " + growthrateEurope);
console.log("Wachstumsrate Nordamerikaemissionen zwischen 2008 und 2018 (in %): " + growthrateNorthamerica);
console.log("Wachstumsrate Südamerikaemissionen zwischen 2008 und 2018 (in %): " + growthrateSouthamerica);
console.log("Wachstumsrate Afrikaemissionen zwischen 2008 und 2018 (in %): " + growthrateAfrica);
console.log("Wachstumsrate Australienemissionen zwischen 2008 und 2018 (in %): " + growthrateAustralia);

console.log("Teil3");
console.log("Wachstum Asienemissionen zwischen 2008 und 2018 (absolut): " + growthrateAsia_abs);
console.log("Wachstum Europaemissionen zwischen 2008 und 2018 (absolut): " + growthrateEurope_abs);
console.log("Wachstum Nordamerikaemissionen zwischen 2008 und 2018 (absolut): " + growthrateNorthamerica_abs);
console.log("Wachstum Südamerikaemissionen zwischen 2008 und 2018 (absolut): " + growthrateSouthamerica_abs);
console.log("Wachstum Afrikaemissionen zwischen 2008 und 2018 (absolut): " + growthrateAfrica_abs);
console.log("Wachstum Australienemissionen zwischen 2008 und 2018 (absolut): " + growthrateAustralia_abs);
