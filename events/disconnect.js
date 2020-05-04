module.exports = async (client) => {
    client.once('disconnect', () => {
        console.log('disconnect!');
    });
};