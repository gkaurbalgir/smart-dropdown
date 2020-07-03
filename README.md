This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Smart dropdown

### Problem statement

The parent is responsible for passing the Array of countries. The child should iterate and display the list of countries received. The max no. of items listed in the dropdown should be configureable from the parent. Upon user selecting the country, the parent should log the selected the country.

If the user with Add privilege, then if the location user searching is not part of the list, then possible to add
If user, dont have privilege to Add, dont display the "Add & Select" button.

If user click on "X more...", then the complete list of countries would be displayed.

Bonus points:
If can integrate with Mock API 
Debounce to control user input

In the project directory, you can run:

### `npm i`

It will install necessary packages from package.json.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Screenshots

#### User without Add Priviledge
![Alt text](/screenshots/userWithoutAddPriviledge/Screenshot1.png?raw=true "Showing screenshot 1")
![Alt text](/screenshots/userWithoutAddPriviledge/Screenshot2.png?raw=true "Showing screenshot 2")
![Alt text](/screenshots/userWithoutAddPriviledge/Screenshot3.png?raw=true "Showing screenshot 3")
![Alt text](/screenshots/userWithoutAddPriviledge/Screenshot4.png?raw=true "Showing screenshot 4")
![Alt text](/screenshots/userWithoutAddPriviledge/Screenshot5.png?raw=true "Showing screenshot 5")
![Alt text](/screenshots/userWithoutAddPriviledge/Screenshot6.png?raw=true "Showing screenshot 6")

#### User with Add Priviledge
![Alt text](/screenshots/userWithAddPriviledge/Screenshot1.png?raw=true "Showing screenshot 1")
![Alt text](/screenshots/userWithAddPriviledge/Screenshot2.png?raw=true "Showing screenshot 2")
![Alt text](/screenshots/userWitAddPriviledge/Screenshot3.png?raw=true "Showing screenshot 3")
![Alt text](/screenshots/userWithAddPriviledge/Screenshot4.png?raw=true "Showing screenshot 4")
![Alt text](/screenshots/userWithAddPriviledge/Screenshot5.png?raw=true "Showing screenshot 5")
