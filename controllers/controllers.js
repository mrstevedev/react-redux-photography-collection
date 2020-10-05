const api = require("../api/photos.json");

const getAPI = (req, res, next) => {
  res.status(200).json(
    [
        {
            "id": 1,
            "href": "one",
            "title": "Bonita Misty Morning",
            "location": "Eastlake, CA",
            "camera": "Nikon D3300",
            "imagePath": "./img/bonitaskies.jpg"
        },
        {
            "id": 2,
            "href": "two",
            "title": "Bonita Early Morning",
            "location": "Eastlake, CA",
            "camera": "Nikon D3300",
            "imagePath": "./img/bonitaskies2.jpg"
        },
        {
            "id": 3,
            "href": "three",
            "title": "Bonita Sun",
            "location": "Barrio Logan, CA",
            "camera": "Nikon D3300",
            "imagePath": "./img/bonitasun.jpg"
        },
        {
            "id": 4,
            "href": "four",
            "title": "Bonita Reflection",
            "location": "Barrio Logan, CA",
            "camera": "Nikon D3300",
            "imagePath": "./img/bonitasunreflection.jpg"
        },
        {
            "id": 5,
            "href": "five",
            "title": "Bonita Trolly",
            "location": "Barrio Logan, CA",
            "camera": "Nikon D3300",
            "imagePath": "./img/bonitatrolly.jpg"
        },
        {
            "id": 6,
            "href": "six",
            "title": "Bonita Bridge",
            "location": "Barrio Logan, CA",
            "camera": "Nikon D3300",
            "imagePath": "./img/bonitabridge1.jpg"
        },
        {
            "id": 7,
            "href": "seven",
            "title": "Bonita Wonder",
            "location": "Barrio Logan, CA",
            "camera": "Nikon D3300",
            "imagePath": "./img/bonitabridge.jpg"
        },
        {
            "id": 8,
            "href": "eight",
            "title": "Bonita Thoughts",
            "location": "Barrio Logan, CA",
            "camera": "Nikon D3300",
            "imagePath": "./img/bonitaclose.jpg"
        },
        {
            "id": 9,
            "href": "nine",
            "title": "DJ Tech Set I",
            "location": "Rooftop The Ray Hotel, Downtown San Diego",
            "camera": "GS Raptor Smartphone",
            "imagePath": "./img/djtech.jpg"
        },
        {
            "id": 10,
            "href": "ten",
            "title": "DJ Tech Set II",
            "location": "The Ray Hotel, Downtown San Diego",
            "camera": "GS Raptor Smartphone",
            "imagePath": "./img/djtech2.jpg"
        },
        {
            "id": 11,
            "href": "eleven",
            "title": "DJ Tech Set III",
            "location": "The Ray Hotel, Downtown San Diego",
            "camera": "GS Raptor Smartphone",
            "imagePath": "./img/djtech3.jpg"
        },
        {
            "id": 12,
            "href": "twelve",
            "title": "Loft Couple",
            "location": "The Ray Hotel, Downtown San Diego",
            "camera": "GS Raptor Smartphone",
            "imagePath": "./img/loftcouple.jpg"
        }
    ]
  );
};

module.exports.getAPI = getAPI;