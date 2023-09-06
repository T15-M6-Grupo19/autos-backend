import app from './app'
import { AppDataSource } from './data-source'



AppDataSource.initialize()

    
    .then(() => {
        console.log('Database connected!')
        const port =  process.env.PORT || 3000

        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err)
    })