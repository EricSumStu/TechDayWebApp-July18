const db = new Dexie('TechDay');

db.version(1).stores({
    events: 'ID,*Title '
    });
    


async function addEvent(talk) {
    console.log(talk);
    console.log(talk.Title);
    db.events.add(talk);
}
async function removeEvent(talk){
    console.log(talk);
    console.log(talk.Title);
    db.events.delete(talk);
}

