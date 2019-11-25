# team23

# Some messages for my teammates: 
- **fgnb** folder is now the front-end, others are the back-end
- `cd` into **fgnb**
- execute `npm run build`, this could take about 1-2 mintues
- `cd` back to root directory
- run `npm install` in root directory
- On MacOS, run the app with this command:
- `$ DEBUG=myapp:* npm start`
- Then load http://localhost:3001/ in your browser, or using postman to access the app.

## Admin Dashboard
This page serves the puepose of website admin managing various information and assets. Dashboard can be navigated to by logging in using credential of username and password of "admin".  
Within the dashboard there are three subpages, each can be navigated to using the side drawer on the left:

 - **User**  
 This page is used for querying specific user for inspection and making changes to the selected user.  
 Below the navigation bar admin can enter the username that want to search then corresponding information would be displayed below including username, password and whether the user is blocked. By clicking the editing button admin can make change to all informations.

 - **Transaction**  
 This page is used for inspecting all transactions made.  
 In the transaction table all transactions are displayed one transaction per row. Each transaction entry can be edited, deleted. Also at the top of the page admin can add new transactions to the record.

 - **Item**  
 This page is used for managing all items avaliable in the market.  
 Top part of the page is a form that allow admin to add new item into the market giving information about the good. The bottom part of the page is a table consisting of all avaliable items, one item per row. Admin can edit and remove any item at will. However the ID of an existing item cannot be changed for unique identification purpose.

 ## Normal User
  - **Login**  
A normal user is able to enter the main app by input: Account - user and Password - user. Once a user logs in, he/she can log out anywhere just be clicking the logout button in the navigation bar. 

The main web app is divided into two major parts, Market and Profile, as indicated in the navigation bar at top.   

### Market
In the market page, both the main grid and the bottom grid display the items that are selling online. You can click on any of the item to go to the item-detail page. 

 - **Item Detail**  
The detail page displays the item photo, name, price, location and description. Also all biddings that other buyers submit will be displayed at "Current Bidding" section. You can submit your bidding here. By clicking "Submit a bidding", a dialog pops up and ask you for how much you want to bid on this item. 

### Profile
Let's go back to the profile page. User information is displayed here. Below the user information box, there are two grids, represent all biddings this user submitted and all item he is currently selling. You can click on it to visit the detail page of the item. 

To the left of the profile page, there's a list of buttons, right now only three of them are functioning. We may or may not need all of these buttons at the end of the project, but we leave them there in case we need them. 

 - **Sell**  
"Sell" button takes us to the add-item page where you can enter your item's information and publish it online. You can and you need to upload an image of your item. 

 - **Biddings to me**  
Now go back to the profile page. Under "sell" button we have "Bidding to me", where a seller can see all the biddings he receives on his selling items. He may choose to accept or decline this offer of bid. Back to profile page. 

 - **Settings**  
Under "Bidding to me" button there's the settings. The user is able to modify and update his information here. 
