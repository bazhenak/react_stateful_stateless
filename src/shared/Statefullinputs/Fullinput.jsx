import React, {useState} from "react";

const Fullinput = ({localType}) => {

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
               <input type='date' className={isValid ? 'valid' : 'is-not-valid'} onChange={(e) => isValidDate(e.target.value)}/>
               </>
           );
       case 'password':
           return (
               <input type='password' className={isValid ? 'is-not-valid' : 'valid'}/>
           );
   }
};

export default Fullinput;
