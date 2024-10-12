// basic wrapper logic

class StorageWrapper {
  constructor(storageType = "local") {
    this.storage = storageType === "local" ? localStorage : sessionStorage;
  }

  // Save data (handles objects, arrays, etc.)
  set(key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      this.storage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Error saving to storage:", error);
    }
  }

  // Retrieve data and automatically parse it
  get(key) {
    try {
      const serializedValue = this.storage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      console.error("Error retrieving from storage:", error);
      return null;
    }
  }

  // Remove an item from storage
  remove(key) {
    try {
      this.storage.removeItem(key);
    } catch (error) {
      console.error("Error removing from storage:", error);
    }
  }

  // Clear all items from the storage
  clear() {
    try {
      this.storage.clear();
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  }
}

export default StorageWrapper;
