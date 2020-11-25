import React, {useState} from 'react'
import { PropTypes } from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')


    const handleInputChange = (e) => { // recibo el evento
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {  

        e.preventDefault();

        if(inputValue.trim().length > 2){

            setCategories([inputValue]); //podemos obtener por medio de un callback el estado anterior de la funcion setCategories
            setInputValue('');
        }

        

    }


    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange= {handleInputChange}
            />
        </form>
    )


}


AddCategory.propType = {
    setCategories: PropTypes.func.isRequired
}