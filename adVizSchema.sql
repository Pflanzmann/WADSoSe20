CREATE TABLE nutzer (
	userID SERIAL PRIMARY KEY,
	vorname VARCHAR(60) NOT NULL,
	nachname VARCHAR(60) NOT NULL,
	password VARCHAR(60) NOT NULL,
	isAdmin Bool
);

CREATE TABLE contact (
	vorname VARCHAR(60) NOT NULL,
	nachname VARCHAR(60) NOT NULL,
	straße VARCHAR(60) NOT NULL,
	plz INT NOT NULL,
	stadt VARCHAR(60) NOT NULL,
	land VARCHAR(60) NOT NULL,
	isPrivate Bool
);

INSERT INTO nutzer(userID, vorname, nachname, password, isAdmin)
VALUES
(100, 'Admin', 'Nimda', '1', true),
(101, 'User', 'Resu', '2', false);

INSERT INTO contact(vorname, nachname, straße, plz, stadt, land, isPrivate)
VALUES
('Thomas', 'Nofz', 'Bahnhofstraße', 14943, 'Luckenwalde', 'Deutschland', false),
('Sven', 'Schneider', 'Berlinerstraße', 13507, 'Berlin', 'Deutschland', true);