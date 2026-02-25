# Stage 1.
FROM node:22-slim AS builder
COPY package*.json ./
RUN npm install --production
WORKDIR /app
COPY . .

# Stage 2.
FROM node:22-slim
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app .
EXPOSE 3000
USER node
CMD ["node", "index.js"]