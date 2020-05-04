module.exports = (client, message) => {
  const tools = require('C:/Projetos/BotSemNomeYet/modules/player/functions.js');
  // Ignora outros bots
  if (message.author.bot) return;

  // Ignorar mensagens que não iniciam com o prefixo (em config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Nossa definição padrão de argumento/nome de comando.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //pega a iformação do comando client.commands Enmap
  const cmd = client.commands.get(command);

  //Não faz nada caso o comando não exista
  if (!cmd) return;

  // roda o comando
  cmd.run(client, message, args, tools);
};