import React, {useState} from "react";
import AddTasks from "./AddTasks/AddTask";

const TaskManager = () => {

    const [addTaskIsOpened, setAddTaskIsOpened] = useState(false);

    return (
        <div className='tasks-container'>
            <button className='btn task-container__add-task-button' onClick={() => setAddTaskIsOpened(!addTaskIsOpened)}>
                Купить доллары
            </button>
            {addTaskIsOpened && <AddTasks />}

        </div>
    );
}

export default TaskManager;
