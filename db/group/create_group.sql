INSERT INTO Groups (group_name, group_picture)
VALUES ($1, $2)
RETURNING *;