FROM php:7.2-apache

RUN apt-get update 
RUN apt-get install -y git unzip zip
RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer.phar
RUN alias composer='/usr/local/bin/composer.phar'
RUN docker-php-ext-install pdo_mysql
RUN a2enmod rewrite
RUN a2enmod headers