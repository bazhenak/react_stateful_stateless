import React, {useState} from "react";

const Fullinput = ({localType, placeholder, propsName}) => {

    const [isValid, setIsValid] = useState(false);
    const [disabled, setDisabled] = useState (false);

    const isValidDate = (date) => {
        setDisabled(date.split('-')[0] > 2005);
    };

   switch (localType) {
       case 'date':
           return (
               <>
                   {disabled && <label>Вы младше 18 лет. К сожалению, задача для вас недоступна</label>}
               <input name={propsName} type='date' className={isValid ? 'valid' : 'is-not-valid'} onChange={(e) => isValidDate(e.target.value)}/>
               </>
           );
       case 'password':
           return (
               <input name={propsName} type='password' className={isValid ? 'is-not-valid' : 'valid'}/>
           );

       case 'text-area':
           return (
                <textarea name={propsName} placeholder={placeholder} className='textarea'></textarea>
           );
   }
};

export default Fullinput;
