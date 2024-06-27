import React from "react";
import LessInput from "../../shared/StatelessInputs/LessInput";
import './AddTask.css'
import Fullinput from "../../shared/Statefullinputs/Fullinput";

const AddTasks = () => {

    const addNameForOnChangeInput = (text) => {
        console.log(text);
    }

    return (
        <div className='add-tasks-container'>
            <form className='add-tasks-container__add-tasks-form'>
                <div className='add-tasks-form__maintaner'>
                    <p>Данные покупателя</p>
                    <LessInput placeholder='Введите ваш email' type='email' onChangeProps={addNameForOnChangeInput}/>
                    <LessInput placeholder='Введите ваше имя' type='text' onChangeProps={addNameForOnChangeInput}/>
                    <LessInput placeholder='Сумма в долларах ' type='number' onChangeProps={addNameForOnChangeInput}/>
                </div>
                <div>
                    <p>Введите дату рождения:</p>
                    <Fullinput localType='date' />
                </div>
            </form>
        </div>
    )
};

export default AddTasks;

