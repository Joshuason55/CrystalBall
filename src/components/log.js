import {v4 as uuidv4} from 'uuid';

const uuidSession = uuidv4();

class LogClass {
    constructor(user = 'Guest', session = uuidSession, app = 'CB Test - v1.1') {
        this.app = app;
        this.user = user;
        this.session = session;
        this.logBuffer = [];
        this.timeout = null;
    }

    set(user = null, session = null) {
        if (user) {
            this.user = user;
        }

        if (session) {
            this.session = session;
        }
    }

    log(s) {
        this.logBuffer.push({date: new Date().toISOString(), app: this.app, user: this.user, session: this.session, log: s})
        if (!this.timeout) {
            this.timeout = setTimeout(() => {this.insertRowAsStream(this.logBuffer); this.logBuffer = []; this.timeout = null}, 1000)
        }
        // insertRowAsStream([{date: bigquery.datetime(new Date().toISOString()), app: this.app, user: this.user, session: this.session, log: s}])
        // glog.info([{date: Date.now(), app: 'newsletter', user: 'Guest', session: 0, log: s}])
    }    

    insertRowAsStream(logs) {
        var url = 'https://us-central1-nimble-net-279220.cloudfunctions.net/RealPredict'
        // var url = 'https://us-central1-nimble-net-279220.cloudfunctions.net/Newsletter'
        // url = "http://localhost:5000"
        const options = {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({log: logs}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(url, options)
            .then(res => res.json())
            .then(res => console.log(`Inserted log ${logs.length} ` + res))

    }
    
    
}

const Log = new LogClass()
export default Log;


// A text log entry
// const text_entry = log.entry('Hello world!');

// // A json log entry with additional context
// const metadata = {
//   severity: 'WARNING',
//   labels: {
//     foo: 'bar',
//   },
//   // A default log resource is added for some GCP environments
//   // This log resource can be overwritten per spec:
//   // https://cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource
//   resource: {
//     type: 'global',
//   },
// };

// const message = {
//   name: 'King Arthur',
//   quest: 'Find the Holy Grail',
//   favorite_color: 'Blue',
// };

// const json_Entry = log.entry(metadata, message);

// async function writeLogEntry() {
//   // Synchronously write the log entry
//   await log.write(text_entry);

//   // Synchronously batch write the log entries
//   await log.write([text_entry, json_Entry]);

//   // Asynchronously let the logging library dispatch logs
//   log.write(text_entry);

//   console.log(`Wrote to ${logName}`);
// }
// writeLogEntry();

// const bigquery = new BigQuery({projectId: projectId, credentials: logger_Creds});
// const bigquery = new BigQuery({projectId: projectId, keyFilename: './sma_logger.json'});

