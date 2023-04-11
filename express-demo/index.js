const Joi = require('joi');
const express = require('express');
// const bodyParser = require('body-parser')
const app = express();

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(express.json())


const courses = [
    {id: 1, name: 'course1' },
    {id: 2, name: 'course2' },
    {id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
    res.send('hello World!!!!!'); 
});
// app.post();
// app.put();
// app.delete();
// app.get('/api/courses', (req, res) => {
// res.send(courses);
// });
//Port
// /api/courses/1
// app.get('/api/posts/:year/:month', (req, res) => {
//     // res.send(req.params);
//     res.send(req.query);
// });
app.post('/api/courses/', (req, res) => {
    const { error } = validateCourse(req.body); 
    // = result.error
    if (error) {
        // res.status(400).send('Name required, cannot be < 3 characters');
        res.status(400).send(error.details[0].message);
        return;
    }
    // const schema = {
    //     name: Joi.string().min(3).required()
    // };

    // const result = Joi.validate(req.body, schema);
    // console.log(result);


    // // if (!req.body.name || req.body.name.length < 3) {
    // //     res.status(404).send('Name required, cannot be < 3 characters');
    // //     return;
    // // }

    // if (result.error) {
    //     // res.status(404).send('Name required, cannot be < 3 characters');
    //     res.status(400).send(result.error.details[0].message);
    //     return;
    // }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    // console.log(req);
    // console.log(course.data);
    console.log(course.name);
    courses.push(course);
    res.send(course);
});

app.put('/api/course/:id', (req, res) => {
    // TODO:  Look Up The Course
    // TODO: If not found, return a 404 error
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The Course with the given id was not found');
    

    // TODO: Validate
    // TODO: If invalid, return a 404 error - Bad Request
    // const schema = {
    //     name: Joi.string().min(3).required()
    // };
    // const result = Joi.validate(req.body, schema);
    // const result = validateCourse(req.body);
    const { error } = validateCourse(req.body); // = result.error
    if (error) {
        // res.status(404).send('Name required, cannot be < 3 characters');
        res.status(400).send(error.details[0].message);
        return;
    }

    if (course) {

    // TODO: Update the Course
    // course = Course.find
    course.name = req.body.name;
    // TODO: Return the updated Course
    res.send(course);
    }

});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);

}

app.get('/api/courses/:id', (req, res) => {
    // res.send(req.params);
    // res.send(req.query);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The Course with the given id was not found');
    res.send(course);
});
const port = process.env.PORT || 3011;
app.listen(port, () => console.log(`listening on port ${port}...`));
