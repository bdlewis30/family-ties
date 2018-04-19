INSERT INTO Users (user_name, user_img, user_id)
VALUES ($1, $2, $3)
RETURNING *;