import React from "react";
import LessInput from "../../shared/StatelessInputs/LessInput";
import './AddTask.css'
import Fullinput from "../../shared/Statefullinputs/Fullinput";

const AddTasks = (props) => {
    const addNameForOnChangeInput = (text) => {
        console.log(text);
    }

    return (
        <div className='add-tasks-container'>
            <form className='add-tasks-container__add-tasks-form' onSubmit={(e) => {
                e.preventDefault();
                props.onAdd(e.target);
            }}>
                <div className='add-tasks-form__maintaner'>
                    <p className='label'>Исполнитель</p>
                    <div className='maintaner-info-container'>
                        <LessInput placeholder='Введите ваш email' type='email' name={'email'} onChangeProps={addNameForOnChangeInput}
                                   classes='maintaner-item'/>
                        <LessInput placeholder='Введите ваше имя' type='text' name={'name'} onChangeProps={addNameForOnChangeInput}
                                   classes='maintaner-item'/>
                        <LessInput placeholder='Введите ваше сообщение' type='text' name={'message'}
                                   onChangeProps={addNameForOnChangeInput} classes='maintaner-item'/>
                    </div>

                </div>
                <div>
                    <p className='label'>Введите дату рождения</p>
                    <Fullinput name={'date'} localType='date'/>
                </div>
                <div>
                    <p className='label'>Введите валюту</p>
                    <Fullinput name={'description'} placeholder='Какую валюту вы хотите поменять' localType='text-area'/>
                </div>
                <button className='btn form-btn' onClick={(e) => props.onAdd(e)}>Отправить данные</button>
                <button className='btn form-btn' onClick={() => props.onClose()}>Отмена</button>
            </form>
        </div>
    )
};

export default AddTasks;

