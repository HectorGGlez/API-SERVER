// importing libraries
const express = require("express")
const morgan = require("morgan")
const axios = require("axios")

//  Creating our app
const app = express()

// defining the web port
let port = process.env.PORT || 8080

//Midleware
app.use(express.json())
app.use(morgan("dev"))
//APIS:
app.get('/', (req, res)=> {
    res.send("<h1>Hello World<h1>")
})
app.get('/gatorade', (req, res)=> {
    res.send("<h1>Hello from Gatorade<h1>")
})
app.post('/send-data', (req, res)=> {
    console.log(req.body.Hola)
    res.send("Succes")
})


app.get('/mialorant/:uuid/' , (req,res)=>{
    const uuid = req.params.uuid
    //console.log("Agent name" + req.params.agent)
    //consume mialorant API
    const END_POINT = ` https://valorant-api.com/v1/agents/${uuid}` 
    console.log("END_POINT: " + END_POINT)
    axios.get(END_POINT)
        .then(function(response){
            console.log("RES:" + response.data)
            res.status(200)
            res.json(
                {
                name: response.data.data.displayName

             })

            })
            //ERROR HANDLER
        .catch(function (error){
            console.log("ERROR:" + error)
            res.send(error)
        })
    
})

app.get('/events/:event/' , (req,res)=>{
    const event = req.params.event
    //console.log("Agent name" + req.params.agent)
    //consume mialorant API
    const END_POINT = ` https://valorant-api.com/v1/events/${event}` 
    console.log("END_POINT: " + END_POINT)
    axios.get(END_POINT)
        .then(function(response){
            console.log("RES:" + response.data)
            res.status(200)
            res.json(
                {
                name: response.data.data.shortDisplayName

             })

            })
            //ERROR HANDLER
        .catch(function (error){
            console.log("ERROR:" + error)
            res.send(error)
        })
        //5f8d3a7f-467b-97f3-062c-13acf203c006
})

app.get('/contract/:uuid/' , (req,res)=>{
    const uuid = req.params.uuid
    //console.log("Agent name" + req.params.agent)
    //consume mialorant API
    const END_POINT = ` https://valorant-api.com/v1/contracts/${uuid}` 
    console.log("END_POINT: " + END_POINT)
    axios.get(END_POINT)
        .then(function(response){
            console.log("RES:" + response.data)
            res.status(200)
            res.json(
                {
                name: response.data.data.displayName

             })

            })
            //ERROR HANDLER
        .catch(function (error){
            console.log("ERROR:" + error)
            res.send(error)
        })
    
})

app.get('/valweapons/:name/' , (req,res)=>{
    const name = req.params.name
    //console.log("Agent name" + req.params.agent)
    //consume mialorant API
    const END_POINT = ` https://valorant-api.com/v1/weapons/${name}` 
    console.log("END_POINT: " + END_POINT)
    axios.get(END_POINT)
        .then(function(response){
            console.log("RES:" + response.data)
            res.status(200)
            res.json(
                {
                name: response.data.data.displayName

             })

            })
            //ERROR HANDLER
        .catch(function (error){
            console.log("ERROR:" + error)
            res.send(error)
        })
        
})

app.get('/weaponskins/:name/' , (req,res)=>{
    const name = req.params.name
    //console.log("Agent name" + req.params.agent)
    //consume mialorant API
    const END_POINT = ` https://valorant-api.com/v1/weapons/skins/${name}` 
    console.log("END_POINT: " + END_POINT)
    axios.get(END_POINT)
        .then(function(response){
            console.log("RES:" + response.data)
            res.status(200)
            res.json(
                {
                name: response.data.data.displayName

             })

            })
            //ERROR HANDLER
        .catch(function (error){
            console.log("ERROR:" + error)
            res.send(error)
        })
        
})
app.get('/gamemodes/:name/' , (req,res)=>{
    const name = req.params.name
    //console.log("Agent name" + req.params.agent)
    //consume mialorant API
    const END_POINT = ` https://valorant-api.com/v1/gamemodes/${name}` 
    console.log("END_POINT: " + END_POINT)
    axios.get(END_POINT)
        .then(function(response){
            console.log("RES:" + response.data)
            res.status(200)
            res.json(
                {
                Standarduration: response.data.data.duration

             })

            })
            //ERROR HANDLER
        .catch(function (error){
            console.log("ERROR:" + error)
            res.send(error)
        })
        
})

//POSTs
app.post('/val/:id', (req,res) => {

    //Validation
    console.log("Nombre: " + req.body.nombre)
    console.log("Apellido: " + req.body.apellido)

    if(!req.body.apellido) {
        res.status(400)
        res.send("Error. Falta apellido")
        return
    }

    if(!req.body.nombre) {
        res.status(400)
        res.send("Error. Falta apellido")
        return
    }
    res.status(200)
    res.send("OK")
})

app.post('/valoweapons', (req,res) => {

    //Validation
    const id= req.body.id

    const END_POINT = ` https://valorant-api.com/v1/weapons/${id}` 
    console.log("END_POINT: " + END_POINT)
    axios.get(END_POINT)
        .then(function(response){
            console.log("RES:" + response.data)
            res.status(200)
            res.json(
                {
                Weaponname: response.data.data.displayName

             })

            })
            //ERROR HANDLER
        .catch(function (error){
            console.log("ERROR:" + error)
            res.send(error)
            res.status(404)
        })
})

app.post('/valseasons', (req,res) => {

    //Validation
    const id= req.body.id

    const END_POINT = ` https://valorant-api.com/v1/seasons/${id}` 
    console.log("END_POINT: " + END_POINT)
    axios.get(END_POINT)
        .then(function(response){
            console.log("RES:" + response.data)
            res.status(200)
            res.json(
                {
                seasonstartTime: response.data.data.startTime

             })

            })
            //ERROR HANDLER
        .catch(function (error){
            console.log("ERROR:" + error)
            res.send(error)
            res.status(404)
        })
})

app.post('/valsprays', (req,res) => {

    //Validation
    const id= req.body.id

    const END_POINT = `https://valorant-api.com/v1/sprays/${id}` 
    console.log("END_POINT: " + END_POINT)
    axios.get(END_POINT)
        .then(function(response){
            console.log("RES:" + response.data)
            res.status(200)
            res.json(
                {
                displayIcon: response.data.data.displayIcon

             })

            })
            //ERROR HANDLER
        .catch(function (error){
            console.log("ERROR:" + error)
            res.send(error)
            res.status(404)
        })
})

app.post('/valplayercards', (req,res) => {

    //Validation
    const id= req.body.id

    const END_POINT = `https://valorant-api.com/v1/playercards/${id}` 
    console.log("END_POINT: " + END_POINT)
    axios.get(END_POINT)
        .then(function(response){
            console.log("RES:" + response.data)
            res.status(200)
            res.json(
                {
                Art: response.data.data.smallArt

             })

            })
            //ERROR HANDLER
        .catch(function (error){
            console.log("ERROR:" + error)
            res.send(error)
            res.status(404)
        })
})

app.post('/vallevel', (req,res) => {

    //Validation
    const id= req.body.id

    const END_POINT = `https://valorant-api.com/v1/levelborders/${id}` 
    console.log("END_POINT: " + END_POINT)
    axios.get(END_POINT)
        .then(function(response){
            console.log("RES:" + response.data)
            res.status(200)
            res.json(
                {
                Level: response.data.data

             })

            })
            //ERROR HANDLER
        .catch(function (error){
            console.log("ERROR:" + error)
            res.send(error)
            res.status(404)
        })
})


//Server running
app.listen(port, ()=>{
    console.log("Server running on port " + port);
})
