const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const readXlsx = require('./cypress/e2e/Pages/read-xlsx');
const xlsx = require('node-xlsx').default
const fs = require('fs');
const path=require('path')
const mysql = require('mysql')
//const syncSql = require("sync-sql");

const read = ({file, sheet}) => {
  const buf = fs.readFileSync(file);
  const workbook = XLSX.read(buf, { type: 'buffer' });
  const rows = XLSX.utils.sheet_to_json (workbook.Sheets[sheet]);
  return rows
}



module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
    video: true,
  e2e: {
    projectId: "ks135i",
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 150000,
    setupNodeEvents(on, config) {
      // Implement node event listeners here

      on('task', { downloadFile });
      require('cypress-mochawesome-reporter/plugin')(on);

      on('task', {parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
       
      });
      on('task',{
        'readXlsx': readXlsx.read
      })
      on('task', { queryDb: query => { return queryTestDb(query, config) }, }); //For running sql query
    },
  },

  "env": {
    "db": {
      // "host": "db4free.net",
      // "user": "admin",
      // "password": "password",
      // "database": "db_name"
      "host": "sql12.freemysqlhosting.net",
     "user": "sql12569969",
    "password": "C4YQ9Na7j3",
    "database": "sql12569969"

    }
  }
  

  
  
})
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db)
  // start connection to db
  connection.connect()
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}


