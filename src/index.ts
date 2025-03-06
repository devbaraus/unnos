import 'dotenv/config'

import { env } from 'bun';
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { db } from './db';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on(Events.ClientReady, readyClient => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  
  }
});

client.login(env.TOKEN);
