(function() {


	var jsonSourceAjax = {
		tree: {
			id: "ajaxTree",
			nodes: [{
				id: "master",
				title: "master node",
				hasChildren: true
			}]
		}
	};

	var children_of_master = {
		"master":{
			nodes:[{
				id: "parent_1",
				title: "parent 1",
				hasChildren: true
			},{
				id: "parent_2",
				title: "parent 2",
				hasChildren: false
			}]
		}
	};

	var children_of_parent_1 = {
		"parent_1":{
			nodes:[{
				id: "child_1",
				title: "child 1",
				hasChildren: false
			}]
		}
	};

	//Mock ajax function
	jQuery.ajax = function (param) {
		console.log("mock ajax:",param);
		_mockAjaxOptions = param;

		if (param.data.action == "getChildren") {
			data = (param.data.nodes == "master") ? children_of_master : children_of_parent_1;
		}
		//call success handler
		setTimeout(function() {
			param.success(data, "textStatus", "jqXHR");
		}, 1000);
	};


	var ajaxTree = Vtree.create({
		container: jQuery("#treeContainerAjax"),
		dataSource: jsonSourceAjax,
		ajaxUrl: "/your/ajax/url",
		plugins: ["ajax_loading"]

	});

})();