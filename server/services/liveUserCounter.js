module.exports = (io) => {
let count = 0;
let $ipsConnected = [];

io.on('connection', function (socket) {
    let $ipAddress = socket.handshake.address;
    if (!$ipsConnected.hasOwnProperty($ipAddress)) {
        $ipsConnected[$ipAddress] = 1;
        count++;
        io.emit('counter', { count: count });
    }
    // console.log("client is connected");


    /* Disconnect socket */
    socket.on('disconnect', function () {
        if ($ipsConnected.hasOwnProperty($ipAddress)) {
            delete $ipsConnected[$ipAddress];
            count--;
            io.emit('counter', { count: count });
        }

    });



});
}