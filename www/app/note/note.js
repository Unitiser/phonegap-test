angular.module('myApp').controller('NoteCtrl', function($scope, $http){

	//Create/open note file
	function onSuccess(fileSystem) {
		var directoryReader = fileSystem.root.createReader();
		directoryReader.readEntries(function(entries){
			$scope.entries = entries;
			for(var i = 0; i < entries.length; i++){
				readChilds(entries[i]);
			}
			$scope.$apply();
		},function(err){
			$scope.err = err;
		});
		$scope.fsName = fileSystem.name;
		$scope.fsRootPath = fileSystem.root.fullPath;
		$scope.$apply();
	
	}

	function readChilds(entry){
		if(entry.isDirectory){
			var reader = entry.createReader();
			reader.readEntries(function(entries){
				entry.childs = entries;
				for(var i = 0; i < entries.length; i++){
					readChilds(entries[i]);
				}
				$scope.$apply();
			}, function(err){
				$scope.err = err;
			});
		}
	}

	// request the persistent file system
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);


	//Parse note file
	
	//Save changes made to notes

}).config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('note', {
      url: "/note",
      templateUrl: "app/note/note.html",
      controller: 'NoteCtrl'
    });
}]);