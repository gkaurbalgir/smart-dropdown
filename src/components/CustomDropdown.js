import React, { useState } from 'react';
import _ from 'lodash';

const CustomDropdown =  props => { 
    const [ showAllOptions, setShowAllOptions ] = useState(false);
    const [ currentValues, setCurrentValues ] = useState(props.values);
    const [ showNotFoundText, setShowNotFoundText ] = useState(false);
    const [ showAddAndSelectOption, setShowAddAndSelectOption ] = useState(false);
    const [ searchText, setSearchText ] = useState('');
    const [ showSelectedOption, setShowSelectedOption ] = useState(false);
    const [ dropdownValue, setDropdownValue ] = useState('Select a location');
    const [ isShowDropdownPopup, setIsShowDropdownPopup ] = useState(false);

    // Debounce to control user input
    const setSearchTerm  = _.debounce((searchText) => {
        setSearchText(searchText);
        setShowSelectedOption(false);
        const filteredValues = props.values.filter( country => {
            return country.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setCurrentValues(filteredValues);
        if (!filteredValues || (filteredValues && !filteredValues.length)) {
            setShowNotFoundText(true);
            setShowAddAndSelectOption(props.isAddOptionsAllowed || false);
        } else {
            setShowNotFoundText(false);
            setShowAddAndSelectOption(false);
        }
    }, 500);

    const addAndSelectCountry = () => {
        setDropdownValue(searchText);
        const oldValues = props.values;
        const newCountry = { name: searchText, alpha3Code: `${dropdownValue.substring(0, 3)}+${Date.now()}` };
        // add new country at the top
        oldValues.unshift(newCountry);
        setCurrentValues(oldValues);
        setShowSelectedOption(true);
        setShowNotFoundText(false);
        setShowAddAndSelectOption(false);
        props.updateSelectedValue(searchText);
    };

    const onClickSelectWrapper = (event) => {
        if (!(event.target.classList.value.includes('n-more') ||
                event.target.classList.value.includes('add-country') ||
                event.target.classList.value.includes('input-field'))) {
            setIsShowDropdownPopup(!isShowDropdownPopup);
        }        
        if (isShowDropdownPopup) {
            setCurrentValues(props.values);
        } else {
            setShowAllOptions(false);
            setSearchText('');
        }
    };

    const onClickSelectOption = (countryName) => {
        setShowSelectedOption(true);
        setDropdownValue(countryName);
        props.updateSelectedValue(countryName);
    };

    return (
        <div className="custom-dropdown">
            <div className="custom-dropdown-select-wrapper" onClick={(event) => onClickSelectWrapper(event)}>
                <div className={"custom-dropdown-select "+ (isShowDropdownPopup ? 'open': '')}>
                    <div className="custom-dropdown-select-trigger"><span>{showSelectedOption ? dropdownValue: 'Select a location'}</span>
                        <div className="arrow"></div>
                    </div>
                    <div className="custom-dropdown-options">
                    <div className="px-3 pt-3">
                        <div className="form-group has-search input-icons">
                        <i className="fa fa-search icon"></i> 
                            <input  type="text" 
                                    className="form-control input-field" 
                                    placeholder="Search..." 
                                    value={searchText}
                                    onChange={e => {setSearchTerm(e.target.value)}}  />
                        </div>
                    </div>
                    { showNotFoundText && <span className="p-3">"{searchText}" not found</span>}
                    {/* If user, dont have privilege to Add, dont display the "Add & Select" button. 
                        If user click on "X more...", then the complete list of values would be displayed. */}
                    { showAddAndSelectOption && 
                        <button className="m-2 btn btn-primary add-country" 
                                onClick={() => addAndSelectCountry()}>
                            Add & Select
                        </button> }
                    {/* The child iterates and displays the list of values received.  */}
                    { currentValues && currentValues.map((country, index) => {
                        return (
                            <span   key={`${country.alpha3Code}+${Date.now()}`} 
                                    onClick={() => onClickSelectOption(country.name)}
                                    className={"custom-dropdown-option"+(country.name === dropdownValue && showSelectedOption ? ' selected' : '')}>
                                {((props.maxNumberOfItemsInDropdown && index < props.maxNumberOfItemsInDropdown) || showAllOptions) && 
                                    <span>{country.name}</span>}
                            </span>   
                        );
                     })}  
                     {props.maxNumberOfItemsInDropdown && !showAllOptions && !searchText && 
                        <span className="float-right pr-2 n-more" onClick={() => setShowAllOptions(true)}>
                            {props.values.length - props.maxNumberOfItemsInDropdown} more...
                        </span>}                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomDropdown;
