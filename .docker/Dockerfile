#
# The Dark Society Cloud
#

# [1] Build Stage
FROM node:18.18.0-alpine3.18 AS build

LABEL maintainer="Rye Miller" \
      vendor="The Dark Society <containers@darksociety.cloud>" \
      version="0.1.0"

WORKDIR '/usr/src/app'

COPY package*.json .
RUN yarn install
COPY . .
RUN yarn build


# [2] Run Stage
FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
