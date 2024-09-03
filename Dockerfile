# Use the official Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the application code to the container
COPY . .

# Install the dependencies
RUN npm install

# Expose the port on which the application will run
EXPOSE 5000

# Start the application
CMD [ "npm", "start" ]