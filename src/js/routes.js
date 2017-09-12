angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='notificaciNes2.notificaciNes'
      2) Using $state.go programatically:
        $state.go('notificaciNes2.notificaciNes');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/page1
      /page1/tab6/page1
  */
  .state('notificaciNes2.notificaciNes', {
    url: '/page1',
    views: {
      'tab3': {
        templateUrl: 'templates/notificaciNes.html',
        controller: 'notificaciNesCtrl'
      },
      'tab6': {
        templateUrl: 'templates/notificaciNes.html',
        controller: 'notificaciNesCtrl'
      }
    }
  })

  .state('notificaciNes2', {
    url: '/page1',
    templateUrl: 'templates/notificaciNes2.html',
    abstract:true
  })

  .state('login', {
    url: '/page1',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='notificaciNes2.perfil'
      2) Using $state.go programatically:
        $state.go('notificaciNes2.perfil');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/page2
      /page1/tab6/page2
  */
  .state('notificaciNes2.perfil', {
    url: '/page2',
    views: {
      'tab3': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      },
      'tab6': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('signup', {
    url: '/page8',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='notificaciNes2.confirmaciN'
      2) Using $state.go programatically:
        $state.go('notificaciNes2.confirmaciN');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/page9
      /page1/tab6/page9
  */
  .state('notificaciNes2.confirmaciN', {
    url: '/page9',
    views: {
      'tab3': {
        templateUrl: 'templates/confirmaciN.html',
        controller: 'confirmaciNCtrl'
      },
      'tab6': {
        templateUrl: 'templates/confirmaciN.html',
        controller: 'confirmaciNCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1')


});