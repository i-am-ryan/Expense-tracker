import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'
import "dotenv/config";


const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, '60 s')
})

// Wrap the ratelimit in a middleware function
const rateLimitMiddleware = async (req, res, next) => {
  try {
    const identifier = req.ip || 'anonymous';
    const { success } = await ratelimit.limit(identifier);
    
    if (!success) {
      return res.status(429).json({ 
        message: "Too many requests. Please try again later." 
      });
    }
    
    next();
  } catch (error) {
    console.error('Rate limit error:', error);
    // If rate limiting fails, allow the request through
    next();
  }
};

export default rateLimitMiddleware;