const express = require('express')
const routes = express.Router()
const axios = require('axios')

const GET = async (nickname) => {
  const response = await axios.get(`http://api.github.com/users/${nickname}/repos`)

  return response.data
}

const compareDates = (entry1, entry2) => {
  
  let date1 = new Date(entry1["created_at"]).getTime()
  let date2 = new Date(entry2["created_at"]).getTime()  

  return date1 - date2
}

routes.get('/api/get', async (req, res) => {

  //If no nickname is sent in the header return status 400
  if(!req.headers.nickname) return res.status(400).end()

  //Fetch data
  let data = await GET(req.headers.nickname)

  //Filter result by language and get only the atributes that matter
  //
  let reposCSharp = {}

  data.filter(item => item.language === "C#").map((item, index) => {

    reposCSharp[index] = {
        "id": item.id,
        "full_name": item.full_name,
        "avatar_url": item.owner.avatar_url,
        "html_url": item.html_url,
        "description": item.description,
        "created_at": item.created_at
      }
  })

  //Order filtered results by creation date
  //
  let reposCSharpOrdered = {}

  Object.values(reposCSharp).sort(compareDates).map((item, index) => {
    reposCSharpOrdered[index] = {...item}
  })

  return res.json(reposCSharpOrdered)
})

module.exports = routes