INSERT INTO Posts (post, post_time, post_date, post_link, post_picture, post_video, user_id)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;