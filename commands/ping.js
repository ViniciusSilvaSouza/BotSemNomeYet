exports.run = async (client, message, args, tools) => {
    const m = await message.channel.send("Ping?");
    m.edit(`A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
}