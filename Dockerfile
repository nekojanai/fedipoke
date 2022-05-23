FROM ubuntu:22.04

ARG DENO_VERSION="v1.18.2"

SHELL [ "/bin/bash", "-c" ]

RUN apt-get update -y && apt-get install -y curl unzip
RUN [ $(arch) == "aarch64" ] && \ 
  curl --fail --location --progress-bar --output deno.zip https://github.com/LukeChannings/deno-arm64/releases/download/${DENO_VERSION}/deno-linux-arm64.zip || true
RUN [ $(arch) == "amd64"] && \
  curl --fail --location --progress-bar --output deno.zip https://github.com/denoland/deno/releases/download/${DENO_VERSION}/deno-x86_64-unknown-linux-gnu.zip || true

RUN mkdir -p /root/.deno/bin && \
  unzip -d /root/.deno/bin -o deno.zip && \
  chmod +x /root/.deno/bin/deno && \
  rm deno.zip

ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"
ENV ENV="/root/.bash_profile"

RUN mkdir /app
WORKDIR /app
VOLUME [ "/app" ]

CMD [ "deno", "run", "--watch", "--allow-read", "--allow-write", "--allow-net", "--config", "deno.json", "./main.ts" ]
