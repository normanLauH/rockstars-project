export const getTasksGroups = async () => {
    try {
        const token = JSON.parse(localStorage.getItem("token")).token;
        const response = await fetch("http://104.237.129.63:8021/api/tasks/TaskGroup", {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            method: "GET",
        });
        if (response.status === 200) {
            const taskGroups = await response.json();
            return taskGroups;
        } else {
            const responseJSON = await response.json();
            console.log(responseJSON.detail);
        }
    }catch (error) {
        console.log(error);
    }
}

export const getTaskGroupsUsers = async () => {
    try {
        const token = JSON.parse(localStorage.getItem("token")).token;
        const response = await fetch("http://104.237.129.63:8021/api/tasks/TaskGroupUsers/", {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            method: "GET",
        });
        if (response.status === 200) {
            const taskGroupsUsers = await response.json();
            return taskGroupsUsers;
        } else {
            const responseJSON = await response.json();
            console.log(responseJSON.detail);
        }
    }catch (error) {
        console.log(error);
    }
}

export const getTasks = async () => {
    try {
        const token = JSON.parse(localStorage.getItem("token")).token;
        const response = await fetch("http://104.237.129.63:8021/api/tasks/Task/", {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            method: "GET",
        });
        if (response.status === 200) {
            const tasks = await response.json();
            return tasks;
        } else {
            const responseJSON = await response.json();
            console.log(responseJSON.detail);
        }
    }catch (error) {
        console.log(error);
    }
}

export const getUsername = async (userId) => {
    try {
        const token = JSON.parse(localStorage.getItem("token")).token;
        const response = await fetch(`http://104.237.129.63:8021/api/users/${userId}/`, {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            method: "GET",
        });
        if (response.status === 200) {
            const user = await response.json();
            return user.username;
        } else {
            const responseJSON = await response.json();
            console.log(responseJSON.detail);
        }
    }catch (error) {
        console.log(error);
    }
}

export const patchTask = async (taskId, state) => {
    try {
        const token = JSON.parse(localStorage.getItem("token")).token;
        const response = await fetch(`http://104.237.129.63:8021/api/tasks/Task/${taskId}/`, {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            method: "PATCH",
            body: JSON.stringify({done: state})
        });
        if (response.status !== 200) {
            console.log(response.status)
        }

    } catch (error) {
        console.log(error)
    }
}