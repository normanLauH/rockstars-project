import React, { useState, useEffect } from "react";
import TaskGroupCard from "../../components/taskGroupCard/component";
import {
  getTasksGroups,
  getTaskGroupsUsers,
  getTasks,
} from "../../services/tasks/services";
import { fetchUser } from "../../services/user/services";
import "./styles.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [tasksGroups, setTasksGroups] = useState([]);
  const [tasksUser, setTasksUser] = useState([]);
  const [user, setUser] = useState({ id: "" });

  useEffect(() => {
    getTaskUsers();
    getGroups();
    getGroupTasks();
    getUser();
  }, []);

  const getTaskUsers = async () => setTasksUser(await getTaskGroupsUsers());
  const getGroups = async () => setTasksGroups(await getTasksGroups());
  const getGroupTasks = async () => setTasks(await getTasks());
  const getUser = async () => setUser(await fetchUser());

  const filterTasks = (groupId) => {
    const newArr = [];
    tasks.forEach((task) => task.taskgroup === groupId && newArr.push(task));
    return newArr;
  };

  const filterUsers = (groupId) => {
    const newArr = [];
    tasksUser.forEach(
      (user) => user.taskgroup === groupId && newArr.push(user.user)
    );
    return newArr;
  };

  return (
    <div className="home">
      <div className="tasksGroups-container">
        {tasksUser.map((group, index) =>
          group.user === user.id ? (
            <TaskGroupCard
              key={index}
              title={
                tasksGroups.find((item) => item.id === group.taskgroup)?.name
              }
              tasks={filterTasks(group.taskgroup)}
              users={filterUsers(group.taskgroup)}
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Home;
