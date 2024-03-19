# Introduction
This module uses the NOT OFFICIAL API of Apex Legends. Keep this in mind.

## Get Started

1. Install the module
2. [Register your API key at the following link](https://portal.apexlegendsapi.com/)
3. Read the warning on the website

## Example

```js
const ApexLegendsAPI = require('apex-legends-api');

// Create an instance of the Apex Legends API
const api = new ApexLegendsAPI('YOUR_API_KEY');

// Get player stats by platform and player name
api.playerStats('playerName', 'platform')
    .then(stats => {
        console.log(stats);
    })
    .catch(error => {
        console.error(error);
    });

// Get match history by platform and player name
api.matchHistory('playerName', 'platform')
    .then(history => {
        console.log(history);
    })
    .catch(error => {
        console.error(error);
    });

// Get current server status
api.serverStatus()
    .then(status => {
        console.log(status);
    })
    .catch(error => {
        console.error(error);
    });
```