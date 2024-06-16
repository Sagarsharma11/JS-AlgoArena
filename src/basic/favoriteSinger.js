"use strict";
function favoriteSinger(playlist) {
    if (!Array.isArray(playlist) || playlist.length === 0) {
        return 0; // If the playlist is empty, there are no favorite singers
    }

    // Create an object to store the count of songs for each singer
    const singerCounts = {};

    // Iterate over the playlist to count the occurrences of each singer
    for (let i = 0; i < playlist.length; i++) {
        const singer = playlist[i];
        singerCounts[singer] = (singerCounts[singer] || 0) + 1;
    }


    // Find the maximum count of songs for any singer
    let maxCount = 0;
    for (const count of Object.values(singerCounts)) {
        maxCount = Math.max(maxCount, count);
    }


    // Count the number of singers whose count matches the maximum count
    let favoriteSingersCount = 0;
    for (const count of Object.values(singerCounts)) {
        if (count === maxCount) {
            favoriteSingersCount++;
        }
    }


    return favoriteSingersCount;
}


module.exports = { favoriteSinger }