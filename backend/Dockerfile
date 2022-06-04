FROM node:16-alpine
 
# set your working directory  
WORKDIR /rest-with-mysql
 
# add `/app/node_modules/.bin` to $PATH  
ENV PATH /rest-with-mysql/node_modules/.bin:$PATH  
 
# install application dependencies  
#COPY package.json ./  
#COPY package-lock.json ./  
COPY package*.json ./
RUN npm install 

 
# add app  
COPY . .
# will start app  
CMD ["node", "app.js"]
 
EXPOSE 4000

