require("dotenv").config()
const express = require("express")
const cors = require("cors")

const PORT = process.env.PORT || 5000

/* Variable Routes */
const ThesisRoutes = require("./routes/thesis")

/* Init Express */
const app = express()

/* Init Middleware */
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* Init Routes */
app.use(ThesisRoutes)

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT)
})
