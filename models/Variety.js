var mysql = require('../mysql');

var Variety = {
  getAllVarieties: function(callback) {
      return mysql.query("SELECT * FROM variety", callback);
  },

  getVarietyById: function(id, callback) {
      return mysql.query("SELECT * FROM variety WHERE variety_id = ?", [id], callback);
  },

  addVariety: function(Variety, callback) {
    return mysql.query("INSERT INTO variety (name, image, parentage, growth_habit, flowering, leaf_characteristics, stalk_characteristics, yield_characteristics, millable_stacks, average_yield, yield_potential, reaction_to_disease, remarks) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [Variety.name, Variety.image, Variety.parentage, Variety.growth_habit, Variety.flowering, Variety.leaf_characteristics, Variety.stalk_characteristics, Variety.yield_characteristics, Variety.millable_stacks, Variety.average_yield, Variety.yield_potential, Variety.reaction_to_disease, Variety.remarks], callback);
  },

  deleteVariety: function(id, callback) {
      return mysql.query("DELETE FROM variety WHERE variety_id = ?", [id], callback)
  },

  updateVariety: function(id, Variety, callback) {
      return mysql.query("UPDATE variety SET name = ?, image = ?, parentage = ?, growth_habit = ?, flowering = ?, leaf_characteristics = ?, stalk_characteristics = ?, yield_characteristics = ?, millable_stacks = ?, average_yield = ?, yield_potential = ?, reaction_to_disease = ?, remarks = ? WHERE variety_id = ?", [Variety.name, Variety.image, Variety.parentage, Variety.growth_habit, Variety.flowering, Variety.leaf_characteristics, Variety.stalk_characteristics, Variety.yield_characteristics, Variety.millable_stacks, Variety.average_yield, Variety.yield_potential, Variety.reaction_to_disease, Variety.remarks, id], callback);
  }
};

module.exports = Variety;
