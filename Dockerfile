# Use Node 6 Image
FROM node:6
LABEL version="1.0.0"

# Expose Port 5000
EXPOSE 5000

# Set Work Dir
WORKDIR /usr/src/app

# Set Production variable
ENV NODE_ENV production

# Copy package.json
COPY package.json .

# Run NPM install
RUN ["npm", "install"]

# Copy over source files
COPY . .

# Start Server
CMD ["npm", "start"]
