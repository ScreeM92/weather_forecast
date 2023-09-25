import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities } from '../../api/openWeather.service';
import { SearchInput } from '../../types/search';

type Props = {
  onSearchChange: (input: SearchInput) => void,
}

const Search = ({ onSearchChange }: Props) => {
  const [searchValue, setSearchValue] = useState<SearchInput>();

  const loadOptions = async (inputValue: string) => {
    const citiesList = await fetchCities(inputValue);

    return {
      options: citiesList?.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const onChangeHandler = (newValue: SearchInput | any) => {
    setSearchValue(newValue);
    onSearchChange(newValue);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={searchValue}
      onChange={onChangeHandler}
      loadOptions={loadOptions as any}
    />
  );
};

export default Search;
