# Build stage
FROM node:22-alpine as build

WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn

# Copy the rest of the files
COPY . .

# Build the app
RUN yarn run build

# Production stage
FROM nginx:1.21-alpine

# Copy the build files to the nginx server
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the nginx configuration file
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/conf.d /etc/nginx/conf.d

# Copy SSL certificates
COPY ./nginx/certs/fullchain.pem /etc/ssl/certs/
COPY ./nginx/certs/privkey.pem /etc/ssl/certs/
COPY ./nginx/certs/server.pem /etc/ssl/certs/

# Expose port 80 443
EXPOSE 80 443

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
