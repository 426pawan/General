-- ============================================
-- HOUSINGAID CENTRAL DATABASE
-- Affordable Housing & Urban Shelter System
-- ============================================


-- ============================================
-- USER TABLE
-- ============================================

CREATE TABLE User (
    userId INT PRIMARY KEY AUTO_INCREMENT,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    role VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    status VARCHAR(20)
);


-- ============================================
-- AUDIT LOG TABLE
-- ============================================

CREATE TABLE AuditLog (
    auditId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL,
    action VARCHAR(100),
    resource VARCHAR(100),
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (userId) REFERENCES User(userId)
);


-- ============================================
-- CITIZEN TABLE
-- ============================================

CREATE TABLE Citizen (
    citizenId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    name VARCHAR(100),
    dob DATE,
    gender VARCHAR(20),
    address TEXT,
    contactInfo VARCHAR(100),
    status VARCHAR(20),

    FOREIGN KEY (userId) REFERENCES User(userId)
);


-- ============================================
-- CITIZEN DOCUMENT TABLE
-- ============================================

CREATE TABLE CitizenDocument (
    documentId INT PRIMARY KEY AUTO_INCREMENT,
    citizenId INT NOT NULL,
    docType VARCHAR(50),
    fileUri VARCHAR(255),
    uploadedDate DATETIME,
    verificationStatus VARCHAR(50),

    FOREIGN KEY (citizenId) REFERENCES Citizen(citizenId)
);


-- ============================================
-- HOUSING PROJECT TABLE
-- ============================================

CREATE TABLE HousingProject (
    projectId INT PRIMARY KEY AUTO_INCREMENT,
    numOfHouses INT,
    title VARCHAR(200),
    description TEXT,
    startDate DATE,
    endDate DATE,
    budget DECIMAL(12,2),
    status VARCHAR(20)
);


-- ============================================
-- RESOURCE TABLE
-- ============================================

CREATE TABLE Resource (
    resourceId INT PRIMARY KEY AUTO_INCREMENT,
    projectId INT NOT NULL,
    type VARCHAR(50),
    quantity INT,
    status VARCHAR(20),

    FOREIGN KEY (projectId) REFERENCES HousingProject(projectId)
);


-- ============================================
-- HOUSING UNIT TABLE
-- ============================================

CREATE TABLE HousingUnit (
    housingUnitId INT PRIMARY KEY AUTO_INCREMENT,
    projectId INT,
    location VARCHAR(200),
    type VARCHAR(50),
    capacity INT,
    status VARCHAR(20),

    FOREIGN KEY (projectId) REFERENCES HousingProject(projectId)
);


-- ============================================
-- HOUSING APPLICATION TABLE
-- ============================================

CREATE TABLE HousingApplication (
    applicationId INT PRIMARY KEY AUTO_INCREMENT,
    citizenId INT NOT NULL,
    programId VARCHAR(50),
    submittedDate DATE,
    status VARCHAR(50),

    FOREIGN KEY (citizenId) REFERENCES Citizen(citizenId)
);


-- ============================================
-- ELIGIBILITY CHECK TABLE
-- ============================================

CREATE TABLE EligibilityCheck (
    checkId INT PRIMARY KEY AUTO_INCREMENT,
    applicationId INT NOT NULL,
    officerId INT NOT NULL,
    result VARCHAR(50),
    date DATE,
    notes TEXT,

    FOREIGN KEY (applicationId) REFERENCES HousingApplication(applicationId),
    FOREIGN KEY (officerId) REFERENCES User(userId)
);


-- ============================================
-- ALLOCATION TABLE
-- ============================================

CREATE TABLE Allocation (
    allocationId INT PRIMARY KEY AUTO_INCREMENT,
    checkId INT NOT NULL,
    housingUnitId INT NOT NULL,
    officerId INT NOT NULL,
    date DATE,
    status VARCHAR(50),

    FOREIGN KEY (checkId) REFERENCES EligibilityCheck(checkId),
    FOREIGN KEY (housingUnitId) REFERENCES HousingUnit(housingUnitId),
    FOREIGN KEY (officerId) REFERENCES User(userId)
);


-- ============================================
-- COMPLIANCE RECORD TABLE
-- ============================================

CREATE TABLE ComplianceRecord (
    complianceId INT PRIMARY KEY AUTO_INCREMENT,
    entityId INT,
    type VARCHAR(50),
    result VARCHAR(50),
    date DATE,
    notes TEXT
);


-- ============================================
-- AUDIT TABLE
-- ============================================

CREATE TABLE Audit (
    auditId INT PRIMARY KEY AUTO_INCREMENT,
    officerId INT,
    scope VARCHAR(200),
    findings TEXT,
    date DATE,
    status VARCHAR(50),

    FOREIGN KEY (officerId) REFERENCES User(userId)
);


-- ============================================
-- REPORT TABLE
-- ============================================

CREATE TABLE Report (
    reportId INT PRIMARY KEY AUTO_INCREMENT,
    scope VARCHAR(200),
    metrics TEXT,
    generatedDate DATE
);


-- ============================================
-- NOTIFICATION TABLE
-- ============================================

CREATE TABLE Notification (
    notificationId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL,
    entityId INT,
    message TEXT,
    category VARCHAR(50),
    status VARCHAR(50),
    createdDate DATETIME,

    FOREIGN KEY (userId) REFERENCES User(userId)
);
