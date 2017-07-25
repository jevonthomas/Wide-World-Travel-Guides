"use strict";

console.log("Guide List");

const myApp = angular.module("wwtg", []);

myApp.factory("BookFactory", function($q, $http) {
	function getBooks() {
		return $q( (resolve, reject) => {
			$http.get("./data/guides.json")
			.then( (books) => {
				resolve(books);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	}
	return { getBooks };
});

myApp.controller("bookCtrl", function($scope, BookFactory) {
	BookFactory.getBooks()
	.then( (booksData) => {
		console.log(booksData);
		$scope.bookList = booksData.data.guides;
	});
});