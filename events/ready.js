module.exports = async client => {
    console.log(` Em teste para ${client.users.size} usuários em ${client.guilds.size} servidores.`, "ready")
    client.user.setActivity("Em teste")
};