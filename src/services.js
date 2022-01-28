"use strict"
function fetchWithTimeout(delay){
    return new Promise(resolve => setTimeout(resolve, delay));
}

module.exports = fetchWithTimeout();