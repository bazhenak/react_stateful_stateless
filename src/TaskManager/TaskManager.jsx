import React, {useState} from "react";
import AddTasks from "./AddTasks/AddTask";
import TaskList from "./TaskList.jsx";

const TaskManager = () => {

    const [addTaskIsOpened, setAddTaskIsOpened] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState({});

    const onCloseAddTask = () => {
        setAddTaskIsOpened(false);
    }

    const onAdd = (e) => {
        console.log("e", e)
        const obj = Object.values(e.target).reduce((objj, field) => {

            objj[field.name] = field.value;
            console.log(objj)
            return objj
        }, {});
        console.log(obj)

        setTask(obj)
        setTaskList([...taskList, obj]);
    }

    return (
        <div className='tasks-container'>
            {addTaskIsOpened && <div className='middle-ware-fore-pop-up'></div>}
            <button className='btn task-container__add-task-button'
                    onClick={() => setAddTaskIsOpened(!addTaskIsOpened)}>
                Добавить задачу
            </button>
            {addTaskIsOpened && <AddTasks onClose={onCloseAddTask} onAdd={onAdd} setTask={"a"}/>}
            <TaskList tasks={taskList}/>

        </div>
    )
};

export default TaskManager;
