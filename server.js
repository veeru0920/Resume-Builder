import jsonServer from 'json-server'
import cors from 'cors'

// Create JSON Server instance
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

// Create separate routers for different JSON files
const dbRouter = jsonServer.router('db.json')
const messagesRouter = jsonServer.router('messages.json')

// Enable CORS so your React app can call this server
server.use(cors())
server.use(middlewares)

// Use messages router for /messages endpoints
server.use('/messages', messagesRouter)

// Use db router for other endpoints
server.use(dbRouter)

// Run JSON Server on http://localhost:5000
server.listen(5000, () => {
  console.log('JSON Server running at http://localhost:5000')
  console.log('Messages API: http://localhost:5000/messages')
  console.log('Database API: http://localhost:5000/resumes, /users')
})
