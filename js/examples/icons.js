(function() {

var tree = Vtree.create({
	container: jQuery("#treeContainerIcons"),
	dataSource: {
		tree: {
			id: "iconsTree",
			nodes: [{
				id: "master",
				title: "master node",
				customClass: "title",
				iconClass:"default",
				hasChildren: true,
				nodes: [{
					id: "parent_1",
					title: "parent 1",
					iconPath: {
						open: "/vtree/img/icon_folder_open_16.png",
						close: "/vtree/img/icon_folder_closed_16.png"
					},
					hasChildren: true,
					nodes: [{
						id: "child_1",
						title: "child 1",
						iconPath: "/vtree/img/file.png",
						hasChildren: false
					}]
				},{
					id: "parent_2",
					title: "parent 2",
					iconClass: "customFolder",
					hasChildren: true,
					nodes: [{
						id: "child_2",
						title: "child 2",
						iconClass: "customFile",
						hasChildren: false
					}]
				}]
			}]
		}
	},
	initiallyOpen: ["parent_1", "parent_2"] // all parents will be open too
});

})();