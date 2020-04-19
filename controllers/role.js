var db = require("../db");

module.exports = {
	getData : function(req, res){
    return res.json(db.roles);
	},


	removeData: function(req, res){
    db.roles = db.roles.filter(x => x.id != req.params.id);
    
    return res.json({});
	},

	addData: function(req, res){
    var nextId = db.roles[db.roles.length-1].id + 1;
		const data = req.body;
      
    db.roles.push({id: nextId, roleName: data.roleName});

		return res.json({ id:nextId });
	},
	updateData: function(req, res){
		const data = req.body;
    
    var role = db.roles.find(x => x.id == data.id);
    if(role) {
			role.roleName = data.roleName;
		}
		return res.json();
	}
};