const socket = new WebSocket('ws://localhost:8080/ws')

socket.on('connection', () => {
    alert("Test")
})