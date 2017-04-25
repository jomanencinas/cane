var mysql = require('../mysql');

var Farm = {
    getAllFarms: function(callback) {
        return mysql.query("SELECT * FROM farm", callback);
    },

    getFarmById: function(id, callback) {
        return mysql.query("SELECT * FROM farm WHERE farm_id = ?", [id], callback);
    },

    addFarm: function(Farm, callback) {
        return mysql.query("INSERT INTO farm (name, location, island_group, size, area_planted, farm_yield, sugar_yield, farmer_farmer_id) VALUES (?,?,?,?,?,?,?,?)", [Farm.name, Farm.location, Farm.island_group, Farm.size, Farm.area_planted, Farm.farm_yield, Farm.sugar_yield, Farm.farmer_farmer_id], callback);
    },

    deleteFarm: function(id, callback) {
        return mysql.query("DELETE FROM farm WHERE farm_id = ?", [id], callback)
    },

    updateFarm: function(id, Farm, callback) {
        return mysql.query("UPDATE farm SET name = ?, location = ?, island_group = ?, size = ?, area_planted = ?, farm_yield = ?, sugar_yield = ? WHERE farm_id = ?", [Farm.name, Farm.location, Farm.island_group, Farm.size, Farm.area_planted, Farm.farm_yield, Farm.sugar_yield, id], callback);
    }
};

module.exports = Farm;
