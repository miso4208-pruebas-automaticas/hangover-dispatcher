'use strict'

/**
 * Consulta los niveles de pruebas en la base de datos
 */
module.exports.getLevels = function (data, success, error) {
    let query = "SELECT * FROM `LEVELS` ORDER BY name ASC";
    db.query(query, (err, result) => {
        if (err) throw error;        
        success(result);
    });
};

module.exports.getApplications = function (data, success, error) {
    let query = "SELECT * FROM `APPLICATIONS` ORDER BY name ASC";
    db.query(query, (err, result) => {
        if (err) throw error;        
        success(result);
    });
};