module.exports = async (client) => {
    client.once('reconnecting', () => {
        console.log('reconnecting!');
    });
};