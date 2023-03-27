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

const filterSectionsByName = (type: string, sections: Section[]) => {
 sections.filter((section)=>{ return section.type === type})
}
filterSectionsByName("Unit", sampleSections); // -> 2 sections
filterSectionsByName("Location", sampleSections); // -> 1 sections

// Take list. Check current level to see if there are people.
// If there are people, put into result list.
// Loop 2nd time. If there are children, put into children list.
// Continue until there are no more children.

const deepFilter = (type: string, form: Section[]) => {
    const results = []
    const childArray = []
    for (let i =0; i<form.length;i++)
    {
        if (form.type[i] === "Person") {
            results.push(form[i]) 
        }
    }
        for (let i =0; i<form.length;i++)
    {
        if (form[i][children] {
            childArray.push(form[i]) 
        }
    }
    let nestedChildren = []
    childArray.forEach((child) =>{
        nestedChildren = deepFilter("Person",child.children)

    })
    return [...results,...nestedChildren]

}

deepFilter("Person", section) // All passengers, drivers, officers....

