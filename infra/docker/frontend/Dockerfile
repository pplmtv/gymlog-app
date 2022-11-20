# build stage
# base image
FROM node:14.17.6 AS builder
RUN apt-get update
RUN apt-get clean

# work directory
WORKDIR /var/www/gymlog-app

# copy under directory
COPY ./frontend /var/www/gymlog-app/frontend
COPY ./templates /var/www/gymlog-app/templates
COPY ./static /var/www/gymlog-app/static

# work directory
WORKDIR /var/www/gymlog-app/frontend

# build
RUN npm install -g @vue/cli
RUN npm update
RUN npm install axios
RUN npm install nodejs
RUN npm run build


# deploy stage
# base image
FROM nginx:1.11.7
RUN apt-get update
RUN apt-get clean

# install
RUN apt-get install --force-yes --no-install-recommends \
    net-tools \
    sudo \
    bzip2 \
    curl \
    gcc \
    git \
    vim

# nginx config file will be output to /etc/nginx/conf.d/ by envsubst
COPY ./infra/docker/frontend/default.conf /etc/nginx/conf.d/default.conf
COPY ./infra/docker/frontend/nginx.conf /etc/nginx/nginx.conf

# copy index.html
COPY --from=builder  /var/www/gymlog-app/templates/index.html /usr/share/nginx/html/index.html

# copy static directory
COPY --from=builder /var/www/gymlog-app/static /usr/share/nginx/html/static

EXPOSE "80"
