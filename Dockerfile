FROM nginx:1.29-alpine-slim 

# Metadata
LABEL org.opencontainers.image.title="cogsandsquigs-website"
LABEL org.opencontainers.image.description="A container for running my website."
LABEL org.opencontainers.image.authors="Ian Pratt <ianjdpratt@gmail.com>"
LABEL org.opencontainers.image.url="https://github.com/cogsandsquigs/website"
LABEL org.opencontainers.image.documentation="https://github.com/cogsandsquigs/website"
LABEL org.opencontainers.image.source="https://github.com/cogsandsquigs/website"
LABEL org.opencontainers.image.licenses="MIT"

# Expose port(s) for the server
EXPOSE 80 

# Install dependencies
RUN apk add zola

# Change working directory, and copy the source code
WORKDIR /
COPY . .

# Build the website!
RUN zola build --output-dir /usr/share/nginx/html --force

