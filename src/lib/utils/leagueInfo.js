/*   STEP 1   */
export const leagueID = "1180195997758558208"; // your league ID
export const leagueName = "Shiva Dynasty League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>In a world full of casual fantasy leagues and one-season wonders, a group of slightly obsessed football fanatics said, "What if we made this way more complicated... forever?" Thus the Shiva Dynasty League was born.</p>
  <p>Since 2022, we've been trading picks like Wall Street brokers, hoarding rookies like Pokemon cards, and nursing heartbreaks from 0.2-point Monday night losses. This isn't just fantasy football - it's fantasy football with commitment issues (or too much commitment, depending on how you look at it).</p>
  <p>Every season brings new drama, wild trades, questionable decisions, and at least one team starting a player on IR. It's chaotic, strategic, and gloriously unpredictable - just the way we like it.</p>
  <p>A league created on wildly mediocre football knowledge, and aspirations for glory. This league is the greatest thing created since sliced bread.</p>
  <p>Welcome to the Shiva Dynasty League</p>
  <p>Where trash talk is inevitable and rebuilding never really ends.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    // {
    //   "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Jayden Gatica",
    //   "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Ankeny, IA", // (optional)
    //   "bio": "The Commish",
    //   "photo": "static/managers/jayden-gatica.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Cody Price", // Can be anything (usually your rival's name)
    //     link: 9, // manager array number within this array, or null to link back to all managers page
    //     image: "static/managers/cody-price.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "QB, WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Geax Tigers",
    //   "tradingScale": 8, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Travis Northway",
    //   "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "IA", // (optional)
    //   "bio": "N/A",
    //   "photo": "static/managers/travis-northway.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Spencer Farrell", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "static/managers/spencer-farrell.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR, RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Always rebuilding",
    //   "tradingScale": 5, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Josh Hall",
    //   "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Ankeny, IA", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "static/managers/josh-hall.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "la", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Ant Frein", // Can be anything (usually your rival's name)
    //     link: 4, // manager array number within this array, or null to link back to all managers page
    //     image: "static/managers/ant-frein.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    //     "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Ant Frein",
    //   "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Altoona, IA", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "static/managers/ant-frein.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Kenny Hall", // Can be anything (usually your rival's name)
    //     link: 7, // manager array number within this array, or null to link back to all managers page
    //     image: "static/managers/kenny-hall.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 1, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    //     "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Frankie Frein",
    //   "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Des Moines, IA", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "static/managers/frankie-frein.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Steph Frein", // Can be anything (usually your rival's name)
    //     link: 8, // manager array number within this array, or null to link back to all managers page
    //     image: "static/managers/steph-frein.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR, QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 9, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    //             "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Spencer Farrell",
    //   "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Ankeny, IA", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "static/managers/spencer-farrell.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "mn", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Travis Northway", // Can be anything (usually your rival's name)
    //     link: 2, // manager array number within this array, or null to link back to all managers page
    //     image: "static/managers/travis-northway.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR, TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 3, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    //             "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Kenny Hall",
    //   "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "unknown", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "static/managers/kenny-hall.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "la", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Josh Hall", // Can be anything (usually your rival's name)
    //     link: 3, // manager array number within this array, or null to link back to all managers page
    //     image: "static/managers/josh-hall.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 3, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    //             "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Steph Frein",
    //   "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Ankeny, IA", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "static/managers/steph-frein.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Travis Northway", // Can be anything (usually your rival's name)
    //     link: 2, // manager array number within this array, or null to link back to all managers page
    //     image: "static/managers/travis-northway.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "RB, WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 5, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    //             "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Cody Price",
    //   "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Des Moines, IA", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "static/managers/cody-price.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Chambers", // Can be anything (usually your rival's name)
    //     link: 10, // manager array number within this array, or null to link back to all managers page
    //     image: "static/managers/nathan-chambers.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR, RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 8, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    //             "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Chambers",
    //   "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Cali", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "static/managers/nathan-chambers.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2023, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Spencer Farrell", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "static/managers/spencer-farrell.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 7, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
