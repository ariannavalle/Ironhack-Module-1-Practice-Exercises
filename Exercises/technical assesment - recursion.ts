// recursive algorhitm
// get all the type: "Person" in an indefinite amount of nested objects

class Section {
    name: string;
    type: string;
    children: Section[];
}

const sampleSections = [
    {
        type: "Person"
    },
    {
        name: "Geolocation",
        type: "Location"
    },
    {
        name: "Car 1",
        type: "Unit",
        children: [
            {
                firstname: "bob",
                name: "Passenger",
                type: "Person"
            },
            {
                firstname: "joe",
                name: "Passenger",
                type: "Person"
            },
            {
                firstname: "jane",
                name: "Passenger",
                type: "Person"
            },
            {
                type: "Ownership",
                children: [
                    {
                        name: "driver",
                        type: "Person",
                        children: [
                            {
                                type:"Person"
                            }
                        ]
                    }
                ]
            }
        ],
    },
    {
        name: "Car 2",
        type: "Unit",
        children: [
            {
                firstname: "Arianna",
                name: "Passenger",
                type: "Person"
            },
            {
                firstname: "joe",
                name: "Passenger",
                type: "Person"
            },
            {
                firstname: "jane",
                name: "Passenger",
                type: "Person"
            },
            {
                type: "Ownership",
                children: [
                    {
                        name: "driver",
                        type: "Person"
                    }
                ]
            }
        ],
    },
    {
        name: "Car 2",
        type: "Unit"
    }
]

const filterSectionsByName = (type: string, sections: any[]) => {
    return sections.filter((section)=>{ return section.type === type})
}
// console.log(filterSectionsByName("Unit", sampleSections)); // -> 3 sections
// console.log(filterSectionsByName("Location", sampleSections)); // -> 1 sections

// Take list. Check current level to see if there are people.
// If there are people, put into result list.
// Loop 2nd time. If there are children, put into children list.
// Continue until there are no more children.

const deepFilter = (type: string, form: any[]) => {
    const results = []
    const childArray = []
    for (let i =0; i<form.length;i++)
    {
        if (form[i].type === type) {
            results.push(form[i])
        }
        if (form[i].children) {
            childArray.push(form[i])
        }
    }
    let nestedChildren = []
    childArray.forEach((child) =>{
        nestedChildren = deepFilter(type,child.children)

    })
    return [...results,childArray,...nestedChildren]

}

console.log(deepFilter("Person", sampleSections)) // All passengers, drivers, officers....

