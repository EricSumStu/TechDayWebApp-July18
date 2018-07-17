
function createIndexedDB() {
  'use strict';
    if (!('indexedDB' in window)) {
      console.log('This browser doesn\'t support IndexedDB');
      return;
    }
  
    var dbPromise = idb.open('test-db1', 1);
    if (!upgradeDb.objectStoreNames.contains('Fav')) {
        var favOS = upgradeDb.createObjectStore('Fav', {keyPath: 'ID'});
      
      }
};

