# Valorant API-SERVER

## About the Project

This project is an introduction about the use of APIs, in this case I used the Valorant API to work on it.

If you want to implement this API in your projects you should follow the next steps.

1. Firstly, you need to go to the next link **<https://valorant-api.com>**
2. In the web page you will can to see four tabs at the top of the page, you must to do click in the **Dashboard/Docs** option.
3. It´s time to get to work, you won´t need a key for acces.

***

## Instalation

You will need

> - Node.js
> - Postman

1. To start the installation we need the node-modules and dependences.

```sh
    npm install
```

2. Now you are ready to start coding, to run this app you must to write the next command in your terminal. Be sure you are well located in the correct directory.

```sh
    npm run dev
```

***

## How it works?

This is a REST API that works essentially the same way that any website does. **A call is made from a client to a server, and data is received back over the HTTP protocol**. Here we can find two different typhes of methods, *POST Method* and the *GET Method*.
***

## Diferences between GET Methods and POST Methods

Main difference between POST and GET method is that GET carries request parameter appended in URL string while POST carries request parameter in message body which makes it more secure way to transferring data from client to server.

***

>POST example
>>JSON parameters

```JSON
{
    "id":"ebc736cd-4b6a-137b-e2b0-1486e31312c9"
}
```

The parameteres passed in JSON send the information necessary to get our request, to make this we used Postman writing our JSON.

>POST REQUEST

```js

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

```

***
This method is easier because you only need to request your parameter in the URL, is required *axios* to match the ENDPOINTS.

>GET request

```js
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

```

***

## Notes

- Is important to use the *catch function* to be aware of one error.
- Running on port 8080
