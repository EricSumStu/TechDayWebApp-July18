const db = new Dexie('Admin');

db.version(1).stores({
    events: 'ID,*Title '
    });
    

async function clearEvents(){
    db.events.clear();
}
async function getEvents(){
    const response = await fetch('./talks.json');
    const json = await response.json();
    db.events.bulkPut(json.talks);
}
async function getEventbyTitle(talk){
    db.events.where(title).equals(talk).each(p => console.log(p))
    
}

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


