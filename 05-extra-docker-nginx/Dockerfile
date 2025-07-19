FROM nginx:stable-alpine3.21
RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx.conf /etc/nginx/nginx.conf

COPY . /usr/share/nginx/html
COPY ./05-extra-docker-nginx/nginx.conf /etc/nginx/nginx.conf
