## Setup Redis

```yaml
services:
  redis:
    image: redis:6.2-alpine
    restart: always
    ports:
      - "6379:6379"
    command: redis-server --save 60 1 --loglevel warning --requirepass <PASSWORD>
    volumes:
      - ./data:/data
  redis_insight:
    image: redislabs/redisinsight:1.14.0
    container_name: redis_insight
    restart: always
    ports:
      - 8001:8001
    volumes:
      - ./db:/db
```
