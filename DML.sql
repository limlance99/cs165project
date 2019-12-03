INSERT INTO ResAndConds VALUES
('123-45-123123', '10010000', '00000'),
('123-45-123124', '10001000', '01010'),
('123-45-123125', '10001001', '11110'),
('123-45-123126', '10001001', '11110'),
('123-45-123127', '10001001', '11110');

INSERT INTO PersonalDetails VALUES
(1, 'B+', 'Black', 'Brown', 'Light', 175, 90.7, 'Heavy', false),
(2, 'AB+', 'Gray', 'Black', 'Dark', 175, 65.3, 'Medium', true),
(3, 'O-', 'Blonde', 'Gray', 'Fair', 162.5, 47.1, 'Light', false),
(4, 'O-', 'Blonde', 'Gray', 'Fair', 162.5, 47.1, 'Light', false),
(5, 'O-', 'Blonde', 'Gray', 'Fair', 162.5, 47.1, 'Light', false);


INSERT INTO FamilyRelations VALUES
('123456789321', 1, 'Edward Lim', 'Marilou Lim', 'Gal Gadot Lim', 'Married'),
('123456789322', 2, 'Mannix Bata', 'Heidi Bata', 'Bea John Legend Bata', 'Separated'),
('123456789323', 3, 'Nixon Co', 'Maribel Co', 'John Michael Jackson Co', 'Widow'),
('123456789324', 4, 'Za Warudo', 'Chips Ahoy', 'Chris Pratt', 'Separated'),
('123456789325', 5, 'Boy Bawang', 'Lord Patawad', null, 'Single');


INSERT INTO PersonInformation VALUES 
('123456789321', 'Lance Andrew Bata Lim', '15 Palm Drive, The Bellevue, Barangay Apolonio Samson, Quezon City','M', '1999-07-19', '3676785', 'Quezon City', 'Filipino'),
('123456789322', 'Hans Martin Lee Bata', '17 Palm Drive, The Bellevue, Barangay Apolonio Samson, Quezon City','M', '2002-05-03', '87000', 'Manila', 'Filipino'),
('123456789323', 'Samantha Nicolle Bata Co', '14 Whitefield, White Plains, Quezon City','F', '2001-12-05', '98888', 'California', 'USA'),
('123456789324', 'Robert Downey Smith Jr.', 'Hollywood, California','M', '1960-12-05', '123123', 'California', 'USA'),
('123456789325', 'Robert Downey Smith Sr.', 'Hollywood, California','M', '1920-12-05', '123123', 'California', 'USA');


INSERT INTO Businesses VALUES 
('Jollibee', '87000', '14 Xavier Street, Greenhills, San Juan'),
('McDonalds', '86236', '5 P. Velasquez Street, UP Diliman, Quezon City'),
('Chowking', '98888', '7 Whoa Street, Barangay Luhmao, Manila');

INSERT INTO DLAF VALUES 
(1, 1, '123456789321', '123-45-123123', 'Renewal', 'Non-Professional', 'Driving School', 'High School', null, null),
(2, 2, '123456789322', '123-45-123124', 'New', 'Student Permit', 'Licensed Private Person', 'Elementary', 'McDonalds', null),
(3, 3, '123456789323', '123-45-123125', 'New', 'Non-Professional', 'Driving School', 'High School', 'Jollibee', 'Sam Smith'),
(4, 4, '123456789324', '123-45-123126', 'New', 'Non-Professional', 'Driving School', 'High School', 'Jollibee', 'Willy Wonka'),
(5, 5, '123456789325', '123-45-123127', 'New', 'Non-Professional', 'Driving School', 'High School', 'Chowking', 'Scarlet Witch');