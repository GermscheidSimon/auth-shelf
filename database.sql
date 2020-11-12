-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO "item" ("description", "image_url", "user_id")
VALUES ('chunk of obsidian', 'https://geology.com/rocks/pictures/obsidian-380.jpg', '1'),
       ('Jar of Thumbtacks','https://image.shutterstock.com/image-photo/multicolored-thumbtacks-glass-jar-260nw-1184475664.jpg' ,'1'),
       ('used teabag', 'https://www.thesun.co.uk/wp-content/uploads/2016/09/nintchdbpict000261756528.jpg?w=620', '1'),
       ('A Baby Seal', 'https://thumbs-prod.si-cdn.com/oqSHbCei8he33iZKlQ1VIARr7vA=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/Surprising-Science-baby-seal-631.jpg', '1'),
       ('A Budda Statue', 'https://dharmacraft.shop/3878-large_default/buddha-amitabha-or-opame-10-cm-statue.jpg', '1' );