FROM ruby:2.6.2-slim

RUN apt-get update \
&& apt-get install -y \
apt-utils \
build-essential \
libpq-dev \
libjpeg-dev \
libpng-dev \
nodejs

RUN mkdir /app

COPY ./Gemfile ./app/Gemfile
COPY ./Gemfile.lock ./app/Gemfile.lock


WORKDIR /app

RUN gem install bundler
RUN bundle install
