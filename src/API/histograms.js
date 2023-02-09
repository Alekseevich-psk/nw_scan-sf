export default function histograms(obj) {
    console.log(obj);

    const token = localStorage.getItem("accessToken");
    if (!token) return;
    //7710137066

    fetch("https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            "intervalType": "month",
            "histogramTypes": ["totalDocuments", "riskFactors"],
            "sortType": "issueDate",
            "limit": obj.count,
            "sortDirectionType": "asc",
            "similarMode": "none",
            "issueDateInterval": {
                "startDate": obj.dateStart,
                "endDate": obj.dateEnd
            },
            "attributeFilters": {
                "excludeTechNews": true,
                "excludeAnnouncements": true,
                "excludeDigests": true
            },
            "searchContext": {
                "targetSearchEntitiesContext": {
                    "targetSearchEntities": [
                        {
                            "type": "company",
                            "sparkId": null,
                            "entityId": null,
                            "inn": obj.inn,
                            "maxFullness": true,
                            "inBusinessNews": null
                        }
                    ],
                    "onlyMainRole": true,
                    "tonality": obj.ton,
                    "onlyWithRiskFactors": false,
                },
        
            },
        }),
    })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            console.log(data);
            // resolve(data);
        })
        .catch((data) => {
            console.log(data);
            // reject(data);
        });
}
