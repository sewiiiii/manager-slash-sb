const Discord = require("discord.js");
const fs = require("fs");
const config = require("../../config.json");

module.exports = {
    name: "configlog",
    description: "Configure le salon de journalisation.",
    options: [
      {
        type: "channel",
        name: "privé",
        description: "le salon de log privé",
        required: true
      },
      {
        type: "channel",
        name: "public",
        description: "le salon log public",
        required: true
      }    
    ],
    async run(bot, interaction) {
    const privé = interaction.options.getChannel("privé")
    const public = interaction.options.getChannel("public")

      config.logprivé = [...config.logprivé, privé.id],
      
      config.logpublic = [...config.logpublic, public.id],

  fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
        interaction.reply({content: "Salon des logs configuré avec succès.", ephemeral: true});
    },
};

function acccess(bot, interaction, userId) {
    const dev = config.owner || [];

    return dev.includes(userId);
  }