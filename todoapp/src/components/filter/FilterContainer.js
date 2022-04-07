import React from 'react';
import ButtonAdd from './ButtonAdd';
import FormAdd from './FormAdd';
import Search from './Search';
import Sort from './Sort';

class FilterContainer extends React.Component{
    render(){
        return(
            <>
            <div className="row">
            <Search />
            <Sort />
            <ButtonAdd />
        </div>
       <FormAdd/>
            </>
        );
    }
}

export default FilterContainer;