const db = new Dexie('TechDay');

db.version(1).stores({
    favourites: 'ID,*Title, *Location, *Time, *Theme, *IsFavourite'
    });

    async function getEvents() {
    const response = await fetch("talks.json");
    const json = await response.json();
    db.favourites.bulkPut(json.talks)
}