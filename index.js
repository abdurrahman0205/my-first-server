import express from 'express'

const app = express();
const PORT = process.env.PORT || 3000;


const users = [
  { "id": 1, "name": "Alice Smith", "email": "alice.smith@example.com" },
  { "id": 2, "name": "Bob Jones", "email": "bob.jones@example.com" },
  { "id": 3, "name": "Charlie Brown", "email": "charlie.brown@example.com" },
  { "id": 4, "name": "Diana Prince", "email": "diana.prince@example.com" },
  { "id": 5, "name": "Evan Wright", "email": "evan.wright@example.com" },
  { "id": 6, "name": "Fiona Gallagher", "email": "fiona.gallagher@example.com" },
  { "id": 7, "name": "George Clark", "email": "george.clark@example.com" },
  { "id": 8, "name": "Hannah Abbott", "email": "hannah.abbott@example.com" },
  { "id": 9, "name": "Ian Malcolm", "email": "ian.malcolm@example.com" },
  { "id": 10, "name": "Julia Roberts", "email": "julia.roberts@example.com" }
]




app.get('/', (req, res) => {
  res.send(users);
})


app.get('/contact', (req, res) => {
  res.send('This is contact page')
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})