import { createClient } from "redis";

export const redisClient = createClient({
    url: process.env.REDIS_URL
});

const Keys = {
    url: (shortUrl) => `url:${shortUrl}`,
}

export const URLCache = {
    async set(shortUrl, longUrl) {
        try {
            await redisClient.set(Keys.url(shortUrl), longUrl);
        } catch (error) {
            console.error("Error setting URL in Redis:", error);
        }
    },

    async get(shortUrl) {
        try {
            return await redisClient.get(Keys.url(shortUrl));
        } catch (error) {
            console.error("Error getting URL from Redis:", error);
            return null;
        }
    }
};