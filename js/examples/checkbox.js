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

	plugins:["checkbox"],
	// otional. all parents will be open automatically.
	initiallyOpen: ["parent_1", "parent_2", "parent_3"],
	// optional. default value is true.
	displayCheckbox: true,
	// list of initially checked nodes
	initiallyChecked: ["child_1"],
	//optional. default value is 'checkParents'. Checking a node check all his parents automatically. In this case checking child_1 at initialisation checked all his parents.
	checkBehaviour: "checkParents",
	// optional. default value is 'checked'
	checkedClass: "checked",
	//optional. default value is 'uncheckChildren'. Unchecking a node uncheck all his children automatically
	uncheckBehaviour: "uncheckChildren",
	// a list of disabled nodes
	disabledCheckboxes: ["parent_3"],
	//optional. by default value is 'disableChildren'. in this case disabling parent_3 will disable automatically his children.
	disableBehaviour: "disableChildren",
	// optional. default value is "disabled". The class applied to disabled nodes.
	disabledClass: "disabled",
});

})();