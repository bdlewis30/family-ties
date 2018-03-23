CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(180),
    user_img VARCHAR(300),
    auth_id TEXT,
    user_id INTEGER REFERENCES Users (id)
)
