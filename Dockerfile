FROM nimmis/apache-php7

# Installing node
# ----------------------------------------------------------------------
# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# update the repository sources list
# and install dependencies
RUN apt-get update \
    && apt-get install -y curl \
    && apt-get -y autoclean

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 10.15.3

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# confirm installation
RUN node -v
RUN npm -v
# ----------------------------------------------------------------------

WORKDIR /var/www/html

# Installing
COPY web/package.json ./web/
RUN cd web && npm install && cd -

# Copying
COPY web web

#  Apache config
COPY ./api/config/000-default.conf /etc/apache2/sites-enabled/
COPY ./api/config/ports.conf /etc/apache2/ports.conf

# PHP stuff
COPY api api
RUN ./api/install.sh

RUN service apache2 restart

EXPOSE 8080 3000

# Run node
RUN cd web && npm start