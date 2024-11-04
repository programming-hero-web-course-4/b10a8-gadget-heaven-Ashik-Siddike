Develop a responsive e-commerce platform for GadgetHaven, a gadget-buying
website, based on a detailed Figma design. The site should feature a structured
navigation bar, product categories, and individual product details pages. Key
functionalities include a shopping cart, a wishlist system, and product filtering. The
Context API will manage the cart and wishlist, with optional LocalStorage for data
persistence. Additional pages will allow users to view and manage their cart and
wishlist, sort items by price, and ensure a smooth user experience. The site must
handle edge cases like price limits and prevent errors when reloading.
Navbar Section
● There will be these menu items => Logo, Brand Name, Dashboard, Stats
● Indicate Active route in the Navbar
Home Page
● Banner Section: According to Figma, a nice and attractive Banner will appear
on the Home page. The banner will have a button that takes the user to the
Dashboard page.
● Categories Sidebar: According to Figma, there are a few categories of
gadgets, such as computers, phones, smart watches, chargers, and power
banks. Categories will appear as a sidebar just like Figma
● Gadgets Cards: This page will default show at least 6-9 data in a card grid
format.
Each Card will have an image of the product, product name, price, and
‘Details’ button. Clicking the button will take you to the details page of the
item.
● At least 3 categories and the first category must have 6 data sets. Other
categories may have 2 or more data. (6 + 2\*2 = 10 data in total). Each item’s
price will be at least 50 $ (not less than 50 $, could be more) and unique.
● Clicking on any category will show gadgets of that specific category on the
right. Do this using nested layout
● Ensure these properties are in each data set.
● Each JSON data will contain:
○ product_id
○ product_title
○ product_image
○ category
○ price
○ description
○ Specification [ ]
○ availability (true, false)
○ rating
○ Other field (if you want to add)
Example:
● Footer Section: Make a footer section with meaningful information and
content like Figma.
💡Ensure that the Navbar and Footer are showing on all the pages
without Error/404 Page.
Details Page
● The “Details” page will have an image of the product, name, price, details,
etc, (all the properties of the single item) according to Figma design.
● Each details page will have two buttons Add to Cart (or 🛒 icon button), and
a ♥ (heart) icon button.
○ Clicking the Add to Cart / 🛒(cart) icon button will add the item to the
cart. After adding the item to the cart, The 🛒(cart) icon at the navbar
will show the number/badge, indicating the number of items added to
the cart.
○ Clicking the ♥ (heart) icon button will add the item to the WishList.
● Disable ♥ (heart) icon button after clicking once. Don’t allow adding the same
items to the wish list more than once.
You can implement functionalities using Context API and LocalStorage or any other
way. It’s up to you what you use.
You can use the NPM package React Rating star components or others for show
rating.
Dashboard Page
● This page will have two tabs => Cart, and WishList.
● Cart items will appear when you click the “Cart” tab.
● Wish items will appear by clicking the “Wish List” tab.
● Items card will contain gadget name, image, price, and other info that you
want to show
● Show the total price of cart items in the “Cart tab"
● There will be a “Sort by Price” button in the Cart tab, Clicking this button will
sort the Cart items by price in descending order. ( Costly items will appear
first)
New Route/Page:
● Add 1 more routes to your website. Add relevant and meaningful content
for those routes.
Miscellaneous
● Reloading the website should not show any error or 404 page.
● Add a 404 page.
● Provide documentation in the README.md file
○ Attach Live Website Link
○ Attach Requirement Document Link
○ List of React Fundamental concepts used in the project
○ What you have used for handling and managing data (context
API/local storage)
○ 5 features of your website/project
● Show toast on
○ Adding item to cart
○ Adding item to wishlist
○ Show different messages in these two activities.
Challenge Tasks
● You can see that in Figma for the home page, the background color is
different from the background color of the navbar on other pages. Implement
this using useLocation() hook
● Clicking the Purchase button will Congratulate using Modal. Then the cart
will be empty/total price will be 0, ( without reloading the page or using
window.href ). Keep this button disabled if the cart is empty and the total
price is 0. After clicking on the “Close button” of the modal it will redirect you
to the home page. Do this navigation using useNavigate() hook.
● Use favicon for your website and add dynamic title for each page on your
website. Resources
