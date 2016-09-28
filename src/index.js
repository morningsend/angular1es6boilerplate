import 'angular';
import "angular-material/angular-material.css";
import { TodoController } from './todocontroller';
import { CardController } from './cardcontroller';
import "./assets/style/style.scss";

var todoApp = angular.module("todo-app",["ngMaterial", "ngRoute"]);

todoApp.controller("todoController", TodoController);
todoApp.controller("cardController", CardController);

todoApp.config(($routeProvider) => {
    $routeProvider
        .when("/index",{
            templateUrl: "pages/home.html",
            controller: TodoController
        })
        .when("/login", {
            templateUrl: "pages/login.html",
            controller: TodoController
        })
        .otherwise({
            redirectTo: "/"
        })
});
export default todoApp;