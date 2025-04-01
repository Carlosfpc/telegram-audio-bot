# Telegram Audio Bot

A generic Telegram bot for playing audio files in channels or groups. Built with Node.js and the Telegraf library, this bot is designed to be modular, easily extendable, and simple to deploy.

## Features

- **Audio Playback:** Use commands to play audio files in chats.
- **Interactive Controls:** Includes inline keyboard support for interactive audio playback.
- **Modular Design:** Organized project structure that makes it easy to maintain and expand.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher is recommended)
- A Telegram Bot Token from [BotFather](https://core.telegram.org/bots#6-botfather)

### Clone the Repository

```bash
git clone https://github.com/Carlosfpc/telegram-audio-bot.git
cd telegram-audio-bot
```

### Install Dependencies
```bash
npm install
```
### Configure Environment Variables
 - Copy the example environment file:

```bash
cp .env.example .env
```
 - Open the newly created .env file and add your Telegram Bot Token:
```bash
BOT_TOKEN=your_bot_token_here
```
### Usage
 - Start the bot in development mode with nodemon:
```bash
npm run devserver
```
 - Or launch the bot directly:

```bash
node src/index.js
```
 - Once running, use the /start command in Telegram to see the welcome message and interact with the bot.

### Project Structure
```perl
telegram-audio-bot/
├── .env.example           # Example environment configuration file
├── .gitignore             # Files and directories to ignore in Git
├── README.md              # Project documentation and instructions
├── package.json           # Project configuration and dependencies
├── package-lock.json      # Dependency lock file
├── src/
│   └── index.js           # Main bot file containing the bot logic
└── assets/
    └── sounds/            # Directory for audio files (add your .ogg files here)
```
### Contributing
 - Contributions are welcome! If you have any improvements, bug fixes, or feature suggestions, please fork the repository and submit a pull request.

### License
 - This project is licensed under the ISC License.

### Contact
 - For questions, suggestions, or issues, please open an issue in the repository or contact the repository owner.