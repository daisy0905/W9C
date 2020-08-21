var tweetTopic = ["Alberta chief medical officer to update COVID-19 reponse Thursday", "Calgary brewery resurrects more than century-old beverage Cronk", "Popular Calgary obstacle course center InjaNation set to close", "There is no longer a heat warning in place for Calgary", "Calgary couple arrested, drugs and guns seized", "Massive smoke plumes rising from wildfire burining south of Penticton", "Trudeau planning social welfare system overhaul", "Fire investigator probes cause of northwest Calgary house fire", "Solar project seeks to replace abandoned oil wells in rural Alberta", "What to know about the CRA breach and shutdown"];
var arrayLength = tweetTopic.length;

for(var counter = 0; counter < tweetTopic.length; counter++) {
    console.log(tweetTopic[counter]);
}

var tweetTopic = [
    {tweet: "Alberta chief medical officer to update COVID-19 reponse Thursday", 
    username: "Globalnews",
    created_at: "08-18-2020",
    age: 30
    }, 
    {tweet: "Calgary brewery resurrects more than century-old beverage Cronk", 
    username: "Globalnews",
    created_at: "08-18-2020",
    age: 28
    }, 
    {tweet: "Popular Calgary obstacle course center InjaNation set to close", 
    username: "Globalnews",
    created_at: "08-19-2020",
    age: 35
    }, 
    {tweet: "There is no longer a heat warning in place for Calgary", 
    username: "Globalnews",
    created_at: "08-19-2020",
    age: 38
    }, 
    {tweet: "Calgary couple arrested, drugs and guns seized", 
    username: "Globalnews",
    created_at: "08-19-2020",
    age: 40
    }, 
    {tweet: "Massive smoke plumes rising from wildfire burining south of Penticton", 
    username: "Globalnews",
    created_at: "08-20-2020",
    age: 25
    }, 
    {tweet: "Trudeau planning social welfare system overhaul", 
    username: "Globalnews",
    created_at: "08-20-2020",
    age: 30
    }, 
    {tweet: "Fire investigator probes cause of northwest Calgary house fire", 
    username: "Globalnews",
    created_at: "08-18-2020",
    age: 30
    }, 
    {tweet: "Solar project seeks to replace abandoned oil wells in rural Alberta", 
    username: "Globalnews",
    created_at: "08-20-2020",
    age: 45
    }, 
    {tweet: "What to know about the CRA breach and shutdown", 
    username: "Globalnews",
    created_at: "08-20-2020",
    age: 40
    }
]

var arrayLength = tweetTopic.length;

for(var counter = 0; counter < tweetTopic.length; counter++) {
    number = counter + 1;
    console.log("No." + number);
    console.log("The tweet content:" + tweetTopic[counter].tweet + ";");
    console.log("the author:" + tweetTopic[counter].username + ";");
    console.log("Created at " + tweetTopic[counter].created_at + ".")
}
   