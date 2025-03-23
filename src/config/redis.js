// src/config/redis.js

import Redis from "ioredis";

// Redis bağlantısını yapılandır
const redis = new Redis({
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || 6379,
});

export default redis;
