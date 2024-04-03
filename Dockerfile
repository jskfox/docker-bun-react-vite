FROM oven/bun:alpine
WORKDIR /home/bun/app
COPY ./app/package.json .
COPY ./app/bun.lockb .
RUN bun install
# COPY src ./
COPY app .
# EXPOSE $APP_PORT
RUN bun run build
# CMD [ "bun", "run", "watch"]