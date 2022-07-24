import { useState } from 'react';
import Countries from '../components/Countries';
import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';

import {allCountries} from '../data/countries';


export default function ReactCountriesPage(){
  
  const [countryFilter, setCountryFilter] = useState('');

  function handleCountryFilterChange(newCountryFilter){
    setCountryFilter(newCountryFilter);
  }

  const countryFilterLowercase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries = countryFilterLowercase.length >= 3 ?
    allCountries.filter(({nameLowerCase}) => {
      return nameLowerCase.includes(countryFilterLowercase)
    }) : allCountries;
  
  return(
    <div>
      <Header>react-coutries</Header>
      <Main>
        <TextInput
          id='inputCountryFilter'
          labelDescription='Enter the Country name (at least 3 characters):'
          inputValue={countryFilter}
          onInputChange={handleCountryFilterChange}
          autoFocus
        />

      </Main>

      <Countries >{filteredCountries}</Countries>
     
      
    </div>
  )
}