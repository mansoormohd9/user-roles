var db = require("../db");

module.exports = {
	getData : function(req, res){
    return res.json(db.roles);
	},


	removeData: function(req, res){
    db.roles = db.roles.filter(x => x.roleId !== req.params.roleId);
    
    return res.json({});
	},

	addData: function(req, res){
    var nextId = db.roles[db.roles.length-1].roleId + 1;
		const data = req.body;
      
    db.roles.push({roleId: nextId, roleName: data.roleName});

		return res.json({ id:nextId });
	},
	updateData: function(req, res){
		const data = req.body;
    
    var role = db.roles.find(x => x.roleId == data.roleId);
    if(role) {
			role.roleName = data.roleName;
		}
		return res.json();
	}
};