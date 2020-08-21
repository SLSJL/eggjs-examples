// const Socket = require('socket.io-client')
const Socket = require('socket.io-client')
// import Socket from "socket.io-client"
const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkJKRWhDczk3anluNFFWOWFTc19SR2t1S2ZXbTVDVnNIbDVRWlBlQUJiNU0ifQ.eyJzY29wZXMiOlsib3BlbmlkIl0sImV4dHJhIjp7Il9pZCI6IjVmMjNjY2MwZTJmMTk2MDAxY2M5NGU0YiIsInVzZXJuYW1lIjoicG9seVVBZG1pbiIsImdyb3VwcyI6WyJwb2x5Il0sIm5hbWUiOiJQT0xZVSBBRE1JTiIsImRlcHRJZCI6InBvbHkifSwiZXhwIjoxNTk3MTM3MzczLCJhenAiOiI1ZjFlODFkNjQ0OTkxZDYyNDVjMmFhMjEiLCJzdWIiOiI1ZjIzY2NjMGUyZjE5NjAwMWNjOTRlNGIiLCJhdWQiOiI1ZjFlODFkNjQ0OTkxZDYyNDVjMmFhMjEiLCJpc3MiOiJodHRwczovL3Rtcy1hdXRoLmhramN0cmVlLmNvbSIsImlhdCI6MTU5NzExNTc3M30.r4LMgPX5Iysz4H85N957FgsW9Kh-YpEEJ4orstG1-j7J4UJ8S-2N-JZSP71hcZPOjuGzK5EhDWMhfNOIDXDyG1wAKXClfK1i3_Wfev3rWiqc686iaIx_hMKlA1byxRBmi2B_AAEEBfU4__tfvXz5YJ4REuQuxZ0fjQvm9TRAW6A';
var socket;
var socketId = '';

socket = Socket('http://localhost/home', {
    // socket = io('http://localhost/home', {
    // socket = io('http://158.132.186.223:9000/home', {
    path: '/api/socket.io',
    query: {
        accessToken: token
    },
    transports: ['websocket']
});

socket.on('connect', function () {
    socketId = socket.id;
    socket.emit("dataTransmission")
});

socket.on('disconnect', function (data) {
    console.log(data)
    socket.close()
});

socket.on("dataTransferring", function (data) {
    console.log("-----", data)
});

socket.on('test', function (data) {
    console.log(data)
});

socket.on('res', function (data) {
    console.log(data)
});


socket.on('error', (e) => console.log(e));