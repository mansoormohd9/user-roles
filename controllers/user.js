var db = require("../db");

module.exports = {
	getData : function(req, res){
    return res.json(db.users.map(x => {
			x.roleName = db.roles.find(y => y.roleId == x.roleId).roleName;
			return x;
		}));
	},

	getRoles : function(req, res){
    return res.json(db.roles.map(x => x.roleName));
	},

	removeData: function(req, res){
    db.users = db.users.filter(x => x.userId !== req.params.userId);
    
    return res.json({});
	},

	addData: function(req, res){
    var nextId = db.users[db.users.length-1].userId + 1;
		const data = req.body;
      
    db.users.push({userId: nextId, name: data.name, email: data.email, roleId: data.roleId});

		return res.json({ id: nextId });
	},
	updateData: function(req, res){
		const data = req.body;
    
		var user = db.users.find(x => x.userId == data.userId);
		if(user) {
			user.name = data.name;
			user.email = data.email;
			user.roleId = db.roles.find(y => y.roleName == data.roleName).roleId;
		}

		return res.json({});
	}
};