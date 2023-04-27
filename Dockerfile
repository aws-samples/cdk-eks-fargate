FROM node:19
RUN npm install -g aws-cdk@v2 cdk8s-cli npm-check-updates
# RUN npm-check-updates && npm install
