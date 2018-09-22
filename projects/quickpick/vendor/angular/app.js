var myApp = angular.module('myApp', ['ngRoute','ui.bootstrap']);
 myApp.config(['$routeProvider', function($routeProvider){
        $routeProvider
         .when("/", {
            controller: "home",
            templateUrl: "pages/home.html"
        })
          .when('/home:id', {
          templateUrl: "pages/full_spec.html",
          controller: "home"
          
        }).when('/mobiles/:id', {
          templateUrl: "pages/mobile.html",
          controller: "mobile"
          
        })
        .when('/mobiles/:id/:full', {
          templateUrl:"pages/full_spec.html",
          controller: "mobile"
          
        })

        
   
    }]);

myApp.controller('home', ['$scope', '$http','$filter','$routeParams', function ($scope,$http,$filter,$routeParams) {
    $scope.msg = "Boss";
    $http.get('newscrap.json').then(function(response){
    $scope.details = response.data; 
    console.log($scope.details);
    var a = $scope.details[2];
    console.log($scope.details[0].flipkart);
    console.log(a);
                $scope.curPage = 1,
                $scope.itemsPerPage = 15,
                $scope.maxSize = 5;
                $scope.numOfPages = function () {
                    return Math.ceil($scope.details[0].amazon.length / $scope.itemsPerPage);
                };
                $scope.$watch('curPage + numPerPage', function () {
                    var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
                    end = begin + $scope.itemsPerPage;
                    $scope.filteredItems = $scope.details.slice(begin, end);
                    $scope.filteredItems1 = $scope.details[0].flipkart.slice(begin, end);
                    $scope.filteredItems2 = $scope.details[0].amazon.slice(begin, end);
                    $scope.filteredItems3 = $scope.details[0].snapdeal.slice(begin, end);
                    $scope.a=$scope.filteredItems1[0].specs
                    console.log($scope.filteredItems1);
                    console.log($scope.a);
                });
        var b = $routeParams.id;
            console.log(b);
        var data = $scope.details[0];
//          console.log(data);
 
        $scope.products ='';
   
//      $scope.products = $filter('filter')(data[0],{Title:'b'})[0]; 
       
        $scope.products = $filter('filter')(data.flipkart,function(e){
            return e.Title == b;
        })[0];
        if($scope.products ==undefined)
            {
                $scope.products = $filter('filter')(data.amazon,function(e){
                    return e.Title == b;
                })[0];  
            }
        if($scope.products ==undefined)
            {
                $scope.products = $filter('filter')(data.snapdeal,function(e){
                    return e.Title == b;
                })[0];
            }
        if($scope.products)
            {
                $scope.specs1 = $scope.products.specs;
                
                console.log($scope.specs1);
                $scope.desc1 = $scope.products.description;
                console.log($scope.desc1);
                $scope.review1 = $scope.products.reviews;
                console.log($scope.review1);
            }
        
        $scope.count = 0;
        $scope.combine =[]; 
        $scope.show = false;
        $scope.compares = false;

        $scope.compare = function(title)
        {   
            $scope.compares = true;
            if($scope.count ==3)
            {
                return false;
            }
            $scope.count++;
            console.log($scope.count);
            var c = title;
            console.log(c);
     
        $scope.products ='';
        $scope.products = $filter('filter')(data.flipkart,function(e){
            return e.Title == c;
        })[0];
        if($scope.products ==undefined)
            {
                $scope.products = $filter('filter')(data.amazon,function(e){
                    return e.Title == c;
                })[0];  
            }
        if($scope.products ==undefined)
            {
                $scope.products = $filter('filter')(data.snapdeal,function(e){
                    return e.Title == c;
                })[0];
            }
            
//            console.log(products);
            
            $scope.combine.push($scope.products);
            console.log($scope.combine);
           
        }

        $scope.boss1 = function() {

            $scope.show = !$scope.show;
    }
        
      
    });
    $http.get('slider.json').then(function(response){
        $scope.slider= response.data;
        console.log($scope.slider);
    });
    
}]);


myApp.controller('computer',['$scope',function($scope){
    $scope.msg1 ="BOss";
}]);

  
/**********Vivo**************************/
myApp.controller('mobile', ['$scope', '$http','$filter','$routeParams', function ($scope,$http,$filter,$routeParams) {
    $scope.msg = "Boss";
    $scope.mobile_name=$routeParams.id;
    var a =$scope.mobile_name+'.json';
    $http.get(a).then(function(response){
        $scope.details = response.data; 
        console.log($scope.details);
        var a = $scope.details[2];
        console.log($scope.details[0].flipkart);
        console.log(a);
        
        $scope.curPage = 1,
                $scope.itemsPerPage = 15,
                $scope.maxSize = 5;
                $scope.numOfPages = function () {
                    return Math.ceil($scope.details[0].amazon.length / $scope.itemsPerPage);
                };
                $scope.$watch('curPage + numPerPage', function () {
                    var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
                        end = begin + $scope.itemsPerPage;
                    $scope.filteredItems = $scope.details.slice(begin, end);
                    $scope.filteredItems1 = $scope.details[0].flipkart.slice(begin, end);
                    $scope.filteredItems2 = $scope.details[0].amazon.slice(begin, end);
                    $scope.filteredItems3 = $scope.details[0].snapdeal.slice(begin, end);
                    $scope.a=$scope.filteredItems1[0].specs
                    console.log($scope.filteredItems1);
                    console.log($scope.a);
                });
    
        var b = $routeParams.full;
        console.log(b);
        var data = $scope.details[0];
             console.log(data);
       
    $scope.products ='';
//  $scope.products = $filter('filter')(data[0],{Title:'b'})[0]; 
        
    
        if($scope.products ==undefined)
            {
    $scope.products = $filter('filter')(data.amazon,function(e){
        return e.Title == b;
        })[0];  
            }
        if($scope.products ==undefined)
    $scope.products = $filter('filter')(data.snapdeal,function(e){
        return e.Title == b;
        })[0];
       /////////////////1*********************/ 
        if($scope.products)
        {         
        $scope.specs1 = $scope.products.specs;
         console.log($scope.specs1);

        $scope.desc1 = $scope.products.description;
        console.log($scope.desc1);
        
        $scope.review1 = $scope.products.reviews;
        console.log($scope.review1);
        }
       /*****************111*****************/ 
     $scope.count = 0;
        $scope.combine =[]; 
        $scope.show = false;
        $scope.compares = false;

        $scope.compare = function(title)
        {   
            $scope.compares = true;

            if($scope.count ==3)
                {
                    return $scope.msg ="Bas 2 Se jyada na ho payga";
                }
            $scope.count++;
            console.log($scope.count);
            var c = title;
            console.log(c);
     
        $scope.products ='';
        $scope.products = $filter('filter')(data.flipkart,function(e){
            return e.Title == c;
        })[0];
        if($scope.products ==undefined)
            {
                $scope.products = $filter('filter')(data.amazon,function(e){
                    return e.Title == c;
                })[0];  
            }
        if($scope.products ==undefined)
            {
                $scope.products = $filter('filter')(data.snapdeal,function(e){
                    return e.Title == c;
                })[0];
            }
        if($scope.products)
            {
                $scope.specs1 = $scope.products.specs;
                console.log($scope.specs1);
                $scope.desc1 = $scope.products.description;
                console.log($scope.desc1);
                $scope.review1 = $scope.products.reviews;
                console.log($scope.review1);
            }
             
//            console.log(products);
            
            $scope.combine.push($scope.products);
            console.log($scope.combine);
//          
        }

        $scope.boss1 = function() {

            $scope.show = !$scope.show;
    }
       
    });
}]);
 


 




/*myApp.controller('lenovo', ['$scope', '$http','$filter','$routeParams', function ($scope,$http,$filter,$routeParams) {
    $scope.msg = "Boss";
    $http.get('lenovo.json').then(function(response){
        $scope.details = response.data; 
    console.log($scope.details);
        var a = $scope.details[2];
      console.log($scope.details[0].flipkart);
        console.log(a);
        $scope.curPage = 1,
                $scope.itemsPerPage = 15,
                $scope.maxSize = 5;
                $scope.numOfPages = function () {
                    return Math.ceil($scope.details[0].amazon.length / $scope.itemsPerPage);
                };
                $scope.$watch('curPage + numPerPage', function () {
                    var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
                        end = begin + $scope.itemsPerPage;
                    $scope.filteredItems = $scope.details.slice(begin, end);
                    $scope.filteredItems1 = $scope.details[0].flipkart.slice(begin, end);
                    $scope.filteredItems2 = $scope.details[0].amazon.slice(begin, end);
                    $scope.filteredItems3 = $scope.details[0].snapdeal.slice(begin, end);
                    $scope.a=$scope.filteredItems1[0].specs
                    console.log($scope.filteredItems1);
                    console.log($scope.a);
                });
    
        var b = $routeParams.id;
         console.log(b);
        var data = $scope.details[0];
             console.log(data);

    $scope.products ='';
//    $scope.products = $filter('filter')(data[0],{Title:'b'})[0]; 
        
    $scope.products = $filter('filter')(data.flipkart,function(e){
        return e.Title == b;
        })[0];
        if($scope.products ==undefined)
            {
    $scope.products = $filter('filter')(data.amazon,function(e){
        return e.Title == b;
        })[0];  
            }
        if($scope.products ==undefined)
    $scope.products = $filter('filter')(data.snapdeal,function(e){
        return e.Title == b;
        })[0];
       /////////////////1********************
        if($scope.products)
            {
                
                
        $scope.specs1 = $scope.products.specs;
         console.log($scope.specs1);

        $scope.desc1 = $scope.products.description;
        console.log($scope.desc1);
        
        $scope.review1 = $scope.products.reviews;
        console.log($scope.review1);
            }
       /*****************111****************
    
    });
}]);
myApp.controller('nokia', ['$scope', '$http','$filter','$routeParams', function ($scope,$http,$filter,$routeParams) {
    $scope.msg = "Boss";
    $http.get('nokia.json').then(function(response){
        $scope.details = response.data; 
    console.log($scope.details);
        var a = $scope.details[2];
      console.log($scope.details[0].flipkart);
        console.log(a);
        $scope.curPage = 1,
                $scope.itemsPerPage = 15,
                $scope.maxSize = 5;
                $scope.numOfPages = function () {
                    return Math.ceil($scope.details[0].amazon.length / $scope.itemsPerPage);
                };
                $scope.$watch('curPage + numPerPage', function () {
                    var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
                        end = begin + $scope.itemsPerPage;
                    $scope.filteredItems = $scope.details.slice(begin, end);
                    $scope.filteredItems1 = $scope.details[0].flipkart.slice(begin, end);
                    $scope.filteredItems2 = $scope.details[0].amazon.slice(begin, end);
                    $scope.filteredItems3 = $scope.details[0].snapdeal.slice(begin, end);
                    $scope.a=$scope.filteredItems1[0].specs
                    console.log($scope.filteredItems1);
                    console.log($scope.a);
                });
    
        var b = $routeParams.id;
         console.log(b);
        var data = $scope.details[0];
             console.log(data);

    $scope.products ='';
//    $scope.products = $filter('filter')(data[0],{Title:'b'})[0]; 
        
    $scope.products = $filter('filter')(data.flipkart,function(e){
        return e.Title == b;
        })[0];
        if($scope.products ==undefined)
            {
    $scope.products = $filter('filter')(data.amazon,function(e){
        return e.Title == b;
        })[0];  
            }
        if($scope.products ==undefined)
    $scope.products = $filter('filter')(data.snapdeal,function(e){
        return e.Title == b;
        })[0];
       /////////////////1******************
        if($scope.products)
            {
                
                
        $scope.specs1 = $scope.products.specs;
         console.log($scope.specs1);

        $scope.desc1 = $scope.products.description;
        console.log($scope.desc1);
        
        $scope.review1 = $scope.products.reviews;
        console.log($scope.review1);
            }
       /*****************111****************
    
    });
}]);
myApp.controller('micromax', ['$scope', '$http','$filter','$routeParams', function ($scope,$http,$filter,$routeParams) {
    $scope.msg = "Boss";
    $http.get('micromax.json').then(function(response){
        $scope.details = response.data; 
    console.log($scope.details);
        var a = $scope.details[2];
      console.log($scope.details[0].flipkart);
        console.log(a);
        $scope.curPage = 1,
                $scope.itemsPerPage = 15,
                $scope.maxSize = 5;
                $scope.numOfPages = function () {
                    return Math.ceil($scope.details[0].amazon.length / $scope.itemsPerPage);
                };
                $scope.$watch('curPage + numPerPage', function () {
                    var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
                        end = begin + $scope.itemsPerPage;
                    $scope.filteredItems = $scope.details.slice(begin, end);
                    $scope.filteredItems1 = $scope.details[0].flipkart.slice(begin, end);
                    $scope.filteredItems2 = $scope.details[0].amazon.slice(begin, end);
                    $scope.filteredItems3 = $scope.details[0].snapdeal.slice(begin, end);
                    $scope.a=$scope.filteredItems1[0].specs
                    console.log($scope.filteredItems1);
                    console.log($scope.a);
                });
    
        var b = $routeParams.id;
         console.log(b);
        var data = $scope.details[0];
             console.log(data);

    $scope.products ='';
//    $scope.products = $filter('filter')(data[0],{Title:'b'})[0]; 
        
    $scope.products = $filter('filter')(data.flipkart,function(e){
        return e.Title == b;
        })[0];
        if($scope.products ==undefined)
            {
    $scope.products = $filter('filter')(data.amazon,function(e){
        return e.Title == b;
        })[0];  
            }
        if($scope.products ==undefined)
    $scope.products = $filter('filter')(data.snapdeal,function(e){
        return e.Title == b;
        })[0];
       /////////////////1********************
        if($scope.products)
            {
                
                
        $scope.specs1 = $scope.products.specs;
         console.log($scope.specs1);

        $scope.desc1 = $scope.products.description;
        console.log($scope.desc1);
        
        $scope.review1 = $scope.products.reviews;
        console.log($scope.review1);
            }
       /*****************111****************
    
    });
}]);*/

/*myApp.controller('home1', ['$scope', '$http','$filter','$routeParams', function ($scope,$http,$filter,$routeParams) {
    $scope.msg = "Boss";
    
    $http.get('scrapall.json').then(function(response){
        $scope.details = response.data; 
    console.
    log($scope.details);
        var a = $scope.details[2];
      console.log($scope.details[0].flipkart);
        console.log(a);
        $scope.curPage = 1,
                $scope.itemsPerPage = 15,
                $scope.maxSize = 5;
                $scope.numOfPages = function () {
                    return Math.ceil($scope.details[0].amazon.length / $scope.itemsPerPage);
                };
                $scope.$watch('curPage + numPerPage', function () {
                    var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
                        end = begin + $scope.itemsPerPage;
                    $scope.filteredItems = $scope.details.slice(begin, end);
                    $scope.filteredItems1 = $scope.details[0].flipkart.slice(begin, end);
                    $scope.filteredItems2 = $scope.details[0].amazon.slice(begin, end);
                    $scope.filteredItems3 = $scope.details[0].snapdeal.slice(begin, end);
                    $scope.a=$scope.filteredItems1[0].specs
                    console.log($scope.filteredItems1);
                    console.log($scope.a);
                });
    
    $scope.products ='';
//    $scope.products = $filter('filter')(data[0],{Title:'b'})[0]; 
        
    $scope.products = $filter('filter')(data.flipkart,function(e){
        return e.Title == b;
        })[0];
        if($scope.products ==undefined)
            {
    $scope.products = $filter('filter')(data.amazon,function(e){
        return e.Title == b;
        })[0];  
            }
        if($scope.products ==undefined)
    $scope.products = $filter('filter')(data.snapdeal,function(e){
        return e.Title == b;
        })[0];
       /////////////////1*****************
        if($scope.products)
            {
                
                
        $scope.specs1 = $scope.products.specs;
         console.log($scope.specs1);

        $scope.desc1 = $scope.products.description;
        console.log($scope.desc1);
        
        $scope.review1 = $scope.products.reviews;
        console.log($scope.review1);
            }
       /*****************111***************
    
    });
   
}]);*/




//myApp.controller('service', ['$scope', '$http','$routeParams', function ($scope,$http,$routeParams) {
////    this.msg = "Hello"; 
////    $scope.boss = "Boss ";
//    $scope.models ='';
//    $scope.models1 ='';
//    $http.get('model.json').then(function(response){
//        
//        $scope.models = response.data; 
//        var a = $scope.models;
////      console.log(data);
//        console.log(a);
//    });
//    
//    
//    
//    
//}]);
// 
//myApp.controller('service_detail', ['$scope', '$http','$filter','$routeParams', function ($scope,$http,$filter,$routeParams) {
////    this.msg = "Hello"; 
////    $scope.boss = "Boss ";
//    $scope.products ='';
//    var b = $routeParams.id;
//         console.log(b);
//   
//    $http.get('model.json').then(function(response){
//        var data =response.data;
//                 console.log(data);
//    $scope.products ='';
//
//        $scope.products = $filter('filter')(data, function(e){
//            return e.emp_id == b;
//        }
//        )[0];
//        console.log($scope.products);
//        console.log($scope.products.emp_image);
//        $scope.image = $scope.products.emp_image[0].name;
//        console.log($scope.image);
////        var a = $scope.models;
//////      console.log(data);
////        console.log(a);
//    });
//    $scope.change_image =function(a){
//        $scope.image = a;
//    }
//    
//    
//    
//}]);
//
////myApp.directive("ngBoss", function () {
////    return {
//////                controller:'home',
//////                controllerAs:'ctrl',
////                restrict: "E",
//////        link:function($scope,element,attrs) {
//////            element.bind('click', function () {
//////                element.html("Hello Boss");
//////            });
//////        }
////              transclude:true,
////              scope:{title:'@'},
////              template:"<div style='color:red'>"+"<ng-transclude></ng-transclude>"+"</div>"
////    };
////});
//
//
//
//
//
//
//
//
//
//
//
//
//





























































//myApp.directive("item", function() {
//    return {
//        restrict: 'E',
//        scope:{},
//        link: function(scope, element, attrs) {
//            scope.name = attrs.name;
//        },
//        template: '<div><strong>Name:</strong> {{name}} <strong>Select Amount:</strong> <select name="count" ng-model="count"><option value="1">1</option><option value="2">2</option></select> <strong>Selected Amount:</strong> {{count}}</div>'
//    };
//});
//myApp.directive("user", function() {
//    return {
//        restrict: 'E',
//        scope:'=',
//        template: '<input type="text" ng-model="comment">'
//    };
//});




//myApp.config(['$routeProvider', function ($routeProvider) {
//    $routeProvider
//        .when("/", {
//            controller: "home",
//            templateUrl: "pages/home.html"
//        })
//        .when("/home:id", {
//            controller: "home", 
//            templateUrl: "pages/home.html"
//        })
//        .when("/about", {
//            controller: "about",
//            templateUrl: "pages/about.html"
//        })
//        .when("/contact", {
//            controller: "contact",
//            templateUrl: "pages/contact.html"
//        })
//        .when("/portfolio1", {
//            templateUrl: "pages/portfolio/portfolio-1-col.html"
//        })
//        .when("/portfolio2", {
//            templateUrl: "pages/portfolio/portfolio-2-col.html"
//        })
//        .when("/portfolio3", {
//            templateUrl: "pages/portfolio/portfolio-3-col.html"
//        })
//        .when("/portfolio4", {
//            templateUrl: "pages/portfolio/portfolio-4-col.html"
//        })
//        .when("/portfolio-item", {
//            templateUrl: "pages/portfolio/portfolio-item.html"
//        })
//        .when("/blog-home1", {
//            templateUrl: "pages/blog/blog-home-1.html"
//        })
//        .when("/blog-home2", {
//            templateUrl: "pages/blog/blog-home-2.html"
//        })
//        .when("/blog-post", {
//            templateUrl: "pages/blog/blog-post.html"
//        })
//        .when("/full-width", {
//            templateUrl: "pages/other/full-width.html"
//        })
//        .when("/faq", {
//            templateUrl: "pages/other/faq.html"
//        })
//        .when("/pricing", {
//            templateUrl: "pages/other/pricing.html"
//        })
//        .when("/sidebar", {
//            templateUrl: "pages/other/sidebar.html" 
//        })
//
//        .when("/services", {
//        controller:"service",
//            templateUrl: "pages/services.html"
//        })
//        .when("/service_detail:id", {
//        controller:"service_detail",
//            templateUrl: "a.html"
//        })
//        .otherwise({
//            controller: '404Controller',
//            templateUrl: 'pages/other/404.html'
//        });
//}]);
//