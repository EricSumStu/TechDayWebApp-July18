const db = new Dexie('TechDay');

db.version(1).stores({
    favourites: 'ID,*Title, *Location, *Time, *Theme'
    });
    


async function getEvents(talk) {
    console.log(talk);
    console.log(talk.Title);
    db.favourites.add(talk);
}
async function removeEvents(talk){
    console.log(talk);
    console.log(talk.Title);
    db.favourites.delete(talk);
}
