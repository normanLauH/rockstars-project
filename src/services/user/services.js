export const login = async (basicUser) => {
    try {
        const response = await fetch("http://104.237.129.63:8021/api/token/", {
            headers: {
                "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(basicUser),
        });
        if (response.status === 200) {
            const tokens = await response.json();
            const logUser = {
                token: tokens.access,
                refreshToken: tokens.refresh
            };
            return logUser;
        } else {
            const responseJSON = await response.json();
            console.log(responseJSON.detail);
        }
    } catch (error) {
        console.log("Connection Error");
    }
};

export const signup = async (basicUser) => {
    const response = await fetch("http://104.237.129.63:8021/api/users/register", {
        headers: {
            "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(basicUser),
    });
    if (basicUser.email &&  basicUser.password && response.status === 200) {
        const tokens = await response.json();
        const logUser = {
            email: basicUser.email,
            password: basicUser.password,
            token: tokens.access,
            refreshToken: tokens.refresh
        };
        return logUser;
    } else {
        alert("Sign Up Error")
    }
}

export const fetchUser = async () => {
    const token = JSON.parse(localStorage.getItem("token")).token;
    const response = await fetch("http://104.237.129.63:8021/api/users/", {
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        method: "GET",
    });
    if (response.status === 200) {
        const users = await response.json();
        const user = users.find(user => user.username === JSON.parse(localStorage.getItem("username")));
        return user;
    } else {
        console.log("Failed to get user")
    }
}