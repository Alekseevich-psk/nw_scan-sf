export default function login(login, password, resolve, reject) {
    if (!login && !password) return false;

    const params = new URLSearchParams();
    params.set("login", login);
    params.set("password", password);

    fetch("https://gateway.scan-interfax.ru/api/v1/account/login", {
        method: "POST",
        header: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: params,
    })
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res;
            } else {
                let error = new Error(res.statusText);
                error.response = res;
                throw error;
            }
        })
        // .then((res) => {
        //     if (res.headers["content-type"] !== "application/json") {
        //         let error = new Error("Некорректный ответ от сервера");
        //         error.response = res;
        //         throw error;
        //     }
        //     return res;
        // })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
            localStorage.setItem("accessToken", res.accessToken);
            localStorage.setItem("expire", res.expire);
            resolve(res);
        })
        .catch((e) => {
            // console.log("Error: " + e.message);
            // console.log(e.response);
            reject("Error: " + e.message);
        });
}
