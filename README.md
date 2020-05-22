This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<h1>The name of the project is Jeopardy Lite.</h1>
<h3>Triple Jeopardy Members: Joey Leaptrott, Jake Pendergraft, and Dan Bennington</h3>
<p>This project pulls questions from an API and displays them for the user to answer. Not a user? You can sign up. Signed out but want to play again? Use the login page and play again.</p>


<h4>API endpoint with Sample Responses</h4>


<p>The API has users using password protection and needs a token for authorization. Example: https://enigmatic-springs-29291.herokuapp.com/api/results/<br>
This end point will only show the users results which is on a protected route.<br>Sample Data:
[
    {
        "id": 2,
        "highest_score": 0,
        "total_score": 81,
        "games_played": 17,
        "user_id": 12
    }
]
*there is also a .put(updates player profile for this route) which initalizes on signup for players and sets all player stats to 0. 
*there is a .put request which is uses this route to update score and games played upon completing  
The leaderboard route is public and will display all user's stats.
<br>Example: https://enigmatic-springs-29291.herokuapp.com/leaderboard<br>
<p>Sample Data:
[
    {
        "id": 7,
        "total_score": 5,
        "games_played": 2,
        "name": "dave"
    },
    {
        "id": 8,
        "total_score": 7,
        "games_played": 2,
        "name": "bob"
    },
    {
        "id": 9,
        "total_score": 4,
        "games_played": 2,
        "name": "jim"
    }
]
<p>Protected Login route: <br>https://enigmatic-springs-29291.herokuapp.com/auth/signin<br>
<p>Sample data response: <br>
{
    "id": 13,
    "email": "what@ever.com",
    "display_name": "hello",
    "token": "eyJhbGciOiJIUklajsdnR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTU5MDE2Mjg1N30.2ocZ41gWc4QVtumwFpkNETP5aJ_GM1LCTMPpgCGU2eI"
}<br>
<p>Protected signUp route: <br>https://enigmatic-springs-29291.herokuapp.com/auth/signup<br>
<p>Sample data response: <br>
{
    "id": 45,
    "email": "hello@world.com",
    "display_name": "bob",
    "token": "eyJhbGciOiJIUklajsdnR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCklj5MDE2Mjg1N30.2ocZ41gWc4QVtumwFpkNETP5aJ_GM1LCTMPpgCGU2eI"
}<br>

