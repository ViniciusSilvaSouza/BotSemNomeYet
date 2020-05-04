 module.exports = async (client, message, args) => {
 const queue = client.queue[message.guild.id];
  message.channel.send(`**${queue.length}** song${queue.length !== 1 ? 's' : ''} queued.`)
  .catch(console.error);
  return;
 }