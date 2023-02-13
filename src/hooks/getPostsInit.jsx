import documents from "./../api/documents";

export default function getPostInit(data) {
    const idsArr = [];

    data.items.forEach(element => {
        idsArr.push(element.encodedId);
    });

    return new Promise((resolve, reject) => {
        documents(idsArr, resolve, reject);
    })
}