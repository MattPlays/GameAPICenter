const fetch = require('node-fetch');
class ServerStatusResponse {
    constructor(data) {
        this["minecraft.net"] = data["minecraft.net"];
        this["session.minecraft.net"] = data["session.minecraft.net"];
        this["account.mojang.com"] = data["account.mojang.com"];
        this["authserver.mojang.com"] = data["authserver.mojang.com"];
        this["api.mojang.com"] = data["api.mojang.com"];
        this["textures.minecraft.net"] = data["textures.minecraft.net"];
        this["mojang.com"] = data["mojang.com"];
    };
};
class AuthenticationProperty {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    };
};
class AuthenticationProfile {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    };
};
class AuththenticationResponse {
    constructor(user, clientToken, accessToken, availableProfiles, selectedProfile) {
        this.user = {
            username: user.username ?? "",
            properties: [],
            id: user.id ?? "",
        };
        user.properties.forEach((d) => {
            this.user.properties.push(new AuthenticationProperty(d.name, d.value));
        });
        this.clientToken = clientToken;
        this.accessToken = accessToken;
        this.availableProfiles = [];
        availableProfiles.forEach((profile) => {
            this.availableProfiles.push(new AuthenticationProfile(profile.name, profile.id));
        });
        this.selectedProfile = new AuthenticationProfile(selectedProfile.name, selectedProfile.id);
    };
};
class RefreshResponse {
    constructor(accessToken, clientToken, selectedProfile, user) {
        this.accessToken = accessToken;
        this.clientToken = clientToken;
        this.selectedProfile = {
            id: selectedProfile.id ?? "",
            name: selectedProfile.name ?? "",
        };
        this.user = {
            id: user.id,
            properties = [],
        }
        user.properties.forEach((prop) => {
            this.user.properties.push({
                name: prop.name ?? "",
                value: prop.value ?? ""
            })
        })
    }
}
class UUIDResponse {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    };
};
class ProfileInfoResponse {
    constructor(id, name, skins, capes) {
        this.id = id;
        this.name = name;
        this.skins = [];
        skins.forEach((skin) => {
            this.skins.push({
                id: skin.id,
                state: skin.state,
                url: skin.url,
                variant: skin.variant,
            });
        });
        this.capes = capes ?? [];
    }
}
class ProfileNameChangeInfoResponse {
    constructor(changedAt, createdAt, nameChangeAllowed) {
        this.changedAt = changedAt;
        this.createdAt = createdAt;
        this.nameChangeAllowed = nameChangeAllowed
    }
}
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
            }).then(res => res.json()).then((data) => {
                resolve(new ServerStatusResponse(data));
            }).catch(reject);
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
        }).then(res => res.json()).then((data) => {
            resolve(new AuththenticationResponse(data.user, data.clientToken, data.accessToken, data.availableProfiles, data.selectedProfile));
        }).catch(reject);
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
        }).then(res => res.json()).then((data) => {
            resolve(new RefreshResponse(data.accessToken, data.clientToken, data.selectedProfile, data.user));
        }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                resolve(new UUIDResponse(data.name, data.id));
            }).catch(reject);
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
        }).then(res => res.json()).then((data) => {
            let Responses = [];
            data.forEach((d) => {
                Response.push(new UUIDResponse(d.name, d.id));
            });
            resolve(Responses);
        }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                let NameHistory = [];
                data.forEach((d) => {
                    NameHistory.push({
                        name: d.name ?? "",
                        changedToAt: d.changedToAt ?? 0
                    });
                });
                resolve(NameHistory);
            }).catch(reject)
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
            }).then(res => res.json()).then((data) => {
                resolve({
                    id: data.id ?? "",
                    name: data.name ?? "",
                    properties: data.properties ?? [],
                    legacy: data.legacy ?? false
                })
            }).catch(reject)
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
            }).then(res => res.json()).then((data) => {
                resolve({
                    total: data.total ?? 0,
                    last24h: data.last24h ?? 0,
                    saleVelocityPerSeconds: data.saleVelocityPerSeconds ?? 0,
                });
            }).catch(reject)
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
            }).then(res => res.json()).then((data) => {
                resolve(new ProfileInfoResponse(data.id, data.name, data.skins, data.capes));
            }).catch(reject)
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
            }).then(res => res.json()).then((data) => {
                resolve(new ProfileNameChangeInfoResponse(data.changedAt, data.createdAt, data.nameChangeAllowed));
            }).catch(reject)
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
            }).then(res => res.json()).then((data) => {
                resolve({
                    status: data.status ?? ("DUPLICATE" | "AVAILABLE"),
                });
            }).catch(reject)
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
            }).then(res => res.json()).then((data) => {
                resolve(new ProfileInfoResponse(data.id, data.name, data.skins, data.capes));
            }).catch(reject)
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