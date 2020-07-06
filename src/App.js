import React, { useState } from 'react';
import constants from './constants';
import CustomDropdown from './components/CustomDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

const App = () => {
    const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false);
    const [ isAddOptionsAllowed, setIsAddOptionsAllowed ] = useState(false);
    const [ countries, setCountries] = useState(null);
    const [ selectedCountry, setSelectedCountry ] = useState('No country selected');
    const [ userRole, setUserRole ] = useState(constants.role.user);

    const loginHandler = async () => {
      setIsUserLoggedIn(true);
      if (userRole === constants.role.admin) {
        setIsAddOptionsAllowed(true);
      } else {
        setIsAddOptionsAllowed(false);
      }
      const response = await fetch(constants.countriesURL);
      const responseJson = await response.json();
      setCountries(responseJson);
    }

    const logoutHandler = () => {
      setSelectedCountry('No country selected');
      setUserRole(constants.role.user);
      setIsUserLoggedIn(false);
    }
    return (
      <div className="App container">
          <p className="mt-4">React FrontEnd Coding Challenge</p>
          {!isUserLoggedIn && 
              <div>
                  Role: <label>
                            <input  type="radio" 
                                    defaultChecked={userRole === constants.role.user}  
                                    onChange={() => setUserRole(constants.role.user)} 
                                    name="userRole" /> User
                        </label>
                        <label>
                            <input  className="ml-3" 
                                    type="radio" 
                                    defaultChecked={userRole === constants.role.admin} 
                                    onChange={() => setUserRole(constants.role.admin)} 
                                    name="userRole" /> Admin (Add priviledges)
                        </label>
                        
                  <div className="mt-3">
                      <button className="btn btn-primary" onClick={() => loginHandler()}>Login</button>
                  </div>
          </div>}

          {isUserLoggedIn && countries && 
              <div>
                  <div>
                      <button className="btn btn-primary" onClick={() => logoutHandler()}>Logout</button>
                  </div>
                  {/* Upon user selecting the country, the parent logs the selected the country. */}
                  <p className="mt-2">Selected country shown in parent component: {selectedCountry} </p>
                  {isUserLoggedIn && countries && 
                      <CustomDropdown values={countries}
                                      maxNumberOfItemsInDropdown={constants.numberOfMaxOptionsToBeShownAtOneTime}
                                      isAddOptionsAllowed={isAddOptionsAllowed}
                                      updateSelectedValue={(country) => setSelectedCountry(country)}
                  ></CustomDropdown>}
              </div>}
      </div>
    );
}

export default App;
