var mysql = require('../mysql');

var Farmer = {
    getAllFarmers: function(callback){
        return mysql.query("SELECT * FROM farmer", callback);
    },

    getFarmerById: function(id, callback){
        return mysql.query("SELECT * FROM farmer WHERE farmer_id = ?", [id], callback);
    },

    addFarmer: function(Farmer, callback){
        return mysql.query("INSERT INTO farmer (first_name, middle_name, last_name, contact_no, address) VALUES (?, ?, ?, ?, ?)", [Farmer.first_name, Farmer.middle_name, Farmer.last_name, Farmer.contact_no, Farmer.address], callback);
    },

    deleteFarmer: function(id, callback){
        return mysql.query("DELETE FROM farmer WHERE farmer_id = ?", [id], callback)
    },

    updateFarmer: function(id, Farmer, callback){
        return mysql.query("UPDATE farmer SET first_name = ?, middle_name = ?, last_name = ?, contact_no = ?, address = ? WHERE farmer_id = ?", [Farmer.first_name, Farmer.middle_name, Farmer.last_name, Farmer.contact_no, Farmer.address, id], callback);
    }
};

module.exports = Farmer;
