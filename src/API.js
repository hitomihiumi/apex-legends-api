import fetch from 'node-fetch';
let API_URL = 'https://api.mozambiquehe.re/';

class ApexLegendsAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    /**
    * Gets the stats of a specific user, on a specific platform.
    * @param {string} playerName The username of the player to be searched
    * @param {string} platform The platform of the player to be searched, platform options are: PC, PS4, X1
    */
    queryPlayerByName(playerName, platform) {
        return new Promise((resolve, reject) => {
            if (!this.apiKey) reject(new Error('No API key provided'));
            if (!playerName) reject(new Error('No player name provided'));
            if (!platform) reject(new Error('No platform provided'));
            if (typeof playerName !== 'string') reject(new Error('Player name must be a string'));
            if (typeof platform !== 'string') reject(new Error('Platform must be a string'));
            if (platform !== 'PC' && platform !== 'PS4' && platform !== 'X1') reject(new Error('Platform must be one of the following: PC, PS4, X1'));
            fetch(`${API_URL}bridge?&auth=${this.apiKey}&player=${playerName}&platform=${platform}`)
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        });
    }

    /**
    * Gets the stats of a specific user, on a specific platform.
    * @param {string} playerID The UID of the player to be searched
    * @param {string} platform The platform of the player to be searched, platform options are: PC, PS4, X1
    */
    queryPlayerByID(playerID, platform) {
        return new Promise((resolve, reject) => {
            if (!this.apiKey) reject(new Error('No API key provided'));
            if (!playerID) reject(new Error('No player UID provided'));
            if (!platform) reject(new Error('No platform provided'));
            if (typeof playerID !== 'string') reject(new Error('Player UID must be a string'));
            if (typeof platform !== 'string') reject(new Error('Platform must be a string'));
            if (platform !== 'PC' && platform !== 'PS4' && platform !== 'X1') reject(new Error('Platform must be one of the following: PC, PS4, X1'));
            fetch(`${API_URL}bridge?&auth=${this.apiKey}&uid=${playerID}&platform=${platform}`)
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        });
    }

    /**
     * Gets the stats of a specific user, on a specific platform.
     * @param {string} playerName The username of the player to be searched
     * @param {string} platform The platform of the player to be searched, platform options are: PC, PS4, X1
     * @param {string} action The action to be performed, default is 'info', action options are: info, get, delete or add
     */
    getPlayerMatchHistory(playerName, platform, action = 'info') {
        return new Promise((resolve, reject) => {
            if (!this.apiKey) reject(new Error('No API key provided'));
            if (!playerName) reject(new Error('No player name provided'));
            if (!platform) reject(new Error('No platform provided'));
            if (typeof playerName !== 'string') reject(new Error('Player name must be a string'));
            if (typeof platform !== 'string') reject(new Error('Platform must be a string'));
            if (platform !== 'PC' && platform !== 'PS4' && platform !== 'X1') reject(new Error('Platform must be one of the following: PC, PS4, X1'));
            fetch(`${API_URL}bridge?&auth=${this.apiKey}&player=${playerName}&platform=${platform}&history=1&action=${action}`)
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        });
    }

    /**
     * Gets current maps pool 
     * @param {number} type The type of map rotation to get, default is '2', type options are: 1 (only battle royale pubs), 2 (all modes)
     */
    getMapRotation(type = 2) {
        return new Promise((resolve, reject) => {
            if (!this.apiKey) reject(new Error('No API key provided'));
            fetch(`${API_URL}maprotation?&auth=${this.apiKey}&version=${type}`)
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        });
    }

    /**
     * Gets RP/AP needed to reach Apex Predator PC, Playstation, Xbox and Switch. It will also return the number of Masters on each platform.
     */
    getPredators() {
        return new Promise((resolve, reject) => {
            if (!this.apiKey) reject(new Error('No API key provided'));
            fetch(`${API_URL}predator?&auth=${this.apiKey}`)
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        });
    }

    /**
     * Gets the current store
     * The API provider requires your application to be whitelisted in order to access this method. Create a ticket on their Discord server to get access (https://discord.com/invite/qd9cZQm)
     */
    getStore() {
        return new Promise((resolve, reject) => {
            if (!this.apiKey) reject(new Error('No API key provided'));
            fetch(`${API_URL}store?&auth=${this.apiKey}`)
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        });
    }

    /**
     * Gets news
     * @param {string} lang The language of the news to get, default is 'en-US'
     */
    getNews(lang = 'en-US') {
        return new Promise((resolve, reject) => {
            if (!this.apiKey) reject(new Error('No API key provided'));
            fetch(`${API_URL}news?&auth=${this.apiKey}$lang=${lang}`)
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        });
    }

    /**
     * Gets current server status
     * The API provider requires a link to "https://apexlegendsstatus.com" or text like "Data from apexlegendsstatus.com" if using this particular method
     */
    getServerStatus() {
        return new Promise((resolve, reject) => {
            if (!this.apiKey) reject(new Error('No API key provided'));
            fetch(`${API_URL}servers?&auth=${this.apiKey}`)
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        });
    }

    /**
     * Gets UID of a player by name
     * @param {string} playerName The username of the player to be searched
     * @param {string} platform The platform of the player to be searched, platform options are: PC, PS4, X1
     */
    nameToID(playerName, platform) {
        return new Promise((resolve, reject) => {
            if (!this.apiKey) reject(new Error('No API key provided'));
            if (!playerName) reject(new Error('No player name provided'));
            if (!platform) reject(new Error('No platform provided'));
            if (typeof playerName !== 'string') reject(new Error('Player name must be a string'));
            if (typeof platform !== 'string') reject(new Error('Platform must be a string'));
            if (platform !== 'PC' && platform !== 'PS4' && platform !== 'X1') reject(new Error('Platform must be one of the following: PC, PS4, X1'));
            fetch(`${API_URL}nametouid?&auth=${this.apiKey}&player=${playerName}&platform=${platform}`)
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        });
    }
}

export { ApexLegendsAPI };