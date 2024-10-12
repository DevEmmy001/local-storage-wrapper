// index.js

import StorageWrapper from "./src/storage.js";

// Create instance (localStorage or sessionStorage)
const localStore = new StorageWrapper("local");

// Test saving data
localStore.set("user", { name: "Emeka", role: "developer" });

// Test retrieving data
const user = localStore.get("user");
console.log(user); // { name: 'Emeka', role: 'developer' }

// Test removing data
localStore.remove("user");

// Test clearing all data
localStore.clear();
