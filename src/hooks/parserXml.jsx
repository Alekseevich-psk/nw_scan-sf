const XMLParser = require('react-xml-parser');

export default function parserXml(value) {

    const xml = new XMLParser().parseFromString(value);    // Assume xmlText contains the example XML
    console.log(xml);
    // console.log(xml.getElementsByTagName('Name'));
}

