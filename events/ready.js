module.exports = client => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity('excurb1a crusading wisdom', { type: 'WATCHING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
    .catch(console.error);
};
