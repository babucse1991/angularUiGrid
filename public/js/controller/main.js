//main.js


'use strict'

angular.module('shopCartApp')

.controller('ShopCartCtrl', function ($scope, $uibModal, $log) {

	
	var linkCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
    '  <a href="/#studentDetail">Click me</a>' +
    '</div>';
	
	$scope.dynamicColumns = [{ field: 'name', displayName: 'Name', columnType:'String', enableCellEdit : true}, 
	                         { field:'age', displayName:'Age', columnType:'Integer', enableCellEdit : false }, 
	                         {field:'place', displayName:'Place', columnType:'String', enableCellEdit : false },
	                         {field:'phoneNumber', displayName:'Phone Number', columnType:'Integer', enableCellEdit : false },
	                         {
	                        	  field: 'href',
	                        	  displayName: 'Link',
	                        	  enableCellEdit: false,
	                        	  cellTemplate: linkCellTemplate
	                        	 }];

	$scope.deleteAray = [];

	$scope.adIndex = function (indx) {
		$scope.deleteAray.push(indx);
	};

	$scope.removeColumn = function () {

		angular.forEach($scope.deleteAray, function(key) {
			$scope.dynamicColumns.splice(key.field,1);
		});
		$scope.deleteAray = [];
	};


	$scope.columnsSelected = $scope.dynamicColumns;
	$scope.myData = [

	                 {
	                     "no":"001",
	                     "name":"babu",
	                     "age":"20",
	                     "place":"Chennai",
	                     "phoneNumber":"9098765643"
	                 },
	                 {
	                     "no":"002",
	                     "name":"anbu",
	                     "age":"27",
	                     "place":"Coimbatore",
	                     "phoneNumber":"9098765643"
	                 },
	                 {
	                     "no":"003",
	                     "name":"kumar",
	                     "age":"20",
	                     "place":"Perambalur",
	                     "phoneNumber":"9098765643"
	                 },
	                 {
	                     "no":"004",
	                     "name":"raja",
	                     "age":"25",
	                     "place":"Mathurai",
	                     "phoneNumber":"9098765643"
	                 },
	                 {
	                     "no":"005",
	                     "name":"raju",
	                     "age":"29",
	                     "place":"Palani",
	                     "phoneNumber":"9098765643"
	                 },
	                 {
	                     "no":"006",
	                     "name":"ramu",
	                     "age":"67",
	                     "place":"Trichy",
	                     "phoneNumber":"9098765643"
	                 },
	                 {
	                     "no":"007",
	                     "name":"rani",
	                     "age":"34",
	                     "place":"Namakkal",
	                     "phoneNumber":"9098765643"
	                 },
	                 {
	                     "no":"008",
	                     "name":"ravi",
	                     "age":"45",
	                     "place":"Coimbatore",
	                     "phoneNumber":"9098765643"
	                 },
	                 {
	                     "no":"009",
	                     "name":"ram",
	                     "age":"20",
	                     "place":"Karur",
	                     "phoneNumber":"9098765643"
	                 },
	                 {
	                     "no":"010",
	                     "name":"Jay",
	                     "age":"67",
	                     "place":"Salem",
	                     "phoneNumber":"9098765643"
	                 },
	                 {
	                     "no":"011",
	                     "name":"Mehta",
	                     "age":"20",
	                     "place":"Trichy",
	                     "phoneNumber":"9098765643"
	                 },
	                 {
	                     "no":"012",
	                     "name":"ravi",
	                     "age":"20",
	                     "place":"namakkal",
	                     "phoneNumber":"9098765643"
	                 }

	             ];  
	$scope.gridOptions = { 
			data: 'myData',
			columnDefs: 'columnsSelected',
			enableCellSelection: true,
			enableRowSelection: false,
			enableCellEditOnFocus: true
	};

	/* Pop up window*/




	$scope.animationsEnabled = true;

	$scope.open = function (size) {

		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'views/addColumn.html',
			controller: 'ModalInstanceCtrl',
			size: size,
			resolve: {
				user: function () {
					return $scope.user;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.dynamicColumns.push(selectedItem);
			$scope.gridOptions.columnsSelected =  $scope.dynamicColumns;

		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

	$scope.toggleAnimation = function () {
		$scope.animationsEnabled = !$scope.animationsEnabled;
	};

});


/*
app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

	$scope.user = {};

	$scope.ok = function () {
		$uibModalInstance.close($scope.user);
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});*/