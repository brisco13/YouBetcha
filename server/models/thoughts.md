It may make sense to have the following models:

bet: - Id: string - users: [users] (houses array of user objects/models) - headline: string (title of card?) - terms: string (details of bet) - expiry: string (not sure if we even need this if we're not going to text/message people about their bets...) - image: string (string will just be href link) - comments: [comment] (array of comment objects) - winner: [user] - loser: [user] (may be fun to allow multiple winners/losers) - reactions: [reactions] (idk, maybe ambitious for this project. May be worth building on the backend though)

users: - Id: string - username: string - password: string - email: string - winCount: string (total user wins) - betCount: num (total user bets) - bets: [bet] - friends: [users]

comment: - Id: string - betID: string (ties comment to bet parent) - body: string (can accept gif links or text bodies) - reactions: [reaction] - user: [user] (ties user to comment - allows for deletion of comments if user deleted)

reaction: - Id: string - comment ID: string (ties reaction to bet/comment parent) - object: char (maybe just restrict it to some emojis from the system? i.e. 😍😂🤣💙 etc) - user: [user] (ties user to reaction - allows for deletion of reactions if user deleted)