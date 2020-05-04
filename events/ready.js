module.exports = async (client) => {

    client.queue = {};
    for (guild of client.guilds) client.queue[guild.id] = [];
    
    console.log(` Em teste para ${client.users.size} usuários em ${client.guilds.size} servidores.`, "ready")
    client.user.setUsername('Marquinho DJ')
        .then(user => console.log(`Nickname mudado para ${user.username}`))
        .catch(console.error);

    client.user.setActivity('EM DESENVOLVIMENTO', { type: 0 });  //0 = Jogando; 1 = Transmitindo; 2 = Ouvindo; 3 = Assistindo

};