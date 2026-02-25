# Task C - Docker Build Fails (no space left on device)

Dockerfile predtým

``` Dockerfile

FROM ubuntu:20.04
RUN apt-get update && apt-get install -y nodejs npm
COPY . /app
WORKDIR /app
RUN npm install
CMD ["node","index.js"]
```

Dockerfile po optimalizácii miesta na disku výmenou pôvodného imageu celého ubuntu OS za oveľa menší a viacej bezpečný image node.js a rozdelením na 2 stages

``` Dockerfile
# Stage 1.
FROM node:24-slim AS builder
WORKDIR /app
COPY . .

# Stage 2.
FROM node:24-slim
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node", "index.js"]
```
