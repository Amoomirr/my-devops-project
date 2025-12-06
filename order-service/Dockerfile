# ---------- Stage 1: Build Stage ----------
FROM node:18 AS builder

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install --only=production

COPY . .

# ---------- Stage 2: Runtime Stage ----------
FROM node:18-slim

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app /usr/src/app/

EXPOSE 3003

CMD ["node", "index.js"]
