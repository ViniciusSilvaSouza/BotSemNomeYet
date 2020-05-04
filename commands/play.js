exports.run = async (client, message, args, tools) => {
    const serverQueue = queue.get(message.guild.id);
    //TODO: continuar a partir daqui - descobrir como fazer para repassar o execute para o funcions.js
    tools.play(args, serverQueue).catch(console.error);
    


    return;
}