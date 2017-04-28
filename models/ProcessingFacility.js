var mysql = require('../mysql');

var ProcessingFacility = {
    getAllProcessingFacilities: function(callback) {
        return mysql.query("SELECT * FROM processing_facility", callback);
    },

    getProcessingFacilityById: function(id, callback) {
        return mysql.query("SELECT * FROM farm WHERE farm_id = ?", [id], callback);
    },

    addProcessingFacility: function(ProcessingFacility, callback) {
        return mysql.query("INSERT INTO processing_facility (name, site_address, metro_adress, telephone, fax, type, region, rated_daily_capacity, warehouse_capacity, feed_stock, operation_date, coordinates) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", [ProcessingFacility.name, ProcessingFacility.site_address, ProcessingFacility.metro_adress, ProcessingFacility.telephone, ProcessingFacility.fax, ProcessingFacility.type, ProcessingFacility.region, ProcessingFacility.rated_daily_capacity, ProcessingFacility.warehouse_capacity, ProcessingFacility.feed_stock, ProcessingFacility.operation_date, ProcessingFacility.coordinates], callback);
    },

    deleteProcessingFacility: function(id, callback) {
        return mysql.query("DELETE FROM processing_facility WHERE processing_facility_id = ?", [id], callback)
    },

    updateProcessingFacility: function(id, ProcessingFacility, callback) {
        return mysql.query("UPDATE processing_facility SET name = ?,site_address = ?, metro_adress = ?, telephone = ?, fax = ?, type = ?, region = ?, rated_daily_capacity = ?, warehouse_capacity = ?, feed_stock = ?, operation_date = ?, coordinates = ? WHERE processing_facility_id = ?", [ProcessingFacility.name, ProcessingFacility.site_address, ProcessingFacility.metro_adress, ProcessingFacility.telephone, ProcessingFacility.fax, ProcessingFacility.type, ProcessingFacility.region, ProcessingFacility.rated_daily_capacity, ProcessingFacility.warehouse_capacity, ProcessingFacility.feed_stock, ProcessingFacility.operation_date, ProcessingFacility.coordinates, id], callback);
    }
};

module.exports = ProcessingFacility;
