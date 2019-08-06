CREATE TABLE user_posts (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    description TEXT NOT NULL,
    date_published TIMESTAMP DEFAULT now() NOT NULL,
    author INTEGER REFERENCES user_accounts(id),
    image_url VARCHAR, 
    music_url VARCHAR,
    comment_count INT,
    likes_count INT
);