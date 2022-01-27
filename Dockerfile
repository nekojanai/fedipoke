ARG DENO_IMAGE_VERSION=alpine-1.16.0

FROM denoland/deno:${DENO_IMAGE_VERSION} 
RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts

RUN mkdir /app
WORKDIR /app
RUN mkdir src
COPY ./scripts.json ./
VOLUME [ "/app/src" ]

CMD [ "denon", "start" ]