# COLORS-Lab-Version-Control

<h2>Description of COLORS Lab</h2>

<p>This application allows for the user to login or signup with their own credentials personal account. The user may choose to add as many colors as they would like, then they have the option to search for their color within the database. Once they are finished, they may choose to logout and repeat this process with a new account or continue from the previously made account. </p>

<h2>Techologies Used</h2>

<p>The COLORS Lab web application uses an SQL database to store users and their colors that they personally added. To communicate with this database, PHP files are used as backend endpoints to communicate with this databse. The transferred language shared between both frontend and backend is json. The user sees frontend code consisting of HTML for the general DOM tree layout and then CSS for the stylistic attributes added to the DOM. The user is able to interact with the website because of the javascript interpreting the user's actions. The javascript calls the backend as well by using the PHP files through a series of HTTP json transfers from the database to the frontend and vice versa.</p>

<h2>High Level Setup Instructions</h2>

<p>To set this application up, a LAMP Droplet is required to hold the code for the website. In addition, you will need a domain name to host your droplet on the World Wide Web. From here you can access your droplet from terminal, then ssh root@DOMAIN_NAME to edit your aspects of your website. To traverse to your webpage logic, cd from root into /var/www/html to view contents and edit contents. You want to remotely connect to your github and pull its contents, you can upload to the github and then pull on the ssh to keep LAMP Stack up to date. In addition, it won't work until you set up the SQL information by "mysql -u root -p [password]" and creating the database create database [database_name] along with the tables for users, colors, and contacts. Once this is fully completed and match the specifications needed from frontend, then you can fully use this web application. This github does not store the database since we don't want to commit "passowrds, API keys or configurations files"</p>

<h2>How to Run and Access the Application</h2>

<p>To run the application, just git pull from the prior paragraph to ensure your webpage is up to date, then type in the corresponding domain name, the one uploaded on this github is "http://jasoncop4331.online/" and then follow the page's contents. First you need to login, if you don't have an account, create an account, then login. Afterwards you may choose to add or search for any colors you might want. Once you are finished you may logout. To continue where you left off, login using the same email. If you would like to start from scratch, create a new account.</p>

<h2>Assumptions/Limitations/AI Usage</h2>

<p>This project was obained by the instructor of my COP4331C course. The application doesn't allow for editing colors or deleting colors, only adding and searching. There is no AI usage on the website, all data and interpretation is through code, not a chatbot. Information is collected but stored securely in the database, the endpoints between them are secured using MD5.js file made by Sebastian Tschan, full credit may be found within this file.</p>
