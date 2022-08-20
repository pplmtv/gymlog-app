# イメージを選択
FROM python:3.9

# バイナリレイヤ下での標準出力とエラー出力を抑制
ENV PTHONNUNBUFFERED 1

WORKDIR /var/www/gymlog-app

# ディレクトリ配下をコピー
COPY ./apiv1 /var/www/gymlog-app/apiv1
COPY ./config /var/www/gymlog-app/config
COPY ./shop /var/www/gymlog-app/shop

# ファイルをコピー
COPY ./.env.gymlog-sys /var/www/gymlog-app/.env.gymlog-sys
COPY ./requirements.txt /var/www/gymlog-app/requirements.txt
COPY ./manage.py /var/www/gymlog-app/manage.py
COPY ./db.sqlite3 /var/www/gymlog-app/db.sqlite3

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY ./infra/docker/app/start.sh /var/www/gymlog-app/start.sh
RUN chmod 744 /var/www/gymlog-app/start.sh

expose "8000"

CMD ["bash", "/var/www/gymlog-app/start.sh"]
