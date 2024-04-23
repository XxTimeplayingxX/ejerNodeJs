/*Práctica usando POST */

const { NOMEM } = require('dns');
const servidor = require('http');

const server = servidor.createServer((req, res)=>{
    // console.log('Llego el pavo');
    // console.log(req.method, req.url);

    if(req.method === 'POST'){
        let body = '';
        req.on('data', (chunk)=>{
            body += chunk;
        });

        req.on('end', ()=>{
            console.log(body);
            let username = body.split('=')[1]
            //Tiene que ser el dos, pero no me permite
            let password = body.split('=')[2]

            let credenciales = username + password
            let partes = credenciales.split("&");
            let primeraParte = partes[0];
            let segundaParte = partes[1];
            let contrasena = segundaParte.split("password")[1];

            let response = primeraParte + ' ' + contrasena
            res.end('Usuario: '+primeraParte + ' Contrasena: ' +contrasena)
        })
    }
    else{
        res.setHeader('Content-Type', 'text/html');
        res.end('<form method="POST"><input type="text" name="username" placeholder="Username"></input><br><input type="password" name="password" placeholder="Password"></input><br><button type="submit">Create User</button></form>');
    }

    
});

server.listen(5001);