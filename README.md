# BackendMoviesAPINodeExpress

An API for a video store made it with Node, express and sequelize.

<br>

## 1. Configuration instructions

Don't needed.

<br>

## 2. Installation instructions

    The repository can be clonned o downloaded.

    No matter what is your choice, in both cases, you may need an IDE to open the file.
    Once done, you will need:
        - A platform for API development, to interact with the API (e.g. Postman),
        - Install all the dependencies (command: npm install, in visual studio's console).
        - Run the server (command: npm start, in visual studio's console) with express.
        - Run the mySQL database server (e.g. xampp).
        - If you want to see the database, you may need a visual tool like MySQL Workbench or similar.

<br>

## 3. Management 
      
    This backend has been build with the following structure. 
    There are 4 main routes: /users, /film, /orders and /admin.
    
    
    Users
    Contain information about the users who are going to use the app and the next endpoints:
    /users
          /signup
           A POST endpoint for user register.
          /login
           A POST endpoint for login user, that will generate a token when is logged. It requires
           the email and password provided in the signup.
          /profile
           A GET endpoint for accesing user's information. 
           It's needed to be logged because it will check the user's token before giving the information.
          /drop
           A DELETE endpoint for deleting an user.
           It's needed to be logged because it will check the user's token before giving the information.
    
    /login, /profile and /drop endpoint requires the email and password provided in the signup to be sended
    in the req.body. 
    In /signup all the information of the user must be sent in the req.body (you can check it in the model
    and be careful with the capital letters)


    Film
    Contain information about the available films and the next endpoints:
    /film
          /filmsId
           A GET endpoint to search for films by id. The id must be provided as a parameter in the url direction.
          /filmsTitle
           A GET endpoint to search for films by Title (notice the capital letter when requesting in the body).
           The title must be provided in the req.body.
          /allfilms
           A GET endpoint to get all available films in the database.
    

    Orders
    Contain information about the orders and the next endpoints:
    /orders
          /create
          A POST endpoint for creating a new order that will include the filmId and the userId.


    Admin
    Contain information about the orders and the next endpoints:
    /admin
          /getOrders
           A GET endpoint for getting all the orders.
          /deleteOrder
           A DELETE endpoint for deleting an order.

    For security, for both endpoints is needed to have an admin role for executing that commands. Administrators are 
    the only who can check and delete orders.


    About relations between tables:

    User  (1---------------=) Order (=---------------=) Film

<br>        

## 4. Copyright and license

Under GNU-GPL3 license. For more information check out the 
LICENSE file.

<br>

## 5. Contact information and credits

Author: Adrián M.A.

Contact: adrian@neurocadi.es
  
<br>

## Annex I  Bugs knows

1. Is known an error that ocurrs when an admin is trying to get the orders. 
For now, we don't have the solution but we are working on it.
  
<br>

## Annex II What's new 

   Nothing, for the moment.
