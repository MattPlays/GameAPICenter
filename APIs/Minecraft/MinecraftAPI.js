const fetch = require('node-fetch');
const fs = require("fs");
class MinecraftAPI {
    constructor() {
        this.api = "https://api.mojang.com/";
        this.statusServer = "https://status.mojang.com/check"
        this.authServer = "https://authserver.mojang.com/"
        this.sessonServer = "https://sessionserver.mojang.com/"
        this.apiServices = "https://api.minecraftservices.com/"
        this.offical = true
    }
    GetAPIStatus() {
        return new Promise(async(resolve, reject) => {
            await fetch(this.statusServer, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US,en;q=0.9",
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    Authenticate(username, password) {
        return new Promise(async(resolve, reject) => {
            let url = this.authServer + "authenticate"
            let payload = {
                "agent": {
                    "name": "Minecraft",
                    "Version": 1
                },
                "username": username,
                "password": password 
            }
            await fetch(url, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json"
                },
                "method": "POST",
                "mode": "cors",
                "body": JSON.stringify(payload)
        }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    Refresh(accessToken, clientToken, profileIdentifier, playerName) {
        return new Promise(async(resolve, reject) => {
            let url = this.authServer + "refresh";
            let payload = {
                "accessToken": accessToken,
                "clientToken": clientToken,
                "selectedProfile": {
                    "id": profileIdentifier,
                    "name": playerName
                }
            }
            await fetch(url, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json"
                },
                "method": "POST",
                "mode": "cors",
                "body": JSON.stringify(payload)
        }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    Validate(accessToken, clientToken) {
        return new Promise(async(resolve, reject) => {
            let url = this.authServer + "validate";
            let payload = {
                "accessToken": accessToken,
                "clientToken": clientToken ?? ""
            }
            await fetch(url, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json"
                },
                "method": "POST",
                "mode": "cors",
                "body": JSON.stringify(payload)
        }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    Signout(username, password) {
        return new Promise(async(resolve, reject) => {
            let url = this.authServer + "validate";
            let payload = {
                "username": username,
                "password": password
            }
            await fetch(url, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json"
                },
                "method": "POST",
                "mode": "cors",
                "body": JSON.stringify(payload)
         }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    Invalidate(accessToken, clientToken) {
        return new Promise(async(resolve, reject) => {
            let url = this.authServer + "invalidate";
            let payload = {
                "accessToken": accessToken,
                "clientToken": clientToken
            }
            await fetch(url, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json"
                },
                "method": "POST",
                "mode": "cors",
                "body": JSON.stringify(payload)
        }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    UsernameToUUID(username) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + "users/profiles/minecraft/" + username; 
            await fetch(url, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US,en;q=0.9",
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        });
    }
    UsernamesToUUIDs(usernames) { 
        return new Promise(async(resolve, reject) => {
            let url = this.api + "profiles/minecraft";
            let payload = usernames ?? [];
            await fetch(url, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json"
                },
                "method": "POST",
                "mode": "cors",
                "body": JSON.stringify(payload)
        }).then(res => res.json()).then(resolve).catch(reject);
    })
    }
    UUIDToNameHistory(uuid) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `user/profiles/${uuid}/names`
            await fetch(url, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US, en;q=0.9",
                    "content-type": "application/json"
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    UUIDToSkin(uuid) {
        return new Promise(async(resolve, reject) => {
            let url = `${this.sessonServer}session/minecraft/profile/${uuid}`
            await fetch(url, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US, en;q=0.9",
                    "content-type": "application/json"
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetBlockedServers() {
        return new Promise(async(resolve, reject) => {
            let url = this.sessonServer + "blockedservers"
            await fetch(url, {
                "headers": {          
                    "accept-language": "en-US, en;q=0.9",
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.text()).then((d) => resolve(d.split("\n"))).catch(reject)
        })
    }
    GetStatistics(metricKeys) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + "orders/statistics"
            let payload = {
                "metricKeys": metricKeys
            }
            await fetch(url, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US, en;q=0.9",
                    "content-type": "application/json"
                },
                "method": "POST",
                "mode": "cors",
                "body": JSON.stringify(payload)
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetProfileInfo(accessToken) {
        return new Promise(async(resolve, reject) => {
            let url = this.apiServices + "/minecraft/profile"
            await fetch(url, {
                "headers": {          
                    "accept-language": "en-US, en;q=0.9",
                    "Authorization": `Bearer ${accessToken}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetProfileNameChangeInfo(accessToken) {
        return new Promise(async(resolve, reject) => {
            let url = this.apiServices + "/minecraft/profile/namechange"
            await fetch(url, {
                "headers": {          
                    "accept-language": "en-US, en;q=0.9",
                    "Authorization": `Bearer ${accessToken}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    CheckNameAvailability(name, accessToken) {
        return new Promise(async(resolve, reject) => {
            let url = this.apiServices + `/minecraft/profile/name/${name}/available`
            await fetch(url, {
                "headers": {          
                    "accept-language": "en-US, en;q=0.9",
                    "Authorization": `Bearer ${accessToken}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    ChangeName(newName, accessToken) {
        return new Promise(async(resolve, reject) => {
            let url = this.apiServices + `/minecraft/profile/name/${newName}`
            await fetch(url, {
                "headers": {          
                    "accept-language": "en-US, en;q=0.9",
                    "Authorization": `Bearer ${accessToken}`
                },
                "method": "PUT",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    ChangeSkin(variant, skinUrl, accessToken) {
        return new Promise(async(resolve, reject) => {
            let url = this.apiServices + `/minecraft/profile/skins`
            let payload = {
                "variant": variant,
                "url": skinUrl
            }
            await fetch(url, {
                "headers": {          
                    "accept-language": "en-US, en;q=0.9",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                "method": "POST",
                "mode": "cors",
                "body": JSON.stringify(payload)
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    ResetSkin(accessToken, uuid) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `user/profile${uuid}/skin`
            await fetch(url, {
                "headers": {          
                    "accept-language": "en-US, en;q=0.9",
                    "Authorization": `Bearer ${accessToken}`
                },
                "method": "DELETE",
                "mode": "cors",
            }).then(resolve(true)).catch(reject)
        })
    }
}

module.exports = {
    MinecraftAPI: MinecraftAPI
}