require('dotenv').config();
const { Telegraf } = require('telegraf');
const fs = require('fs');
const path = require('path');

// Initialize the bot with the token from environment variables
const bot = new Telegraf(process.env.BOT_TOKEN);

// Global array to store available audio command names
let availableCommands = [];

/**
 * Automatically registers commands for each audio file found in the assets/sounds directory.
 * The command name is derived from the file name (without extension).
 */
function registerAudioCommands() {
  // Define the path to the sounds directory
  const soundsDir = path.join(__dirname, '../assets/sounds');
  
  // Read the directory content synchronously
  const files = fs.readdirSync(soundsDir);
  
  // Filter for supported audio files (e.g., .ogg and .mp3)
  const audioFiles = files.filter(file => file.endsWith('.ogg') || file.endsWith('.mp3'));

  // For each audio file, register a command based on its filename (without extension)
  audioFiles.forEach(file => {
    // Convert the file name (without extension) to lowercase to form the command name
    const commandName = file.split('.')[0].toLowerCase();
    // Store the command name to display it later in the /start message
    availableCommands.push(commandName);
    console.log(`Registering command: /${commandName}`);
    
    // Create a new command that plays the corresponding audio file when called
    bot.command(commandName, (ctx) => {
      ctx.replyWithAudio({ source: path.join(soundsDir, file) });
    });
  });
}

// Register all audio commands dynamically
registerAudioCommands();

/**
 * /start command handler that sends a welcome message along with the list of available audio commands.
 */
bot.command('start', (ctx) => {
  let message = 'Welcome! The following audio commands are available:\n';
  if (availableCommands.length === 0) {
    message += 'No audio files found.';
  } else {
    availableCommands.forEach(cmd => {
      message += `/${cmd}\n`;
    });
  }
  ctx.reply(message);
});

// Launch the bot
bot.launch();
console.log("Bot has been launched successfully.");

// Graceful shutdown handling
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
