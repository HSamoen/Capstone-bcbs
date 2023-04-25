const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
// create application/json parser
const jsonParser = bodyParser.json();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'wellnessPlus'
});

app.post('/insert', jsonParser, (req, res) => {
    console.log('req', req);
db.getConnection(function(err, conn) {
    conn.query(
        "INSERT INTO volunteers (full_name, username, email, volunteer_password) VALUES (?, ?, ?, ?)", [req.body.full_name, req.body.username, req.body.email, req.body.volunteer_password],
        function(err, results) {
        console.log(results); 
    });
    // release the connection when finished
    db.releaseConnection(conn);
 })
 res.send('Success');
});

app.get('/volunteer/:id', (req, res) => {
    const volunteerId = req.params.id;
    db.query(
        'SELECT * FROM `volunteers` WHERE volunteerID = ?',
        [volunteerId],
        function(err, results) {
            if (err) {
                console.log('Error retrieving volunteer:', err);
                return res.status(500).send('Error retrieving volunteer');
            }
            console.log('Volunteer retrieved successfully:', results);
            res.send(results);
        }
    );
});

app.get('/get', (req, res) => {
    db.query(
        'SELECT * FROM `volunteer_events`',
        function(err, results) {
            return res.send(results);
        }
    );
});


app.get ("/volunteers", (req,res) => {
    const q = "SELECT * FROM volunteers"
    db.query(q,(err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(3001, () => {
    console.log("Running on port 3001")
});