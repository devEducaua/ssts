FROM oven/bun:latest as builder

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .
RUN bun build

FROM oven/bun:latest as runner

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY package.json bun.lockb ./
RUN bun install --production

EXPOSE 6969

CMD ["bun", "start"]

