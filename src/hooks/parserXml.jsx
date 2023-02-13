const convert = require('xml-js');

export default function parserXml(value) {
    let xml = value;
    const result1 = convert.xml2json(xml, { compact: true, spaces: 4 });
    const result2 = convert.xml2json(xml, { compact: false, spaces: 4 });
    console.log(result1, '\n', result2);
}
