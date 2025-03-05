import { REST, Routes, SlashCommandBuilder } from 'discord.js';
import { env } from './env'

// COMMANDS
// /win @username
// /lose @username
// /ban @username
// /ranking
// /ranking @username
// /new id_partida? (editado)
// /end
// /detail id_partida (editado)
// /list page?

const commands = [
  new SlashCommandBuilder().setName("win").setDescription("Registra uma vitória").addUserOption(option => option.setName("user").setDescription("Usuário a ser registrado").setRequired(true)),
  new SlashCommandBuilder().setName("lose").setDescription("Registra uma derrota").addUserOption(option => option.setName("user").setDescription("Usuário a ser registrado").setRequired(true)),
  new SlashCommandBuilder().setName("ban").setDescription("Bane um usuário").addUserOption(option => option.setName("user").setDescription("Usuário a ser banido").setRequired(true)),
  new SlashCommandBuilder().setName("ranking").setDescription("Mostra o ranking").addUserOption(option => option.setName("user").setDescription("Usuário a ser pesquisado")),
  new SlashCommandBuilder().setName("new").setDescription("Cria uma nova partida").addStringOption(option => option.setName("id").setDescription("ID da partida")),
  new SlashCommandBuilder().setName("end").setDescription("Finaliza a partida"),
  new SlashCommandBuilder().setName("detail").setDescription("Detalhes da partida").addStringOption(option => option.setName("id").setDescription("ID da partida")),
  new SlashCommandBuilder().setName("list").setDescription("Lista as partidas").addIntegerOption(option => option.setName("page").setDescription("Página"))
];

const rest = new REST({ version: '10' }).setToken(env.TOKEN);

try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}