#
# JS Dark
#
FROM nginx:latest

COPY ./public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]