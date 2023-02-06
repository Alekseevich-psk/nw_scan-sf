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
        .then((res) => (res.ok ? res : Promise.reject(res)))
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("expire", data.expire);
            resolve(true);
        })
        .catch((data) => {
            reject(data);
        });
}
