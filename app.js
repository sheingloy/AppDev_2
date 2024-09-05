const express = require('express');
const app = express();
const port = 8000;

// Set up the view engine
app.set('view engine', 'ejs');



// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/service', (req, res) => {
    res.render('service');
});

app.get('/vmgo', (req, res) => {
    res.render('vmgo');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});



// Handling POST request (for example, from a form submission)
app.post('/contact', (req, res) => {
    res.send('Form submitted!');
});





// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});