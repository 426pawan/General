CREATE TABLE `User` (
  `UserID` integer PRIMARY KEY,
  `Name` varchar(255),
  `Role` varchar(255),
  `Email` varchar(255),
  `Phone` varchar(255),
  `Status` varchar(255)
);

CREATE TABLE `AuditLog` (
  `AuditID` integer PRIMARY KEY,
  `UserID` integer,
  `Action` varchar(255),
  `Resource` varchar(255),
  `Timestamp` timestamp
);

CREATE TABLE `Citizen` (
  `CitizenID` integer PRIMARY KEY,
  `Name` varchar(255),
  `DOB` date,
  `Gender` varchar(255),
  `Address` text,
  `ContactInfo` varchar(255),
  `Status` varchar(255)
);

CREATE TABLE `CitizenDocument` (
  `DocumentID` integer PRIMARY KEY,
  `CitizenID` integer,
  `DocType` varchar(255),
  `FileURI` varchar(255),
  `UploadedDate` date,
  `VerificationStatus` varchar(255)
);

CREATE TABLE `HousingApplication` (
  `ApplicationID` integer PRIMARY KEY,
  `CitizenID` integer,
  `ProgramID` integer,
  `SubmittedDate` date,
  `Status` varchar(255)
);

CREATE TABLE `EligibilityCheck` (
  `CheckID` integer PRIMARY KEY,
  `ApplicationID` integer,
  `OfficerID` integer,
  `Result` varchar(255),
  `Date` date,
  `Notes` text
);

CREATE TABLE `HousingUnit` (
  `UnitID` integer PRIMARY KEY,
  `Location` varchar(255),
  `Type` varchar(255),
  `Capacity` integer,
  `Status` varchar(255)
);

CREATE TABLE `Allocation` (
  `AllocationID` integer PRIMARY KEY,
  `ApplicationID` integer,
  `UnitID` integer,
  `OfficerID` integer,
  `Date` date,
  `Status` varchar(255)
);

CREATE TABLE `HousingProject` (
  `ProjectID` integer PRIMARY KEY,
  `Title` varchar(255),
  `Description` text,
  `StartDate` date,
  `EndDate` date,
  `Budget` decimal,
  `Status` varchar(255)
);

CREATE TABLE `Resource` (
  `ResourceID` integer PRIMARY KEY,
  `ProjectID` integer,
  `Type` varchar(255),
  `Quantity` integer,
  `Status` varchar(255)
);

CREATE TABLE `ComplianceRecord` (
  `ComplianceID` integer PRIMARY KEY,
  `EntityID` integer,
  `Type` varchar(255),
  `Result` varchar(255),
  `Date` date,
  `Notes` text
);

CREATE TABLE `Audit` (
  `AuditID` integer PRIMARY KEY,
  `OfficerID` integer,
  `Scope` varchar(255),
  `Findings` text,
  `Date` date,
  `Status` varchar(255)
);

CREATE TABLE `Report` (
  `ReportID` integer PRIMARY KEY,
  `Scope` varchar(255),
  `Metrics` text,
  `GeneratedDate` date
);

CREATE TABLE `Notification` (
  `NotificationID` integer PRIMARY KEY,
  `UserID` integer,
  `EntityID` integer,
  `Message` text,
  `Category` varchar(255),
  `Status` varchar(255),
  `CreatedDate` date
);

ALTER TABLE `AuditLog` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`UserID`);

ALTER TABLE `CitizenDocument` ADD FOREIGN KEY (`CitizenID`) REFERENCES `Citizen` (`CitizenID`);

ALTER TABLE `HousingApplication` ADD FOREIGN KEY (`CitizenID`) REFERENCES `Citizen` (`CitizenID`);

ALTER TABLE `EligibilityCheck` ADD FOREIGN KEY (`ApplicationID`) REFERENCES `HousingApplication` (`ApplicationID`);

ALTER TABLE `Allocation` ADD FOREIGN KEY (`ApplicationID`) REFERENCES `HousingApplication` (`ApplicationID`);

ALTER TABLE `Allocation` ADD FOREIGN KEY (`UnitID`) REFERENCES `HousingUnit` (`UnitID`);

ALTER TABLE `Resource` ADD FOREIGN KEY (`ProjectID`) REFERENCES `HousingProject` (`ProjectID`);

ALTER TABLE `EligibilityCheck` ADD FOREIGN KEY (`OfficerID`) REFERENCES `User` (`UserID`);

ALTER TABLE `Allocation` ADD FOREIGN KEY (`OfficerID`) REFERENCES `User` (`UserID`);

ALTER TABLE `Audit` ADD FOREIGN KEY (`OfficerID`) REFERENCES `User` (`UserID`);

ALTER TABLE `Notification` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`UserID`);
