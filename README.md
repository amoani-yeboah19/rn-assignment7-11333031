# rn-assignment7-11333031


# Overview 
Adding upon the design of the project given in assignment 6, this project  differs from the previous one due to one or two additions and subtractions. 

In the previous assignment, I used the images provided in the assets folder from the Google Drive, but with this assignment, with the use of an external API, I was able to replace the specified images, text description and price of the products from the previous assignment with the products from the external API. 

Unlike the previous assignment too, this assignment required an addition of a product details screen, to which I tried my very best to recreate from the UI mockup till I was satisfied with the result. So with this new screen addition, a user is able to add products from not only from the Home screen, but from the product screen too by clicking the Add To Basket button at the bottom of the screen.

Another addition to this project that differentiates it from the previous is the addition of a sidebar when the menu button on the top left side of either the home screen or product details screen is clicked. When on the product details screen of any of the products, clicking the 'Store' option from the sidebar takes you to the home screen. 

And a new addition to the navigation elements of this project is that, in the previous assignment, I used the logo as a navigation back to the home screen, but in the assets folder of this project, since there was a backward icon, I used that instead as the navigation to the homepage.

# More In-Depth Details
# Home Screen
The Home Screen consists of the Header, OurStory, Products and HomeScreen javascript files.
## Header.js
The Header.js file contains the code for the header of the Home Screen. It contains the menu, logo, search and shopping bag icons.
## OurStory.js
This file contains the text 'OUR STORY' as in the UI mockup, the ListView and Filter icons.
## Products.js
This file contains the list of products in the app.
## HomeScreen.js
This file is just the compilation of all the other files. It makes up the actual home screen.


# Cart Screen
The Cart Screen consists of the Header, Checkout, Footer and CartScreen javascript files.
## Header.js
The Header.js file contains the code for the header of the Cart Screen. It contains the backward icon(which now serves as the navigation back to the home screen instead of the logo like in the previous assignment), the logo, a search icon, the page title text('CHECKOUT'), and an image of a border I created myself to mimic the border in the UI mockup.
## Checkout.js
This renders the items in the Home Screen so when products are added to cart from the home screen, they appear on the cart screen. It also allows a user to delete items from the cart screen and when there are no products in the user's cart, a message is displayed to tell the user precisely that.
## Footer.js
This file contains the checkout button, and displays the estimated sum of the products added to the cart screen
## CartScreen.js
This file is the compilation of all the other files in the CartScreen folder to form the actual cart screen.

# Components
This folder contains the sidebar and the CartContext files
## CartContext.js
In CartContext.js, I utilized React's Context API and useReducer hook to handle the cart Screen's state. I used AsyncStorage to store and retrieve the data in the cart in such a way that even if the app is closed and opened again later on, the items added to the cart will still be in the cart.
## Sidebar.js
This file, Sidebar.js, defines a sidebar component that includes animations for showing and hiding the sidebar, and navigates to the Home screen when the "Store" option is selected.

# Screenshots of the App
### HomeScreen
![](<rnAssignment7/WhatsApp Image 2024-07-12 at 21.38.53 (1).jpeg>)
![](<rnAssignment7/WhatsApp Image 2024-07-12 at 21.38.53.jpeg>)
![](<rnAssignment7/WhatsApp Image 2024-07-12 at 21.38.54 (1).jpeg>)
![](<rnAssignment7/WhatsApp Image 2024-07-12 at 21.38.54.jpeg>)
### CartScreen


### Product Details
![](<rnAssignment7/WhatsApp Image 2024-07-12 at 22.02.17.jpeg>)
![](<rnAssignment7/WhatsApp Image 2024-07-12 at 22.02.18.jpeg>)

### Sidebar
![](<rnAssignment7/WhatsApp Image 2024-07-12 at 21.38.55.jpeg>)