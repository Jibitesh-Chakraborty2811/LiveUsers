const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({origin: true})); // Enable CORS
app.use(express.json());

let userLocations = {}; // In-memory storage for user locations

app.post('/update-location/:userId/:latitude/:longitude/:timestamp', (req, res) => {
  const { userId, latitude, longitude, timestamp } = req.params;

  console.log('Received location update:', userId, latitude, longitude, timestamp);

  if (!userId || !latitude || !longitude || !timestamp) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  userLocations[userId] = {
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
    timestamp
  };

  console.log(`User ${userId} location updated:`, userLocations[userId]);
  console.log(userLocations)
  res.status(200).json({ message: 'Location updated successfully' });
});

app.listen(3000,() => {
    console.log(`Server is running on http://192.168.163.149:3000`);
  });
  
