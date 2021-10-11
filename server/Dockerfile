# FROM node:14-alpine

# WORKDIR /usr/app

# COPY package*.json ./
# COPY tsconfig.json ./

# RUN npm install

# COPY . .
# RUN npm run build
# COPY . .
# EXPOSE $3600

# CMD [ "npm", "run", "dev" ]
FROM node:14-alpine
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY  . .
RUN npm install
RUN npm run build
## this is stage two , where the app actually runs
FROM node:12.17.0-alpine
WORKDIR /usr
COPY package.json ./
RUN npm install --only=production
COPY --from=0 /usr/dist .

EXPOSE 80
CMD ["node","index.js"]