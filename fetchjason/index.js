"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5';
axios_1["default"].get(url).then(function (Response) {
    console.log(Response);
});
