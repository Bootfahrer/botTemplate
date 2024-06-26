const { Events } = require('discord.js')

//Basic event handler for executing commands
module.exports = {
    name: Events.InteractionCreate,

    async execute(client) {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        }
        catch (error) {
            console.error(error);
            await interaction.reply({ content: "There was an error executing this command." })
        }
    }
}