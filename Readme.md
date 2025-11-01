**Aura**

Aura is a Social Media Platform made for those no longer with us. We can view there profile and remember them, we can make profiles for our loved ones and add memories and share it with others.


(This Project is currently not complete, only some of the features work)


**Features**

1. Auth System - A simple authentication system is used, users can login or register their account. (NOTE: Password hasing is currently not added so please do not use your real password) A user without an account cannot acess profiles, home page, etc. They will be redirected to the login page.
2. Home Page - There is a Home page which is not complete yet. There is a sidebar where you can click on the 'user's profile' thing on the bottom to see your profile. Other sidebar things are currently not working, it is incomplete. There is some profiles on the top of the page which you can click and view example pages. You can view anyone's profile via the link '/u/username' If that user does not exists then it will be said so in the page as well. There is the frontend of examples of some posts on the main page, those are not the real posts just examples. 
3. User Profile - There is a userprofile for all users that is acessable using their username via '/u/username'. It will be shows the number of followers/ following and num of posts but following someone and creating a post is currently not added, it will be added later.


**Tech Stack**

1. Frontend

The frontend is made using React vite. It has client side routing, decent looking UI and http request fetching form the backend.

2. Backend

Node.js
Express.js
MongoDB
Mongoose



**Usage**

First you will be redirected to the login page, if you have an account then login else go to the register page via "Register" button.

Register your account (Do not use your real password please)

After Registering you will be redirected to the login page, login and you can go to the home page.

In the home page you will see some of the example profiles, you can click them to view it. You can view your own profile via the sidebar link at the bottom. You can see some of the sample examples of the posts in the home page and if you are viewing someone else's profile then you can click on the Home button to go to the home page again.