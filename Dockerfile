FROM node:20-alpine

WORKDIR /app

# install dependencies
COPY package*.json ./
RUN apk add --no-cache python3 make g++ \
	&& npm install --production \
	&& apk del python3 make g++

# copy source
COPY . .

ENV NODE_ENV=production
ENV PORT=8000

EXPOSE 8000

CMD ["node", "server.js"]