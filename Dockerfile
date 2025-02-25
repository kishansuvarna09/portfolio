# Build stage
FROM node:22-alpine as build

WORKDIR /app

# Define build argument
ARG SSL_PATH=./nginx/certs

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

# Make the build argument available in this stage too
ARG SSL_PATH

# Copy the build files to the nginx server
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the nginx configuration file
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/conf.d /etc/nginx/conf.d

# Copy SSL certificates
COPY ${SSL_PATH}/fullchain.pem /etc/ssl/certs/
COPY ${SSL_PATH}/privkey.pem /etc/ssl/certs/
COPY ${SSL_PATH}/cert.pem /etc/ssl/certs/

# Expose port 80 443
EXPOSE 80 443

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
