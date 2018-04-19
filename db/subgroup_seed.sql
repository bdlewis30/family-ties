CREATE TABLE IF NOT EXISTS Subgroup (
id SERIAL PRIMARY KEY,
group_name VARCHAR(180),
group_picture VARCHAR(300),
group_id INTEGER REFERENCES Groups (id)
);