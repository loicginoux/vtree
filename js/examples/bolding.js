(function() {

	var jsonSource = {
		tree: {
			id: "root",
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

	var tree = Vtree.create({
		container: jQuery("#treeContainerBolding"),
		dataSource: jsonSource,
		initially_open: ["parent_1"], // all parents will be open too
		initially_bold: ["parent_1"],  // all parents will be bold if cascading_bold is set to true
		cascading_bold: false, // bolding/unbolding a node doesn't affect his parents/children bolding state
		plugins:["bolding"]
	});

})();