(function() {
	var jsonSourceCookie = {
		tree: {
			id: "rootCookie",
			nodes: [{
				id: "master",
				title: "master node",
				description: "title of the master link",
				hasChildren: true,
				nodes: [{
					id: "parent_1",
					title: "parent 1",
					description: "title of the parent 1 link",
					hasChildren: true,
					nodes: [{
						id: "child_1",
						title: "child 1",
						description: "title of the child 1 link",
						hasChildren: false
					}]
				},{
					id: "parent_2",
					title: "parent 2",
					description: "title of parent 2 link",
					hasChildren: false
				}]
			}]
		}
	};

	var treeCookie = Vtree.create({
		container: jQuery("#treeContainerCookie"),
		dataSource: jsonSourceCookie,
		initiallyOpen: ["master", "parent_1"], //cookie has priority over this setting
		initiallyChecked: ["parent_1"], //cookie preferences have priority over this setting
		plugins:["checkbox", "cookie"]
	});
})();