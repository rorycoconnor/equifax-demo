# Equifax Demo Project

This repository contains the demo portal for the Equifax opportunity.

## Get Started

1. Clone the repository by entering **git clone https://github.com/rorycoconnor/equifax-demo.git**.
2. Install packages by running **npm install**.
3. Run **npm start** to start the development server.
4. Navigate to **http://localhost:3000/search** to view the search form. 

**NOTE:** To actually run a search, the values in **server/controllers/searchController.js** must be updated with the ClientID, ClientSecret, and a Developer Token from https://equifax-demo.app.box.com/developers/console/app/1470920/configuration. To view a preview, add the same Developer Token to the file **src/components/PreviewComponents/Preview.js**

## Project Structure

This demo project runs on React on the front-end with a simple Express server to handle API requests. The backend code is in the **server** directory while all front-end code is in the **src** directory. 

### ImageAccess Notes

The connection between Box and ImageTrust will need to be kicked off when a user clicks the **ANNOTATE** button in localhost:3000/preview
