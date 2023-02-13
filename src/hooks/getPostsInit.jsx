import documents from "./../api/documents";

export default function getPostInit(data) {
    const idsArr = [];
    console.log(data);

    data.items.forEach(element => {
        idsArr.push(element.encodedId);
    });

    return new Promise((resolve, reject) => {
        console.log(idsArr);
        documents(idsArr, resolve, reject);
    })
}