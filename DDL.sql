CREATE TABLE Restrictions (
	ResCode char(8),
	isRes1 boolean,
	isRes2 boolean,
	isRes3 boolean,
	isRes4 boolean,
	isRes5 boolean,
	isRes6 boolean,
	isRes7 boolean,
	isRes8 boolean,
	PRIMARY KEY (ResCode)
);

CREATE TABLE Conditions (
	CondCode char(5),
	isA boolean,
	isB boolean,
	isC boolean,
	isD boolean,
	isE boolean,
	PRIMARY KEY (CondCode)
);

CREATE TABLE ResAndConds (
	LicenseNo varchar(13),
	ResCode varchar(8) REFERENCES Restrictions(ResCode) ON DELETE CASCADE,
	CondCode varchar(5) REFERENCES Conditions(CondCode) ON DELETE CASCADE,
	PRIMARY KEY (LicenseNo)
);

CREATE TABLE BodyType (
	Height numeric(5,2),
	Weight numeric(5,2),
	Built varchar(20),
	PRIMARY KEY (Height, Weight)
);

CREATE TABLE PersonalDetails (
	PDID int,
	BloodType varchar(3),
	Hair varchar(10),
	Eyes varchar(10),
	Complexion varchar(10),
	Height numeric(5,2),
	Weight numeric(5,2),
	isOrganDonor boolean,
	PRIMARY KEY (PDID),
	FOREIGN KEY (Height, Weight) REFERENCES BodyType(Height, Weight) ON DELETE CASCADE
);

CREATE TABLE FamilyRelations (
	TIN char(12),
	PDID int,
	Father varchar(100),
	Mother varchar(100),
	Spouse varchar(100) UNIQUE,
	PRIMARY KEY (TIN, PDID)
);

CREATE TABLE Nationality (
	Birthplace varchar(100),
	Nationality varchar(50),
	PRIMARY KEY (Birthplace)
);

CREATE TABLE PersonInformation (
	TIN char(12),
	FullName varchar(100) UNIQUE,
	PresAdd varchar(100),
	Gender varchar(2),
	BirthDate date,
	TCPNo varchar(100),
	Birthplace varchar(100) REFERENCES Nationality(Birthplace) ON DELETE CASCADE,
	PRIMARY KEY (TIN)
);

CREATE TABLE Businesses (
	BusinessName varchar(100),
	BusinessNo varchar(20),
	BusinessAdd varchar(100),
	PRIMARY KEY (BusinessName)
);

CREATE TABLE CivilStatus (
	FullName varchar(100),
	Spouse varchar(100),
	CivilStatus varchar(20),
	PRIMARY KEY (FullName, Spouse),
	FOREIGN KEY (FullName) REFERENCES PersonInformation(FullName) ON DELETE CASCADE,
	FOREIGN KEY (Spouse) REFERENCES FamilyRelations(Spouse) ON DELETE CASCADE
);

CREATE TABLE DLAF (
	AppNo int,
	PDID int REFERENCES PersonalDetails(PDID) ON DELETE CASCADE,
	TIN varchar(12) REFERENCES PersonInformation(TIN) ON DELETE CASCADE,
	LicenseNo varchar(13) REFERENCES ResAndConds(LicenseNo) ON DELETE CASCADE,
	TOA varchar(100),
	TLA varchar(100),
	DSA varchar(100),
	EA varchar(100),
	BusinessName varchar(100) REFERENCES Businesses(BusinessName) ON DELETE CASCADE,
	PrevName varchar(100),
	PRIMARY KEY (AppNo),
	FOREIGN KEY (TIN, PDID) REFERENCES FamilyRelations(TIN, PDID) ON DELETE CASCADE
);