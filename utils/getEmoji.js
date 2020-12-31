const EMOJI = ['😎','🦷','🦏','🕊','🐓','🌲','🌿','🌎','💥','⚡️','⭐️','🥪','🥉','🌋','🗿','📦','❤️', '🌀','✅','😋']
const getEmoji = () => {
    return EMOJI[Math.floor(Math.random()*EMOJI.length)];
}
export default getEmoji;