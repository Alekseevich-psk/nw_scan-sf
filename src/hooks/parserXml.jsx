export default function parserXml(value) {
    let subRes = value.replace(/(<([^>]+)>)/ig, "");
    return subRes.replace(/['&lt;''br&gt;''br&gt;''/'aA-zZ]/g, "").slice(0, 300) + '...';
}

