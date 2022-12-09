function generateVictorianName() {
    // List of possible first names
    const firstNames = ["Charles", "Lewis", "George", "Thomas", "Oscar", "William", "Anne", "John", "Alfred", "Mary"];
    
    // List of possible last names
    const lastNames = ["Dickens", "Carroll", "Eliot", "Hardy", "Wilde", "Makepeace Thackeray", "Brontë", "Ruskin", "Tennyson", "Shelley"];
    
    // Generate a random index between 0 and the number of names in each list
    const firstIndex = Math.floor(Math.random() * firstNames.length);
    const lastIndex = Math.floor(Math.random() * lastNames.length);
    
    // Return the name at the chosen index
    return `${firstNames[firstIndex]} ${lastNames[lastIndex]}`;
  }

  console.log(generateVictorianName());