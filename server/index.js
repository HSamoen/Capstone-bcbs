const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
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

app.get('/get', (req, res) => {
    db.query(
        'SELECT * FROM `volunteer_events`',
        function(err, results) {
            return res.send(results);
        }
    );
});

//set route to display registered volunteers
app.get ("/volunteers", (req,res) => {
    const q = "SELECT * FROM volunteers";
    db.query(q,(err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

//login authentication using database connection
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    const query = 'SELECT * FROM volunteers WHERE email = ? AND volunteer_password = ?';
    const values = [email, password];
  
    db.query(query, values, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }

      // To connect the volunteerID between the /login and /User/:volunteerID route handlers, pass the volunteerID from the login route handler to the user route handler
      // Return the volunteer ID along with the success response
      if (results.length > 0) {
        const volunteerID = results[0].volunteerID;
        return res.json({ success: true, volunteerID });
      } else {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
    });
  });


app.post('/volunteerEvents', jsonParser, (req, res) => {
db.getConnection(function(err, conn) {
    conn.query(
        "INSERT INTO eventsVolunteer (volunteerID, eventID) VALUES (?, ?)", [req.body.volunteerID, req.body.eventID],
        function(err, results) {
        if (err) {
            console.log('Error retrieving volunteer:', err);
            return res.status(500).send('Error retrieving volunteer');
        }
    });
    db.releaseConnection(conn);
 })
 res.send('Insert Statement Success');
});

app.get('/volunteerUserEvents/:volunteerID', (req, res) => {
    const volunteerID = req.params.volunteerID;
    db.query(
        `SELECT * FROM eventsVolunteer INNER JOIN volunteer_events ON eventsVolunteer.eventID = volunteer_events.eventID AND eventsVolunteer.volunteerID = ${volunteerID};`,
        function(err, results) {
            if (err) {
                console.log('Error retrieving volunteer events:', err);
                return res.status(500).send('Error retrieving volunteer');
            }
            console.log(results);
            return res.send(results);
        }
    );
});

app.get('/User/:volunteerID', (req, res) => {
    const volunteerID = req.params.volunteerID;
    const query = "SELECT * FROM `volunteers` WHERE volunteerID = ?";
    db.query(query, [volunteerID], (err, results) => {
      if (err) {
        return res.status(500).send("Error retrieving volunteer");
      }
  
      // use the volunteerID parameter to get the volunteer's data from the database
      if (results.length > 0) {
        const volunteer = results[0];
        res.send(volunteer);
      } else {
        return res.status(404).send("Volunteer not found");
      }
    });
});

app.get('/TakeAction', (req, res) => {
    const volunteerID = req.query.volunteerID;
    const query = "SELECT * FROM `volunteers` WHERE volunteerID = ?";
    db.query(query, [volunteerID], (err, results) => {
      if (err) {
        return res.status(500).send("Error retrieving volunteer");
      }
      const volunteer = results[0];
      // render the Take Action page with the volunteer's data
      res.render('take-action', { volunteer });
    });
  });

app.listen(3001, () => {
    console.log("Running on port 3001")
});