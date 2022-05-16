FROM node:13.12.0-alpine  
 
# set your working directory  
WORKDIR /react-app  
 
# add `/app/node_modules/.bin` to $PATH  
ENV PATH /react-app/node_modules/.bin:$PATH  
 
# install application dependencies  
COPY package.json ./  
COPY package-lock.json ./  
RUN npm install 

 
# add app  
COPY . ./  
 
# will start app  
CMD ["npm", "start"] 

EXPOSE 3000