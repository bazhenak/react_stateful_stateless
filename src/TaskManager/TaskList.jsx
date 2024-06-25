import React from "react";

const TaskList = (tasks) => {
    if (tasks) {
        return (
            <div>
                <p>No tasks</p>
            </div>
        )
    }
    return (
        <div>
            <p>Task List</p>
            {tasks.map((task, index) => {
                return (
                    <div key={index}>
                        <p>{index + 1}</p>
                        <p>{task.email}</p>
                        <p>{task.name}</p>
                        <p>{task.message}</p>
                        <div>
                            {task.description}
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default TaskList;
