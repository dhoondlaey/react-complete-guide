FROM node:18.14-alpine
WORKDIR /react-complete-guide
env path = "./node_module/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm","start"]
EXPOSE 80:3000