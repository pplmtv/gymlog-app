# build stage
FROM node:14.17.6 AS builder

WORKDIR /var/www/gymlog-app

# ディレクトリ配下をコピー
COPY ./frontend /var/www/gymlog-app/frontend
COPY ./templates /var/www/gymlog-app/templates
COPY ./static /var/www/gymlog-app/static

WORKDIR /var/www/gymlog-app/frontend

RUN apt-get update
RUN apt-get install -y --no-install-recommends \
    net-tools \
    sudo \
    bzip2 \
    curl \
    gcc \
    git \
    vim
RUN apt-get clean
RUN npm install -g @vue/cli
RUN npm update
RUN npm install axios
RUN npm install nodejs
RUN npm run build

# deploy stage
FROM nginx:1.11.7

# index.htmlファイル
COPY --from=builder  /var/www/gymlog-app/templates/index.html /usr/share/nginx/html/index.html

# staticフォルダ
COPY --from=builder /var/www/gymlog-app/static /usr/share/nginx/html/static

EXPOSE "80"
