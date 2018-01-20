CREATE TABLE injuries (
id SERIAL PRIMARY KEY,
injury VARCHAR(200),
description VARCHAR(1000)
);

CREATE TABLE treatments (
id SERIAL PRIMARY KEY,
treatment VARCHAR(200),
description VARCHAR(1000),
comments json,
upvotes integer,
injury_id INT REFERENCES injuries
);

INSERT INTO injuries(injury, description)
VALUES ('high hamstring tendonopathy', 'pain right below the glutes'),
('lower back pain', 'tension and discomfort');

INSERT INTO treatments(treatment, description, comments, upvotes, injury_id)
VALUES ('squats', '20 reps', '[{"comment": "weight on your heels", "upvotes": "0"}, {"comment": "don''t go past 90 degrees", "upvotes": "0"}]',0, 1),
('burpies', '20 reps', '[{"comment": "with tuck jumps", "upvotes": "0"}, {"comment": "don''t do too many", "upvotes": "0"}]', 0, 1);
