# build & deploy stage
FROM python:3.9

# output control
ENV PTHONNUNBUFFERED 1

# work directory
WORKDIR /var/www/gymlog-app

# copy under directory
COPY ./apiv1 /var/www/gymlog-app/apiv1
COPY ./config /var/www/gymlog-app/config
COPY ./shop /var/www/gymlog-app/shop

# copy file
COPY ./.env.gymlog-sys /var/www/gymlog-app/.env.gymlog-sys
COPY ./requirements.txt /var/www/gymlog-app/requirements.txt
COPY ./manage.py /var/www/gymlog-app/manage.py
COPY ./db.sqlite3 /var/www/gymlog-app/db.sqlite3

# install
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# DB migration
RUN python3 manage.py makemigrations
RUN python3 manage.py migrate

# start-up
CMD python3 manage.py runserver 0.0.0.0:8000
