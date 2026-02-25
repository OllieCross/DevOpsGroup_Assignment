# 1. stage
# We use node:slim instead of Ubuntu to save ~150MB immediately.
FROM node:24-slim AS builder

WORKDIR /app
# Copy the rest of the source code
COPY . .

# 2. stage
# We start with a completely fresh, tiny image for production.
FROM node:24-slim
WORKDIR /app
# We copy ONLY the necessary files from the builder stage.
# This leaves behind the npm cache and build tools, solving the "waste" issue.
COPY --from=builder /app .
# Security: Best practice is to run as a non-root user.
# The official node image comes with a 'node' user ready to use.
USER node
# Expose the app port
EXPOSE 3000
# Start the application
CMD ["node", "index.js"]
