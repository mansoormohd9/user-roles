module.exports = function(req) {
  var menu = [
    {
      value: "Users", data: [
        { href: '/', value: "Manage Users"}
      ]
    },
    {
      value: "Roles", data: [
        { href: '/roles', value: "Manage Roles"}
      ]
    }
  ]

  for (var i=0; i<menu.length; i++){
    for (var j = 0; j < menu[i].data.length; j++) 
    {
      var item = menu[i].data[j];
      if (item.href == req.url)
        item.css = "selected";
    }
  }

  return {menu};
}