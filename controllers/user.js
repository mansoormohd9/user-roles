var db = require("../db");

module.exports = {
	getData : function(req, res){
    return res.json(db.users.map(x => {
			const role = db.roles.find(y => y.id == x.roleId);
			if(role) {
				x.roleName = role.roleName;
			}
			return x;
		}));
	},

	getRoles : function(req, res){
    return res.json(db.roles.map(x => x.roleName));
	},

	removeData: function(req, res){
    db.users = db.users.filter(x => x.id !== req.params.id);
    
    return res.json({});
	},

	addData: function(req, res){
    var nextId = db.users[db.users.length-1].id + 1;
		const data = req.body;
      
    db.users.push({id: nextId, name: data.name, email: data.email, id: data.id});

		return res.json({ id: nextId });
	},
	updateData: function(req, res){
		const data = req.body;
    
		var user = db.users.find(x => x.id == data.id);
		if(user) {
			user.name = data.name;
			user.email = data.email;
			const role = db.roles.find(y => y.roleName == data.roleName);
			if(role) {
				user.roleId = role.id;
			}
		}

		return res.json({});
	}
};