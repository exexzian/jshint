volatile: for (var i = 0; i < 10; i++) {
	break volatile;
}

var let = 1;

(function () {
	"use strict";

	var let = 2;
}());

var obj = {};
obj.else = 1;
obj.throws = 2;