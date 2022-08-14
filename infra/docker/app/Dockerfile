# イメージを選択
FROM python:3.9
#FROM ubuntu:20.04

# バイナリレイヤ下での標準出力とエラー出力を抑制
ENV PTHONNUNBUFFERED 1

WORKDIR /var/www/
ADD drf-vue2-sample.tar /var/www/
WORKDIR /var/www/drf-vue2-sample

COPY .env /var/www/drf-vue2-sample/.env
COPY db.sqlite3 /var/www/drf-vue2-sample/db.sqlite3

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY ./start.sh /var/www/drf-vue2-sample/backend/start.sh
RUN chmod 744 /var/www/drf-vue2-sample/backend/start.sh

expose "8000"

CMD ["bash", "/var/www/drf-vue2-sample/backend/start.sh"]