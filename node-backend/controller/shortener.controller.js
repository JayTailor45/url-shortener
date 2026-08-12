import { CustomResponse } from "../utils/response.util.js";
import { URLCache } from "../cache/redis.client.js";

export async function shortenUrl(req, res) {
  const { longUrl } = req.body;

  const shortUrlSlug = Math.random().toString(36).substring(2, 8);

  await URLCache.set(shortUrlSlug, longUrl);

  const shortUrl = `${req.protocol}://${req.get("host")}/${shortUrlSlug}`;

  res.json(CustomResponse.success("URL shortened successfully", { shortUrl }));
}

export async function redirectToLongUrl(req, res) {
  const longUrl = await URLCache.get(req.params.shortUrl);

  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.json(
      CustomResponse.error("Short URL not found", { status: "Not Found" }),
    );
  }
}
