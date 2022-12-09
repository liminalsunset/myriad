function generateName() {
    // Set up the arrays of syllables
    const prefixes = ['lu', 'li', 'ka', 'ta', 'ra', 'sa', 'gi', 'la', 'ma'];
    const suffixes = ['tha', 'na', 'ni', 'li', 'ra', 'ta', 'gi', 'ma', 'da'];
  
    // Generate a random number between 1 and 3
    const numParts = Math.ceil(Math.random() * 3);
  
    // Start with an empty name
    let name = '';
  
    // Add a random prefix to the name
    name += prefixes[Math.floor(Math.random() * prefixes.length)];
  
    // Add a random number of random suffixes to the name
    for (let i = 0; i < numParts; i++) {
        name += suffixes[Math.floor(Math.random() * suffixes.length)];
    }
  
    // Capitalize the first letter of the name
    name = name[0].toUpperCase() + name.slice(1);
  
    // Return the generated name
    return name;
}
  
  
console.log(generateName());