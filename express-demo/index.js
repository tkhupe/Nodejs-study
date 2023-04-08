const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello World!!!!!'); 
});
// app.post();
// app.put();
// app.delete();
app.get('/api/courses', (req, res) => {
res.send([2,4,6])
});
//Port
// /api/courses/1
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});
const port = process.env.PORT || 3006;
app.listen(port, () => console.log(`listening on port ${port}...`));
