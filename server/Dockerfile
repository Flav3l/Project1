# Specify the node base image with your desired version, e.g. node:<version>
FROM node:latest

# Set and create the working directory for this app
WORKDIR /server

# Copy this application's files from the current directory to the filesystem
# of the container at /app
COPY . /server

# Make the container accept traffic on port 3000 at runtime from other
# containers or the host if also published
EXPOSE 3001

# Run this shell command at build time
RUN npm install

# Start the application
CMD npx knex migrate:rollback && npx knex migrate:latest && npx knex seed:run && npm start