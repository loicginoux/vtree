(function() {

//json data source
var jsonSource_checkbox = {
	tree: {
		id: "checkbox",
		nodes: [{
			id: "master",
			title: "master node",
			hasChildren: true,
			nodes: [{
				id: "parent_1",
				title: "parent 1",
				hasChildren: true,
				nodes: [{
					id: "child_1",
					title: "child 1",
					hasChildren: false
				}]
			},{
				id: "parent_2",
				title: "parent 2",
				hasChildren: true,
				nodes: [{
					id: "child_2",
					title: "child 2",
					hasChildren: false
				}]
			},{
				id: "parent_3",
				title: "parent 3",
				hasChildren: true,
				nodes: [{
					id: "child_3",
					title: "child 3",
					hasChildren: false
				}]
			}]
		}]
	}
};

//initialisation
var tree = Vtree.create({
	container: jQuery("#treeContainerCheckbox"),
	dataSource: jsonSource_checkbox,
	disabled_checkboxes: ["parent_2"], //all children will be disabled too
	initially_checked: ["child_1"], // all parents will be checked too
	initially_open: ["parent_1", "parent_2", "parent_3"], // all parents will be open too
	plugins:["checkbox"]
});

})();