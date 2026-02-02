const { App } = require('@slack/bolt');

// Initialisation de l'application Slack
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// Commande /hello
app.command('/hello', async ({ command, ack, say }) => {
  await ack();
  await say(`👋 Hello <@${command.user_id}> !`);
});

// Écoute et log de tous les messages
app.event('message', async ({ event }) => {
  if (!event.subtype) {
    console.log('Message reçu :', event.text);
  }
});

// Lancement du bot
(async () => {
  await app.start(3000);
  console.log('⚡️ Slack bot is running on port 3000');
})();
