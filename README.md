# api-neptune
neptune db api log transaction 

### config node and mysql
npm init --yes
npm install mysql

### create neptune database
CREATE DATABASE IF NOT EXISTS neptune;

### api list
| api       	| description 			   |
| :------------ | :----------------------- |				
| api-connect	| connect neptune database |
| api-insert	| insert temp data         |
| api-query     | search temp data         |
| api-delete    | delete tem data          |
| api-truncate  | truncate table		   |
| api-dropdb	| drop neptune database    |

### run api
npm run-script [api-name]

npm run api-connect
npm run-script api-query
