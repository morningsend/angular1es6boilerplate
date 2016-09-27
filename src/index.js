require("file?name=[name].[ext]!./index.html");

import 'angular';

import { TodoController } from './todocontroller';

var todoApp = angular.module("todo-app",[]);

todoApp.controller("todoController", TodoController);

