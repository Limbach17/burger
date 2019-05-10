# Burger Jawn

Burger Jawn is a heroku app that lets users add custom burgers the menu. Extant burgers can be 
"consumed" by clicking the "DEVOURRR!" button. Likewise, consumed burgers can be added back to 
the menu by clicking "RE-ADD TO MENU". 

Users can view JSON data for all burgers by clicking on the burger thumbnail in the nav.

Heroku app link: https://burger-jawn.herokuapp.com/

## Installation

While the Burger jawn can be run on the heroku site, aspiring coders may wish to clone the 
respository and fiddle with the app.

After cloning use the node.js package manager to install requisite packages. 

```bash
npm install
```

To run locally, users must enter their own mysql password in the requisite key-value in
    
    /burger-jawn
            /config
                /connection.js

## Languages

javascript
<html>
#css

## Resources

Burger Jawn uses mysql2, dotenv, path, express, express-handlebars, and orm packages 
for node.


