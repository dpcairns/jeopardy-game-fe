import request from 'superagent';

const backendURL = `https://enigmatic-springs-29291.herokuapp.com`


export const getLeaderboard = async() => {
    const data = await request.get(`${backendURL}/leaderboard`)
    const sortedData = data.body
    .filter (item => !isNaN(item.total_score / item.games_played))
    .sort((a, b) => (b.total_score / b.games_played) - (a.total_score / a.games_played));
    return sortedData
}

