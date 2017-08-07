# ApiLaraVue
This is a framwork for large web projects. ApiLaravue uses Laravel 5.4 as backend integrated with laravel passport and laravel cors that, Vuejs as frontend and the two communicate via API calls. It also include redis already installed and configured in the backend and frontend, a node server already created and configure for realtime communication and some vue packages are also install in the frontend such as vue-router, vue-resource, vue-socket.io, and sweetalert.

## Installing

1. Clone the repository.
2. Download and Intall nodejs for your OS from https://nodejs.org/en/download/
3. Install redis

   ### Linux:
    
          $ wget http://download.redis.io/releases/redis-4.0.1.tar.gz

          $ tar xzf redis-4.0.1.tar.gz

          $ cd redis-4.0.1

          $ make
          
      
   ### Mac:
    
         if you are not having homebrew, intall it from https://brew.sh/ 

         Run $ brew install redis
     
   ### Windows:
    
          One click Redis install as a Windows service:
          https://github.com/rgl/redis/downloads

          Download and run the top .exe (ignore the "download as zip" button)

          Edit: For the latest versions of Redis for Windows look at MSOpenTech/redis. See Todd Menier's answer for more information.
4. start redis server Run `redis/server` and do not close the terminal window. Linux:  `src/redis-server`
5. Open a new terminal window and CD to apilaravue/server.
6. Run `npm install`. This installs all dependencies.
7. Run `node server.js` and do not close the terminal window. This will start the node server
8. Open a new terminal window and CD to apilaravue/backend.
9. Run `composer install`. This installs all of Laravel's dependencies.
10. Run `mv .env.example .env`. This enables your env files to set your app into local mode.
11. Run `php artisan key:generate`. This generates a secure cipher key for encrypting your data.
12. Create a database named `__laravelvue`
13. Run `php artisan migrate --seed`
14. Run `php artisan serve`. This serves your application to the browser. You can also use Homestead, LAMP, WAMP, etc.
15. Open a new terminal window and CD to apilaravue/frontend.
16. Run `npm install`. This installs all of Vue's dependencies.
17. Run `npm run dev`. This will open the frontend landing view on your default browser. that is `http://localhost:8080`
18. *Create something great!*

## Frontend
If you are not familiar with vuejs, you should check their documentation at https://vuejs.org/v2/guide/

## Backend
If you are not familiar with Laravel, you should check their documentation at https://laravel.com/docs/5.4

## Server
If you are not familiar with Laravel, you should check their documentation at https://nodejs.org/api/http.html
you can also check the example at https://nodejs.org/api/synopsis.html
Or quick start with W3schools at https://www.w3schools.com/nodejs/nodejs_http.asp

## Contributing

Thank you for considering contributing to the ApiLaraVue framework.

## Security Vulnerabilities

If you discover a security vulnerability within ApiLaraVue, please send an e-mail to Kamga Simo Junior at kamgasimojunior@gmail.com. All security vulnerabilities will be promptly addressed.

## License

The ApiLaraVue framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).

