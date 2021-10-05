var contact_list = [
    {
        "firstName": "Sagar",
        "lastName": "Biswas",
        "number": "8967997966",
        "likes": ["Football", "Badminton", "Coding"]
    },
    {
        "firstName": "Sudipto",
        "lastName": "Roy",
        "number": "8967997966",
        "likes": ["Gym", "Singing", "Cats"]
    },
    {
        "firstName": "Bapi",
        "lastName": "Biswas",
        "number": "8967997966",
        "likes": ["Doctoring", "Singing", "Motivating"]
    },
    {
        "firstName": "Joy",
        "lastName": "Biswas",
        "number": "8967997966",
        "likes": ["Gym", "Girls", "Movies"]
    },
    {
        "firstName": "Anirban",
        "lastName": "Biswas",
        "number": "8967997966",
        "likes": ["Guiter", "Study", "Gym"]
    },
]

function search(name, prop)
{
    for (var i = 0; i < contact_list.length; i++)
    {
        if (contact_list[i].firstName === name)
        {
            return contact_list[i][prop] || "No Such Property";
        }
    }
        return "No Such Contact";
}

console.log(search("Anirban", "likes"))