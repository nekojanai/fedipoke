ARG DENO_IMAGE_VERSION=alpine-1.18.1

FROM denoland/deno:${DENO_IMAGE_VERSION} 

RUN mkdir /app
WORKDIR /app
VOLUME [ "/app" ]

CMD [ "deno", "run", "--watch", "--allow-read", "--allow-write", "--allow-net", "--config", "deno.json", "./src/main.ts" ]