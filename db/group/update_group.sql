UPDATE Groups
SET group_name = $1
SET group_picture = $2
WHERE id = $3;