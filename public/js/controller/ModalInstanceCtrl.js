'use strict'

angular.module('shopCartApp')

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

	$scope.user = {};

	$scope.ok = function () {
		$uibModalInstance.close($scope.user);
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});