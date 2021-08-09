const fetch = require("node-fetch")
class platformInfo {
    constructor(platformSlug, platformUserId, platformUserHandle, platformUserIdentifier, avatarUrl, additionalParameters) {
        this.platformSlug = platformSlug;
        this.platformUserId = platformUserId;
        this.platformUserHandle = platformUserHandle;
        this.platformUserIdentifier = platformUserIdentifier;
        this.avatarUrl = avatarUrl;
        this.additionalParameters = additionalParameters;
    };
}
class SocialAccount {
    constructor(platformSlug, platformUserHandle, platformUserIdentifier) {
        this.platformSlug = platformSlug;
        this.platformUserHandle = platformUserHandle;
        this.platformUserIdentifier = platformUserIdentifier;
    };
}
class userInfo {
    constructor(userId, isPremium, isVerified, isInfluencer, isPartner, countryCode, customAvatarUrl, customHeroUrl, socialAccounts, pageviews, isSuspicious) {
        this.userId = userId;
        this.isPremium = isPremium;
        this.isVerified = isVerified;
        this.isInfluencer = isInfluencer;
        this.isPartner = isPartner;
        this.countryCode = countryCode;
        this.customAvatarUrl = customAvatarUrl;
        this.customHeroUrl = customHeroUrl;
        this.socialAccounts = [];
        socialAccounts.forEach((d) => {
            this.socialAccounts.push(new SocialAccount(d.platformSlug, d.platformUserHandle, d.platformUserIdentifier));
        })
        this.pageviews = pageviews;
        this.isSuspicious = isSuspicious;
    };
}

class Stat {
    constructor(rank, percentile, displayName, displayCategory, category, metadata, value, displayValue, displayType) {
        this.rank = rank;
        this.percentile = percentile;
        this.displayName = displayName;
        this.displayCategory = displayCategory;
        this.category = category;
        this.metadata = metadata;
        this.value = value;
        this.displayValue = displayValue;
        this.displayType = displayType;
    };
}
class Segment {
    constructor(type, attributes, metadata, expiryDate, stats) {
        this.type = type;
        this.attributes = attributes;
        this.metadata = {
            name: metadata.name ?? "",
        };
        this.expiryDate = expiryDate;
        this.stats = {};
        for(const stat in stats) {
            this.stats[stat] = new Stat(stats[stat].rank, stats[stat].percentile, stats[stat].displayName, stats[stat].displayCategory, stats[stat].category, stats[stat].metadata, stats[stat].value, stats[stat].displayValue, stats[stat].displayType);
        };
    };
}
class Profile {
    constructor(data) {
        this.data = {
            platformInfo: new platformInfo((data.platformInfo.platformSlug) ?? "", (data.platformInfo.platformUserId) ?? "", (data.platformInfo.platformUserHandle) ?? "", (data.platformInfo.platformUserIdentifier) ?? "", (data.platformInfo.avatarUrl) ?? "", (data.platformInfo.additionalParameters) ?? ""),
            userInfo: new userInfo((data.userInfo.userId) ?? 0, (data.userInfo.isPremium) ?? false, (data.userInfo.isVerified) ?? false, (data.userInfo.isInfluencer) ?? false, (data.userInfo.isPartner) ?? false, (data.userInfo.countryCode) ?? "", (data.userInfo.customAvatarUrl) ?? "", (data.userInfo.customHeroUrl) ?? "", (data.userInfo.socialAccounts) ?? [], (data.userInfo.pageviews) ?? 0, (data.userInfo.isSuspicious) ?? false),
            metadata: {
                lastUpdated: {
                    value: data.metadata.lastUpdated.value ?? "",
                    displayValue: data.metadata.lastUpdated.displayValue ?? "",
                },
            },
            segments: [],
            availableSegments: data.availableSegments,
            expiryDate: data.expiryDate,
        };
        data.segments.forEach((segment) => {
            this.data.segments.push(new Segment((segment.type) ?? "", (segment.attributes) ?? {}, (segment.metadata) ?? {}, (segment.expiryDate) ?? "", (segment.stats) ?? {}));
        });
    }
}
class HyperScapeAPI {
    constructor(authKey) {
        this.api = "https://public-api.tracker.gg/v2/hyper-scape/standard/"
        this.authKey = authKey
        this.offical = false
    }
    GetPlayerProfile(platform = "uplay", platformIdentifer) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `profile/${platform}/${platformIdentifer}`
            await fetch(url, {
                "headers": {
                    "TRN-Api-Key": this.authKey,
                    "Accept": "application/json",
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((data) => {
                resolve(new Profile(data.data))
            }).catch(reject)
        })
    }
}
module.exports = {
    HyperScapeAPI: HyperScapeAPI
}