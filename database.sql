
DROP TABLE "fridge";
DROP TABLE "user";


CREATE TABLE "user"(
  email varchar(100) NOT NULL,
  "password" varchar(100) NOT NULL,
  CONSTRAINT email PRIMARY KEY(email)
);

CREATE TABLE fridge(
    id integer NOT NULL,
    serialNumber varchar(100) NOT NULL,
    "type" varchar(100),
    working bool NOT NULL,
    CONSTRAINT id PRIMARY KEY(id),
    email varchar(100) NOT NULL
);

ALTER TABLE fridge
  ADD CONSTRAINT email FOREIGN KEY (email) REFERENCES "user" (email);