'use strict'
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var allText = 'si nada';

/**
 * 
 */
module.exports.getReport = function (data, success, error) {
    console.log('getReport...');

    var nameFile = data.code + '_' + data.aplication + '.txt';
    var basePath = 'file:///Users/leonardovalbuena/Documents/workspaceUniandes/pruebasAut/proyecto/Android_worker/reports/'; 
    var file = '';
    
    if (data.subType === 'random') {
        file = basePath + data.subType + '/' + nameFile;
    } else if (data.subType === 'BDD') {
        file = basePath + '/bdd/' + data.aplication + '/' + nameFile;
    }
    readTextFile(file);
    success(allText);
};



function readTextFile(file) {
    console.log('ruta-reporte: ', file);
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                allText = rawFile.responseText.replace(/\n/g, "<br>"); ;
                
                console.log(allText);
                return allText;
            }
        }
    }
    rawFile.send(null);
}