const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT


// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000       //It is in bytes
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)) {      // \.(doc|docx)$ is regex
//             return cb(new Error('Please upload a Word document'))
//         }
//         cb(undefined, true)

//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })


// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })


// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('GET requests are disabled.')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon')    
// }) 


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port')
})


const Task = require('./models/task')
const User = require('./models/user')



//Learning Populate
// const main = async () => {
//     // const task = await Task.findById('5e7b90d2f7cd0c2a447190f1')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5e7b901ac6466b2364c0769e')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()


//Learning jsonwebtoken
// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()



//Learning bcrypt
// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Read12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Read12345!', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()
