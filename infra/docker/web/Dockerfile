FROM nginx:1.11.7

# index.htmlファイル
COPY ./templates/index.html /usr/share/nginx/html/index.html

# staticフォルダ
COPY ./static /usr/share/nginx/html/static

# 設定ファイル
#ADD nginx.conf /etc/nginx/nginx.conf
#COPY default.conf /etc/nginx/conf.d
#COPY default.conf /etc/nginx/sites-enabled/default
#COPY uwsgi_params /etc/nginx/uwsgi_params

EXPOSE "80"