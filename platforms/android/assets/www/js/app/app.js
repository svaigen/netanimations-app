angular.module('netanimations', ['ionic', 'netanimations.controllers', 'pascalprecht.translate'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider, $translateProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.about', {
                url: "/about",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/about.html",
                        controller: 'AboutCtrl'
                    }
                }
            })

            .state('app.config', {
                url: "/config",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/config.html",
                        controller: 'ConfigCtrl'
                    }
                }
            })

            .state('app.contact', {
                url: "/contact",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/contact.html",
                        controller: 'ContactCtrl'
                    }
                }
            })

            .state('app.animations', {
                url: "/animations",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/animations.html",
                        controller: 'AnimationsCtrl'
                    }
                }
            })

            .state('app.three-way-handshake', {
                url: "/three-way-handshake",
                views: {
                    'menuContent': {
                        templateUrl: "templates/three-way-handshake.html",
                        controller: 'ThreeWayHandshakeCtrl'
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/app/animations');

        $translateProvider.translations('en', {
            LANGUAGE: 'Language',
            PORTUGUESE: 'Portuguese',
            ENGLISH: 'English',
            CONFIGS: 'Config',
            ANIMATIONS: 'Animations',
            CONTACT: 'Contact',
            ABOUT: 'About',
            CONTINUE: 'Continue',

            THREEWAY_HANDSHAKE: 'Three-way Handshake',
            THREEWAY_HANDSHAKE_DESC: 'TCP connection establishment process',
            THREEWAY_HANDSHAKE_PRESENTATION: 'Three-way Handshake is a process blablabla - um processo de acordo entre as duas partes que desejam estabelecer uma comunicação que consiste em três etapas.'
        });

        $translateProvider.translations('pt-br', {
            LANGUAGE: 'Idioma',
            PORTUGUESE: 'Português',
            ENGLISH: 'Inglês',
            CONFIGS: 'Configurações',
            ANIMATIONS: 'Animações',
            CONTACT: 'Contato',
            ABOUT: 'Sobre',
            CONTINUE: 'Continuar',

            STEP_1: 'Primeiro passo',
            STEP_2: 'Segundo passo',
            STEP_3: 'Terceiro passo',
            STEP_4: 'Quarto passo',
            STEP_5: 'Quinto passo',

            THREEWAY_HANDSHAKE: 'Three-way Handshake',
            THREEWAY_HANDSHAKE_DESC: 'Processo de estabelecimento de conexão TCP',
            THREEWAY_HANDSHAKE_PRESENTATION: 'O Three-way Handshake é um processo de acordo entre as duas partes que desejam estabelecer uma comunicação que consiste em três etapas.',
            TWHS_STEP_1: 'O cliente envia um pacote (requisição) com as flags SYN = 1 e ACK = 0',
            TWHS_STEP_2: 'O servidor responde com um pacote contendo as flags SYN = 1 e ACK = 1, representando que a conexão foi aceita e estabelecida',
            TWHS_STEP_3: 'O cliente responde com um pacote com a flag ACK = 1',
            TWHS_END: 'Após o término dos 3 passos, o Three-way Handshake está completo e as duas partes podem trocar dados entre si.'
        });

        $translateProvider.preferredLanguage('pt-br');

    });