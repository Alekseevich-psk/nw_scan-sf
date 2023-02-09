export default function histograms(objInputValues, objCheckBoxValues) {
    console.log(objInputValues, objCheckBoxValues);

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
            "limit": objInputValues.count,
            "sortDirectionType": "asc",
            "similarMode": "none",
            "issueDateInterval": {
                "startDate": objInputValues.dateStart,
                "endDate": objInputValues.dateEnd
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
                            "inn": objInputValues.inn,
                            "maxFullness": objCheckBoxValues.maxFullness,
                            "inBusinessNews": objCheckBoxValues.inBusinessNews
                        }
                    ],
                    "onlyMainRole": objCheckBoxValues.onlyMainRole,
                    "tonality": objInputValues.ton,
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
