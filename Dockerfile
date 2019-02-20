FROM node

COPY . .
RUN npm install
EXPOSE $PORT
CMD ["npm", "start"]