import { REST, Routes, SlashCommandBuilder } from 'discord.js';

import { env } from '@shared/env'

// COMMANDS
// /ganhou @username
// /deu @username
// /banido @username quantidade
// /ranking
// /ranking @username
// /nova id_partida? (editado)
// /finaliza
// /detalhe id_partida (editado)
// /lista page?

const commands = [
  new SlashCommandBuilder().setName("ganhou").setDescription("Registra uma vitória").addUserOption(option => option.setName("user").setDescription("Usuário a ser registrado").setRequired(true)),
  new SlashCommandBuilder().setName("deu").setDescription("Registra uma derrota").addUserOption(option => option.setName("user").setDescription("Usuário a ser registrado").setRequired(true)),
  new SlashCommandBuilder().setName("banido").setDescription("Bane um usuário").addUserOption(option => option.setName("user").setDescription("Usuário a ser banido").setRequired(true)),
  new SlashCommandBuilder().setName("ranking").setDescription("Mostra o ranking").addUserOption(option => option.setName("user").setDescription("Usuário a ser pesquisado")),
  new SlashCommandBuilder().setName("nova").setDescription("Cria uma nova partida").addStringOption(option => option.setName("id").setDescription("ID da partida")),
  new SlashCommandBuilder().setName("finaliza").setDescription("Finaliza a partida"),
  new SlashCommandBuilder().setName("detalhe").setDescription("Detalhes da partida").addStringOption(option => option.setName("id").setDescription("ID da partida")),
  new SlashCommandBuilder().setName("lista").setDescription("Lista as partidas").addIntegerOption(option => option.setName("page").setDescription("Página"))
];

const rest = new REST({ version: '10' }).setToken(env.TOKEN);

try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}