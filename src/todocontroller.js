
export class TodoController{
    
    constructor($scope){
        this.$scope = $scope;
        this.$scope.count = 3;
        this.$scope.increment = this.increment.bind(this);
    }
    loadData(){
        return [
            {
                name: "todo1",
                completed: false
            }
        ]
    }
    increment(){
        //if(this.$scope.count!=undefined){
        this.$scope.count = this.$scope.count + 1;
        return this.$scope.count;
    }
}
TodoController.$inject=["$scope"];
export default TodoController;