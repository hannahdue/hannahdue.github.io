var emissionAsia = 16274.1;
var emissionEurope = 4209.3;
var emissionNorthamerica = 6035.6;
var emissionSouthamerica = 1261.5;
var emissionAfrica = 1235.5;
var emissionAustralia = 2100.5;
var emissionAsiaStart = 12954.7;
var emissionEuropeStart = 4965.7;
var emissionNorthamericaStart = 6600.4;
var emissionSouthamericaStart = 1132.6;
var emissionAfricaStart = 1028;
var emissionAustraliaStart = 1993;
var totalEmission = emissionAsia + emissionEurope + emissionNorthamerica + emissionSouthamerica + emissionAfrica + emissionAustralia;
var relAsia = (emissionAsia / totalEmission) * 100;
var relEurope = (emissionEurope / totalEmission) * 100;
var relNorthamerica = (emissionNorthamerica / totalEmission) * 100;
var relSouthamerica = (emissionSouthamerica / totalEmission) * 100;
var relAfrica = (emissionAfrica / totalEmission) * 100;
var relAustralia = (emissionAustralia / totalEmission) * 100;
var growthrateAsia = ((emissionAsia / emissionAsiaStart) - 1) * 100;
var growthrateEurope = ((emissionEurope / emissionEuropeStart) - 1) * 100;
var growthrateNorthamerica = ((emissionNorthamerica / emissionNorthamericaStart) - 1) * 100;
var growthrateSouthamerica = ((emissionSouthamerica / emissionSouthamericaStart) - 1) * 100;
var growthrateAfrica = ((emissionAfrica / emissionAfricaStart) - 1) * 100;
var growthrateAustralia = ((emissionAustralia / emissionAustraliaStart) - 1) * 100;
var growthrateAsia_abs = emissionAsia - emissionAsiaStart;
var growthrateEurope_abs = emissionEurope - emissionEuropeStart;
var growthrateNorthamerica_abs = emissionNorthamerica - emissionNorthamericaStart;
var growthrateSouthamerica_abs = emissionSouthamerica - emissionSouthamericaStart;
var growthrateAfrica_abs = emissionAfrica - emissionAfricaStart;
var growthrateAustralia_abs = emissionAustralia - emissionAustraliaStart;
console.log("Die Gesamtemission ist: " + totalEmission);
console.log("Gesamtemissionen Asien: " + emissionAsia);
console.log("Gesamtemissionen Europa: " + emissionEurope);
console.log("Gesamtemissionen Nordamerika: " + emissionNorthamerica);
console.log("Gesamtemissionen Südamerika: " + emissionSouthamerica);
console.log("Gesamtemissionen Afrika: " + emissionAfrica);
console.log("Gesamtemissionen Australien: " + emissionAustralia);
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
//# sourceMappingURL=script.js.map