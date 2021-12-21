import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { getUsername, patchTask } from "../../services/tasks/services";
import "./styles.css";

const TaskGroupCard = ({ title, tasks, users }) => {
  const [showedDescription, setShowedDescription] = useState();
	const [userListArray, setUserListArray] = useState();
  const [groupTasks, setGroupTasks] = useState(tasks);

  const userList = async () => {
    const arr = []
    for(const user of users) {
      const username = await  getUsername(user);
      arr.push(username);
    }
    return arr
  }

  const getUserList = () => {
    const list = userList().then((result) => {
      setUserListArray(result.join(", "))
    });
    return userListArray;
  }

  const updateTask = async (index, taskId) => {
    const groupTasksCopy = [...groupTasks]
    await patchTask(taskId, !groupTasks[index].done).then(() => {
      groupTasksCopy[index].done = !groupTasksCopy[index].done
      setGroupTasks(groupTasksCopy);
    });

  }

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className="edit-group">
          <MdEdit />
        </div>
      </div>
				<p className="users">{getUserList()}</p>
      <hr className="solid" />
      <div className="tasks-list">
        {groupTasks.map((task, index) => (
          <div key={index} className={(showedDescription === index)?"task-container task-description-shown":"task-container"}>
            <div
              className="task"
              onClick={() => {
                showedDescription === index
                  ? setShowedDescription()
                  : setShowedDescription(index);
              }}
            >
              <p className="task-name">{task.name}</p>
              <div className="`task-options`">
                  <Checkbox  checked={task.done} onClick={() => {updateTask(index, task.id)}}/>
              </div>
            </div>
            <div
              id="task-description"
              className="task-description"
              hidden={showedDescription !== index}
            >
              {task.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskGroupCard;
