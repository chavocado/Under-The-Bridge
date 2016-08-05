myApp.factory('DataFactory', ['$http', function($http) {
  console.log('dataFactory running');

  var publicAPI = {
    bridge0 : {name :'Stone Arch'},
    bridge1 : {name :'St Anthony'},
    bridge2 : {name :'35W'},
    bridge3 : {name :'First Bridge'}
  };



 return {
   publicAPI: publicAPI
 };



}]);
