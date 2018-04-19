UPDATE Posts
SET post = $1
WHERE id = $2
AND user_id = $3;