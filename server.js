const express = require('express');
const app = express();

// Define a route for GET requests
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const PORT = 80; // or any other port you prefer
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
