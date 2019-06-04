mainApp.controller("simpleController", function($scope, $http) {
    const emptyPost = {
        author: '',
        title: '',
        content: ''
    };
    const url="http://localhost:3000/posts"; //url локального json-server
    $scope.post = {...emptyPost};
    $scope.posts = [];

    $scope.getData = () => $http.get(url).then((response)=>{
        if (response.status === 200) {
            $scope.posts = response.data;
        }
    });
    $scope.send = ()=>{
        $http.post(url,{...$scope.post})
        .then(()=>{
            $scope.post = {...emptyPost};
            $scope.simpleForm.$setPristine();
            $scope.getData();
        });

    };

    $scope.getData();
});