(function() {



var tree = Vtree.create({
	container: jQuery("#treeContainerBasic"),
	dataSource: {
		tree: {
			id: "basic",
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
	},
	initially_open: ["parent_1"] // all parents will be open too
});

})();