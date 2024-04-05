// Sample JavaScript code for messaging using WebSocket (client side)
const socket = new WebSocket('ws://example.com/chat');

socket.onopen = function(event) {
    console.log('WebSocket connection established.');
};

socket.onmessage = function(event) {
    const message = JSON.parse(event.data);
    console.log('Received message:', message);
};

// Send message
function sendMessage(message) {
    socket.send(JSON.stringify({type: 'message', content: message}));
}
