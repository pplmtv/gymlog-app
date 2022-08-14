FROM nginx:1.11.7

# index.htmlファイル
COPY index.html /usr/share/nginx/html
ADD static.tar /usr/share/nginx/html
#ADD drf-vue2-sample.tar /usr/share/nginx/html

# 設定ファイル
#ADD nginx.conf /etc/nginx/nginx.conf

#COPY default.conf /etc/nginx/conf.d

#COPY default.conf /etc/nginx/sites-enabled/default
#COPY uwsgi_params /etc/nginx/uwsgi_params

#WORKDIR /var/www/drf-vue2-sample/frontend
#WORKDIR /var/www/drf-vue2-sample/static

EXPOSE "80"