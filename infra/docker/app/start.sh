#!/bin/bash
sleep 5
python3 manage.py makemigrations
python3 manage.py migrate
# python3 manage.py collectstatic --noinput
# uwsgi --socket :8001 --module mysite.wsgi
python3 manage.py runserver 0.0.0.0:8000
#python3 manage.py runserver
