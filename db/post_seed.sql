CREATE TABLE IF NOT EXISTS Posts (
id SERIAL PRIMARY KEY,
post VARCHAR(300),
post_time TIME NOT NULL,
post_date DATE NOT NULL,
post_link VARCHAR(300),
post_picture VARCHAR(300),
post_video VARCHAR(300),
user_id INTEGER REFERENCES Users (id)
);