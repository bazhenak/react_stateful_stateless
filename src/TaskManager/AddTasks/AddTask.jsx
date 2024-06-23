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
                    <p>Исполнитель</p>
                    <LessInput placeholder='Введите вашу фамилию' type='text' onChangeProps={addNameForOnChangeInput}/>
                    <LessInput placeholder='Введите ваше имя' type='text' onChangeProps={addNameForOnChangeInput}/>
                    <LessInput placeholder='Введите ваше отчество' type='text' onChangeProps={addNameForOnChangeInput}/>
                </div>
                <div>
                    <Fullinput localType='date' />
                </div>
            </form>
        </div>
    )
};

export default AddTasks;

