# Very Rare Clothing

<div align="center">
    <h2>E-commerce portfolio project </h1>
        <h4>
            Built with <a href="https://create-react-app.dev/">Create-React-App</a> &
            Hosted by <a href="https://www.netlify.com/">Netlify</a> 
        </h4>
</div>

<!-- Live Demo Link -->
<div align="center">
<a href="https://very-rare.netlify.app/" target='_blank'>
    click here for live demo
</a>
<p>
  
[![Netlify Status](https://api.netlify.com/api/v1/badges/609d0724-3439-4ea9-b5b8-e303ca9d7117/deploy-status)](https://https://very-rare.netlify.app/)

</p>
</div>


<h3 align='center'>Technologies & Tool:</h3>
<br/>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,redux,graphql,git,firebase,styledcomponents,netlify,github,vscode,github" />
  </a>
</p>

</br>

Very Rare is the Fully functional Real custom made Web application that covers and entire E-commerce functionality from designing, User Authentication, Payments build using React JS, Firebase, Stripe and many other listed above.

### :camera: A demo of the Web App
<p align="center">
<img src="veryrare.gif" ">
</p>
<details>
<summary><h3>Snapshots of App</h3></summary>    
<p align="center">
    <h3 color="red">HOME PAGE</h3>
    <img src="https://i.ibb.co/3hFF58X/main.png" width="80%">
    </br>
        <h3 color="red">AUTHENTICATION PAGE</h3>
    <img src="https://i.ibb.co/k2QDsYh/auth.png" width="80%">
    </br>
        <h3 color="red">MENU</h3>
    <img src="https://i.ibb.co/HtD9FhY/burger.png" width="80%">
    </br>
      <h3 color="red">SORT ITEMS</h3>
     <img src="https://i.ibb.co/cXztjR9/sortitems.png" width="80%">
     </br>
        <h3 color="red">FEATURES ITEMS</h3>
    <img src="https://i.ibb.co/Jkfyt1P/featured.png" width="80%">
    </br>
        <h3 color="red">SHOPPING CART</h3>
    <img src="https://i.ibb.co/2MWVFFJ/shopping-cart.png" width="80%">
    </br>
        <h3 color="red">CHECKOUT PAGE</h3>
    <img src="https://i.ibb.co/XjYX5NW/checkout.png" width="80%">
    </br>
      <h3 color="red">EMPTY CHECKOUT PAGE</h3>
     <img src="https://i.ibb.co/k84vr2s/searchresultsnone.png" width="80%">
     </br>
    <h3 color="red">SEARCH</h3>
     <img src="https://i.ibb.co/jW0tbfP/search.png" width="80%">
     </br>
     <h3 color="red">SEARCH RESULTS</h3>
     <img src="https://i.ibb.co/jW0tbfP/search.png" width="80%">
     </br>
     <h3 color="red">NO SEARCH RESULTS FOUND</h3>
     <img src="https://i.ibb.co/tL1H6Nm/searchresult.png" width="80%">
     </br>
     <h3 color="red">FOOTER</h3>
     <img src="https://i.ibb.co/wgngrVr/footer.png" width="80%">   
</p>
</details>

## Features
As a user you can:

- Login/Log out or set up a New Account(Register)
- View list of different products
- Filter products based on category
- Arrange products based on price and alphabetical order of product names
- Add and remove them from Cart
- Proceed to checkout page to buy the product
- Create orders and Make payments

## Project Structure

Project consist of following stages:

- Setting up a react Router
- creating the Navigation bar
- Creating the home Page  – to display categories
- Setting up a React Context API – The Context API is a component structure provided by the React framework, which enables us to share specific states across all levels of the application. In this project, there is need to manage three states: cart (to manage the shopping cart),categories(for managing each category data)  and user (for managing the details of the currently logged in user).
- Context code can be found in <a href="https://github.com/FaraiMajor/veryrare-clothing/tree/contextapi">contextapi branch</a> 
- Setting up payment functionality using API’s provided by Stripe(Stripe is an online payment processing and credit card processing platform for businesses.)
- Setting up a Firebase – for Handling database and authentication .Basically the database will be used to store the login information for the users, but the resource can be used for storing product information as well.
Setting up Authentication
- Transition from context api into using redux for state management using redux thunk for middleware
- I ended up switching from thunk to using redux saga for its declarative approach and advanced control flow
- Redux code can be found in <a href="https://github.com/FaraiMajor/veryrare-clothing/tree/redux">redux branch</a> 
- Netlify for Deployement
  
### :bulb: Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## :bust_in_silhouette: Author

- Website - [Farai Major](https://faraimajor.com/)
