CREATE TABLE ResAndConds
(
	LicenseNo varchar(13),
	ResCode varchar(8),
	CondCode varchar(5),
	PRIMARY KEY (LicenseNo)
);

CREATE TABLE PersonalDetails
(
	PDID int,
	BloodType varchar(3),
	Hair varchar(10),
	Eyes varchar(10),
	Complexion varchar(10),
	Height numeric(5,2),
	Weight numeric(5,2),
	Built varchar(20),
	isOrganDonor boolean,
	PRIMARY KEY (PDID)
);

CREATE TABLE FamilyRelations
(
	TIN char(12),
	PDID int,
	Father varchar(100),
	Mother varchar(100),
	Spouse varchar(100),
	CivilStatus varchar(20),
	PRIMARY KEY (TIN, PDID)
);


CREATE TABLE PersonInformation
(
	TIN char(12),
	FullName varchar(100),
	PresAdd varchar(100),
	Gender varchar(2),
	BirthDate date,
	TCPNo varchar(100),
	Birthplace varchar(100),
	Nationality varchar(50),
	PRIMARY KEY (TIN)
);

CREATE TABLE Businesses
(
	BusinessName varchar(100),
	BusinessNo varchar(20),
	BusinessAdd varchar(100),
	PRIMARY KEY (BusinessName)
);


CREATE TABLE DLAF
(
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

CREATE VIEW peoplejobs
as
			(
		SELECT fullname, licenseno, businessname, businessno
		FROM businesses NATURAL JOIN dlaf NATURAL JOIN personinformation  
		)
	UNION
		(
		SELECT fullname, licenseno, 'N/A', 'N/A'
		FROM dlaf NATURAL JOIN personinformation 
		WHERE businessname is null
		);