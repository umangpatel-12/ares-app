FROM python:3.8-slim-buster

ADD requirements.txt /app/requirements.txt

# COPY requirements.txt /app/requirements.txt

RUN pip install -r /app/requirements.txt

COPY . /app

# ADD backend /app

WORKDIR /app

ENTRYPOINT [ "python" ]

CMD [ "app.py" ]