function firstWord(str) {
    if (!str) return ""; // Return an empty string if the input is empty
    const firstSpaceIndex = str.indexOf(" "); // Find the index of the first space
    return firstSpaceIndex === -1 ? str : str.slice(0, firstSpaceIndex); // Return the entire string or up to the first space
}

const s = prompt("Enter String:");
alert(firstWord(s));
