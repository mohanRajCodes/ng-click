/**
 * Event handling
 */

var Sumtotal = 0;
var Diftotal = 0;

var myapp = angular.module("MyModule",[])
				   .controller("Mycontroller",function($scope){
					   var cricketer = [
						   {name:"Vijay Shankar",likes:"0",dislikes:"0"},
						   {name:"Shivam dubey",likes:"0",dislikes:"0"},
						   {name:"hardhik pandey",likes:"0",dislikes:"0"},
						   {name:"Shubham Ranjane",likes:"0",dislikes:"0"}
					   ];
					   
					   
					   $scope.info = cricketer;
					   				
					   
					   $scope.increament = function(cricketr){
						   
						   
						   cricketr.likes++;
						   Sumtotal++;
						   document.getElementById("Sum").innerHTML = 'Sum of likes:' + Sumtotal;
						    
						   
					   }
					   $scope.decreament = function(cricketr){
						   
						   cricketr.dislikes++;
						   Diftotal++;
						   document.getElementById("Dislike").innerHTML = 'Sum of Dislikes:' +  Diftotal;
					   }
					 
				   });