shoppingApp.controller('shoppingController', ['$scope', function($scope) {
    
    $scope.items = ["Milk", "Bread", "Cheese"];
    
    
    $scope.addItem = function() {
        
        if($scope.items.indexOf($scope.shoppingItem) === -1) {
            $scope.errorText='';
            $scope.items.push($scope.shoppingItem);
            $scope.shoppingItem='';
        } else {
            $scope.errorText = "The item is already in your shopping list.";
        }  
    };
    
    $scope.removeItem = function(index) {
        $scope.errorText = "";
        $scope.items.splice(index, 1);
    };
}]);