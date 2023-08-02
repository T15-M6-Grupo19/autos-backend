import app from './app'
import { AppDataSource } from './data-source'


const port = 3000
AppDataSource.initialize()
    
    .then(() => {
        console.log('Database connected!')
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err)
    })