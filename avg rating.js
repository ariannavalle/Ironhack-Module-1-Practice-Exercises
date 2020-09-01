cities = [
    {
        coordinates: [-70.436775, -34.957741],
        rating: 7,
        name: 'Termas del Flaco',
        categories: 'hot_springs,interesting_places,natural,natural_springs,springs_others',
        city: 'San Fernando'
    },
    {
        coordinates: [-71.65654, -39.227898],
        rating: 3,
        name: 'Hotel & Termas Huife',
        categories: 'hot_springs,interesting_places,natural,natural_springs',
        city: 'Puyehue'
    },
    {
        coordinates: [-68.043579, -22.720047],
        rating: 2,
        name: 'Termas de Puritama',
        categories: 'view_points,other,hot_springs,interesting_places,natural,natural_springs,springs_others',
        city: 'Puyehue'
    },
    {
        coordinates: [-72.328499, -40.711769],
        rating: 2,
        name: 'Hotel Termas de Puyehue',
        categories: 'hot_springs,accomodations,interesting_places,natural,natural_springs,springs_others,other_hotels',
        city: 'Puyehue'
    },
    {
        coordinates: [-72.39624, -42.918213],
        rating: 2,
        name: 'Termas del Amarillo',
        categories: 'hot_springs,interesting_places,natural,natural_springs,other_bathhouses,baths_and_saunas,amusements',
        city: 'Cisnes'
    },
    {
        coordinates: [-72.533287, -44.029133],
        rating: 1,
        name: 'Termas El Sauce',
        categories: 'hot_springs,interesting_places,natural,natural_springs',
        city: 'Cisnes'
    },
    {
        coordinates: [-70.476555, -35.136669],
        rating: 1,
        name: 'Baños San Pedro',
        categories: 'fountains,hot_springs,urban_environment,cultural,interesting_places,natural,natural_springs',
        city: 'San Fernando'
    },
    {
        coordinates: [-70.434425, -34.958961],
        rating: 1,
        name: 'Termas del Flaco',
        categories: 'hot_springs,interesting_places,natural,natural_springs,water_parks,amusements',
        city: 'San Fernando'
    },
    {
        coordinates: [-72.783638, -15.143384],
        rating: 1,
        name: 'Baños Termales de Luicho',
        categories: 'hot_springs,interesting_places,natural,natural_springs,baths_and_saunas,thermal_baths,amusements',
        city: undefined
    },
    {
        coordinates: [-59.509819, -18.456757],
        rating: 1,
        name: 'Aguas Termales',
        categories: 'hot_springs,interesting_places,natural,natural_springs',
        city: 'Roboré'
    }
]


function getAvgRating(citiesArray) {
    let cityAndRatings = citiesArray.reduce(function (obj, elem) {
        if(!elem.city) return obj
            if (elem.city in obj) {
                obj[elem.city].count++;
                obj[elem.city]['total_rating'] += elem.rating
            }
            else{

                obj[elem.city] = {
                    count: 1,
                    total_rating: elem.rating
                }
            }
            return obj;
    }, {})
    return Object.keys(cityAndRatings).map(e => {return {[e]: cityAndRatings[e].total_rating/cityAndRatings[e].count}});
}
console.log(getAvgRating(cities));

