# team23

# Deploy Website
# https://quiet-taiga-35783.herokuapp.com/

## Directory Structure

```
team23
├── db
│   └── mongoose.js
├── models
│   ├── user.js
│   ├── bidding.js
│   ├── item.js
│   ├── transaction.js
├── middlewares
│   ├── index.js
├── routes
│   ├── bidding.js
│   ├── example.js
│   ├── item.js
│   ├── setting.js
│   ├── transaction.js
│   ├── user.js
├── bin
│   ├── www
├── package.json
├── app.js
└── fgnb
    ├── public
    │   ├── index.html
    │   └── ...
    ├── tests
    │   └── ...
    └── src
        ├── admin_page
        |   ├── AdminDashBoard.js
        |   ├── Item.js
        |   ├── IteamAddForm.js
        |   ├── ItemList.js
        |   ├── Transaction.js
        |   ├── TransactionList.js
        |   ├── UserInspector.js
        |   ├── UserPanel.js
        |   └── UserQueryForm.js 
        ├── asset
        |   └── ...
        ├── Component
        |   ├── NotFoundPage.js
        |   └── StateReactComponent.js
        ├── login_page
        |   ├── AuthForm.css
        |   ├── Login.css
        |   ├── Login.js
        |   └── LoginForm.js
        ├──  market_page
        |   ├── BiddingDialog.js
        |   ├── CurrentBiddings.js
        |   ├── ItemCard.js
        |   ├── ItemDetail.js
        |   ├── ItemGrid.js
        |   └── Market.js
        ├── navigation
        |   ├── Navigation.css
        |   └── Navigation.js
        ├── profile_page
        |   ├── AddItem.js
        |   ├── Bidding.js
        |   ├── BiddingList.css
        |   ├── BiddingList.js
        |   ├── Buyerbidding.css
        |   ├── BuerBidding.js
        |   ├── Contact.css
        |   ├── Contact.js
        |   ├── MySalesItems.js
        |   ├── Profilebox.js
        |   ├── ProfilelistItmes.js
        |   ├── ProfileWishListGrid.js
        |   ├── Settings.js
        |   ├── User.css
        |   └── User.js
        ├── root_views
        |   ├── Adminview.js
        |   ├── Authview.css
        |   ├── Authview.js
        |   ├── Mainview.css
        |   └── Mainview.js
        ├── signup_page
        |   └── SignUp.js
        ├── utils
        |   ├── helpers.js
        |   ├── item.js
        |   ├── transction.js
        |   └── user.js
        ├── index.js
        ├── index.css
        ├── App.js
        ├── App.css
        ├── MainView.js
        ├── package.json
        ├── config.json
        └── serviceWorker.js
```

## Admin Dashboard
This page serves the puepose of website admin managing various information and assets. Dashboard can be navigated to by logging in using email: "admin" and password: "admin".  
Within the dashboard there are three subpages, each can be navigated to using the side drawer on the left:

 - **User**  
 This page is used for querying specific user for inspection and making changes to the selected user. Below the navigation bar admin can enter the username that want to search then corresponding information would be displayed below including username and whether the user is blacklisted. By clicking the editing button admin can make change to all informations.

 - **Transaction**  
 This page is used for inspecting all transactions made. In the transaction table all transactions are displayed one transaction per row. Each transaction entry can be edited, deleted.

 - **Item**  
 This page is used for managing all items avaliable in the market. Content of the page is a table consisting of all created items, one item per row. Admin can edit and remove any item at will.

 ## Normal User
  - **Login**  
A normal user is able to enter the main app by email and password. Once a user logs in, he/she can log out anywhere just be clicking the logout button in the navigation bar. 

User can also sign up using email, username and password. 

Two demo users: 

user1 - email: user1@gmail.com, password: useruser

user2 - email: user2@gmail.com, password: useruser

The main web app is divided into two major parts, Market and Profile, as indicated in the navigation bar at top.   

### Market
In the market page, both the main grid and the bottom grid display the items that are selling online. You can click on any of the item to go to the item-detail page. These items sync with our database. Only in Market items are displayed. 

 - **Item Detail**  
The detail page displays the item photo, name, price, location and description. Also all biddings that other buyers submit will be displayed at "Current Bidding" section. You can submit your bidding here. By clicking "Submit a bidding", a dialog pops up and ask you for how much you want to bid on this item. 

### Profile
Let's go back to the profile page. User information is displayed here. Below the user information box, there are four buttons. 

 - **Sell**  
"Sell" button takes us to the add-item page where you can enter your item's information and publish it online. You can and you need to upload an image of your item. Location and description are optional. 

 - **Biddings to me**  
Now go back to the profile page. Next to "sell" button we have "Bidding to me", where a seller can see all the biddings he receives on his selling items. He may choose to accept or decline this offer of bid. 
If he accept the bidding, he can now access the contact page of the app. Also he can decline the bidding. The bidder will see the decision that seller make in the next functionality. 

 - **My Bidding**
This page displays all biddings one user make when he wants to buy some of the items in market. The user may see the decision that seller made for each bidding. If the seller accepts a bidding, the buyer will also have access to the contact page. 

 - **Contact Page**
This page is for sellers and buyers to exchange their contact information. 

 - **Settings**  
Under "Bidding to me" button there's the settings. The user is able to modify and update his information here. User may update his/her profile picture here. We don't allow users to change their username and email. 