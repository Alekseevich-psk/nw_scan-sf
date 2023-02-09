export default function objectSearch(resolve, reject) {
    console.log("test");

    const token = localStorage.getItem("accessToken");
    if (!token) return;

    fetch("https://gateway.scan-interfax.ru/api/v1/account/info", {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            // resolve(data);
        })
        .catch((data) => {
            // reject(data);
        });
}


