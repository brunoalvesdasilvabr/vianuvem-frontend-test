const express = require('express')
const path = require("path");
const cors = require('cors')
const app = express()

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));



app.use(express.static('views'))
app.use(cors())


app.get('/', (req, res) => {
	const circles = [
		{
			id: 1,
			name: 'Twitter',
			image: 'img/twitter.jpg',
			color: '#aa2b31',
			size: 3
		},
		{
			id: 2,
			name: 'Facebook',
			image: 'img/facebook.jpg',
			color: '#63e184',
			size: 1
		},
		{
			id: 3,
			name: 'Skype',
			image: 'img/skype.png',
			color: '#033d49',
			size: 2
		},
	]
    res.render("home",{
				circles:circles
		})
})

app.listen(3001, () => {
  console.log('Server listening on port 3001')
})


