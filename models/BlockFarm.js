var mysql = require('../mysql');

var BlockFarm = {
    getAllBlockFarms: function(callback) {
        return mysql.query("SELECT * FROM block_farm", callback);
    },

    getBlockFarmById: function(id, callback) {
        return mysql.query("SELECT * FROM block_farm WHERE block_farm_id = ?", [id], callback);
    },

    addBlockFarm: function(Farm, callback) {
        return mysql.query("INSERT INTO block_farm (name, farm_farm_id) VALUES (?,?)", [Farm.name, Farm.farm_farm_id], callback);
    },

    deleteBlockFarm: function(id, callback) {
        return mysql.query("DELETE FROM block_farm WHERE block_farm_id = ?", [id], callback)
    },

    updateBlockFarm: function(id, Farm, callback) {
        return mysql.query("UPDATE block_farm SET name = ?, farm_farm_id = ? WHERE block_farm_id = ?", [Farm.name, Farm.farm_farm_id, id], callback);
    }
};

module.exports = BlockFarm;
