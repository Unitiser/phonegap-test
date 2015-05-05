angular.module('myApp').controller('NoteCtrl', function($scope, $http){

	$scope.initFile = function(){
		$scope.notes = [{
			'title' : 'Hello world!',
			'content' : 'This is the first entry...'
		}];
		$scope.saveNotes();
	}

	$scope.readNotes = function(){
		window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dir){
			dir.getFile('notes.json', null, function(fileEntry){
				var fileReader = new FileReader();
				fileReader.onloadend = function(e){
					var text = this.result;
					console.log('File contains :', text);
					if(text){
						$scope.notes = JSON.parse(text);
					}else{
						$scope.notes = [];
					}
					$scope.$apply();
				}

				fileEntry.file(function(file){
					fileReader.readAsText(file);
				});
			});
		});
	};

	$scope.saveNotes = function(){
		window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dir){
			dir.getFile('notes.json', {create: true}, function(fileEntry){
				fileEntry.createWriter(function(fw){
					fw.onwriteend = function() {
					    if (fw.length === 0) {
					        //fileWriter has been reset, write file
					        fw.write(JSON.stringify($scope.notes));
					    } else {
					        //file has been overwritten with blob
					        //use callback or resolve promise
					    }
					};
					fw.truncate(0);
				});
			});
		});
	};

	$scope.addNote = function(){
		$scope.notes.push($scope.newNote);
		$scope.newNote = {};
	}

	$scope.readNotes();

}).config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('note', {
      url: "/note",
      templateUrl: "app/note/note.html",
      controller: 'NoteCtrl'
    });
}]);