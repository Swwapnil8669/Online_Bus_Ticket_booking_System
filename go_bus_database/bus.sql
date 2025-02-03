-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: bus
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking_tb`
--

DROP TABLE IF EXISTS `booking_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_tb` (
  `booking_id` bigint NOT NULL AUTO_INCREMENT,
  `date_of_booking` date DEFAULT NULL,
  `payment_status` bit(1) DEFAULT NULL,
  `time_of_booking` time DEFAULT NULL,
  `total_amount` double DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `cust_id` bigint DEFAULT NULL,
  `schedule_id` bigint DEFAULT NULL,
  `booking_status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `FKk2cw8d5qlp9phvkqy6k6yaw8f` (`cust_id`),
  KEY `FKoxgqkix127bq5jr1ydqkee9qg` (`schedule_id`),
  CONSTRAINT `FKk2cw8d5qlp9phvkqy6k6yaw8f` FOREIGN KEY (`cust_id`) REFERENCES `customer_tb` (`id`),
  CONSTRAINT `FKoxgqkix127bq5jr1ydqkee9qg` FOREIGN KEY (`schedule_id`) REFERENCES `bus_schedule_tb` (`schedule_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_tb`
--

LOCK TABLES `booking_tb` WRITE;
/*!40000 ALTER TABLE `booking_tb` DISABLE KEYS */;
INSERT INTO `booking_tb` VALUES (1,'2023-04-03',_binary '','09:00:00',900,'1001',1,3,NULL);
/*!40000 ALTER TABLE `booking_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking_travellers`
--

DROP TABLE IF EXISTS `booking_travellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_travellers` (
  `booking_booking_id` bigint NOT NULL,
  `traveller_gender` int DEFAULT NULL,
  `age` int DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `seat_no` int DEFAULT NULL,
  KEY `FKhmmqqf5wyl4mbk5b4c8j1htvm` (`booking_booking_id`),
  CONSTRAINT `FKhmmqqf5wyl4mbk5b4c8j1htvm` FOREIGN KEY (`booking_booking_id`) REFERENCES `booking_tb` (`booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_travellers`
--

LOCK TABLES `booking_travellers` WRITE;
/*!40000 ALTER TABLE `booking_travellers` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking_travellers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bus_amenities_tb`
--

DROP TABLE IF EXISTS `bus_amenities_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bus_amenities_tb` (
  `bus_amenities_id` bigint NOT NULL AUTO_INCREMENT,
  `charging_port` bit(1) DEFAULT NULL,
  `complimentary_food` bit(1) DEFAULT NULL,
  `sheets_pillow` bit(1) DEFAULT NULL,
  `toilet` bit(1) DEFAULT NULL,
  `wifi` bit(1) DEFAULT NULL,
  PRIMARY KEY (`bus_amenities_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bus_amenities_tb`
--

LOCK TABLES `bus_amenities_tb` WRITE;
/*!40000 ALTER TABLE `bus_amenities_tb` DISABLE KEYS */;
INSERT INTO `bus_amenities_tb` VALUES (2,_binary '',_binary '',_binary '',_binary '\0',_binary '\0');
/*!40000 ALTER TABLE `bus_amenities_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bus_schedule_tb`
--

DROP TABLE IF EXISTS `bus_schedule_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bus_schedule_tb` (
  `schedule_id` bigint NOT NULL AUTO_INCREMENT,
  `arrival_date` date DEFAULT NULL,
  `arrival_time` time DEFAULT NULL,
  `available_seats` int DEFAULT NULL,
  `boarding_point` varchar(255) DEFAULT NULL,
  `bus_fare` double DEFAULT NULL,
  `departure_date` date DEFAULT NULL,
  `departure_time` time DEFAULT NULL,
  `destination_city` varchar(255) DEFAULT NULL,
  `destination_point` varchar(255) DEFAULT NULL,
  `source_city` varchar(255) DEFAULT NULL,
  `rto_reg_no` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`schedule_id`),
  KEY `FKsvnb8uuacdr9jp9tetkk5f55` (`rto_reg_no`),
  CONSTRAINT `FKsvnb8uuacdr9jp9tetkk5f55` FOREIGN KEY (`rto_reg_no`) REFERENCES `bus_tb` (`rto_reg_no`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bus_schedule_tb`
--

LOCK TABLES `bus_schedule_tb` WRITE;
/*!40000 ALTER TABLE `bus_schedule_tb` DISABLE KEYS */;
INSERT INTO `bus_schedule_tb` VALUES (1,'2023-03-31','10:30:00',NULL,NULL,1700,'2023-03-30','09:30:00','nashik','nashik dwaraka road','pune','MH15CB1121'),(3,'2023-04-03','10:30:00',NULL,NULL,1000,'2023-04-02','09:30:00','nashik','nashik dwaraka road','pune','MH15CB1121'),(5,'2023-09-03','10:30:00',NULL,'tcg hinjewadi phase 2,near grand tammana',1500,'2023-08-02','09:30:00','mumbai','Mumbai thane road','pune','MH15CB1121');
/*!40000 ALTER TABLE `bus_schedule_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bus_tb`
--

DROP TABLE IF EXISTS `bus_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bus_tb` (
  `rto_reg_no` varchar(10) NOT NULL,
  `is_ac` bit(1) DEFAULT NULL,
  `is_sleeper` bit(1) DEFAULT NULL,
  `seat_capacity` int DEFAULT NULL,
  `bus_amenity_no` bigint DEFAULT NULL,
  `operator_id` bigint DEFAULT NULL,
  PRIMARY KEY (`rto_reg_no`),
  KEY `FK61wvquv81o6hv81y9meib98ne` (`bus_amenity_no`),
  KEY `FKdkeojyb0sgw6dy3s3pd3gt6ja` (`operator_id`),
  CONSTRAINT `FK61wvquv81o6hv81y9meib98ne` FOREIGN KEY (`bus_amenity_no`) REFERENCES `bus_amenities_tb` (`bus_amenities_id`),
  CONSTRAINT `FKdkeojyb0sgw6dy3s3pd3gt6ja` FOREIGN KEY (`operator_id`) REFERENCES `operator_tb` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bus_tb`
--

LOCK TABLES `bus_tb` WRITE;
/*!40000 ALTER TABLE `bus_tb` DISABLE KEYS */;
INSERT INTO `bus_tb` VALUES ('MH15CB1121',_binary '\0',_binary '\0',45,2,2345);
/*!40000 ALTER TABLE `bus_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_tb`
--

DROP TABLE IF EXISTS `customer_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_tb` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cust_dob` date DEFAULT NULL,
  `cust_email` varchar(255) DEFAULT NULL,
  `cust_first_name` varchar(50) DEFAULT NULL,
  `cust_gender` int DEFAULT NULL,
  `cust_last_name` varchar(50) DEFAULT NULL,
  `cust_password` varchar(16) DEFAULT NULL,
  `cust_phone` varchar(255) DEFAULT NULL,
  `is_admin` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_tb`
--

LOCK TABLES `customer_tb` WRITE;
/*!40000 ALTER TABLE `customer_tb` DISABLE KEYS */;
INSERT INTO `customer_tb` VALUES (1,'2000-09-09','cakshay001@gmail.com','aksh',1,'chopade','1234','9999999999',_binary '\0'),(2,'1998-10-09','amol@gmail.com','amol',1,'bagul','1234','7350389978',_binary ''),(3,'2015-02-18','Surabh@gmail.com','Surabh',1,'wagmare','saurabh1234','123456789',_binary '\0');
/*!40000 ALTER TABLE `customer_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operator_business_location_tb`
--

DROP TABLE IF EXISTS `operator_business_location_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operator_business_location_tb` (
  `operator_id` bigint NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `pin_code` int DEFAULT NULL,
  KEY `FK4u55odo3b7yixreukxxi23ytm` (`operator_id`),
  CONSTRAINT `FK4u55odo3b7yixreukxxi23ytm` FOREIGN KEY (`operator_id`) REFERENCES `operator_tb` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operator_business_location_tb`
--

LOCK TABLES `operator_business_location_tb` WRITE;
/*!40000 ALTER TABLE `operator_business_location_tb` DISABLE KEYS */;
/*!40000 ALTER TABLE `operator_business_location_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operator_tb`
--

DROP TABLE IF EXISTS `operator_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operator_tb` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company_name` varchar(50) DEFAULT NULL,
  `company_reg_no` varchar(255) DEFAULT NULL,
  `is_approved` bit(1) DEFAULT NULL,
  `operator_email` varchar(255) DEFAULT NULL,
  `operator_password` varchar(255) DEFAULT NULL,
  `operator_phone` varchar(255) DEFAULT NULL,
  `operator_uid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2356 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operator_tb`
--

LOCK TABLES `operator_tb` WRITE;
/*!40000 ALTER TABLE `operator_tb` DISABLE KEYS */;
INSERT INTO `operator_tb` VALUES (2345,'Indian Bus Service','REGIND123456',_binary '','indianbusservice@example.com','indianbusservicepassword','+91-9876543210','INDIANBUS1234'),(2347,'Vistara','REGVIS345678',_binary '\0','vistara@example.com','vistarapassword','+91-7654321098','VISTARA9012'),(2348,'Ola Cabs','REGOLA901234',_binary '\0','ola@example.com','olapassword','+91-6543210987','OLA5678'),(2349,'Uber India','REGUBE567890',_binary '\0','uber@example.com','uberpassword','+91-5432109876','UBER1234'),(2350,'GoAir','REGGOA456789',_binary '\0','goair@example.com','goairpassword','+91-4321098765','GOAIR9012'),(2351,'RedBus','REGRED123456',_binary '\0','redbus@example.com','redbuspassword','+91-3210987654','REDBUS5678'),(2352,'AbhiBus','REGABI789012',_binary '\0','abhibus@example.com','abhibuspassword','+91-2109876543','ABHIBUS1234'),(2353,'Orange Travels','REGORA345678',_binary '\0','orangetravels@example.com','orangetravelspassword','+91-1098765432','ORANGETRAVELS9012'),(2354,'Kaveri Travels','REGKAV567890',_binary '\0','kaveritravels@example.com','kaveritravelspassword','+91-0987654321','KAVERITRAVELS5678'),(2355,'paras','12345678MHR',_binary '\0','bagulmohit194@gmail.com','12345ADD','07350389978','12345AMOL');
/*!40000 ALTER TABLE `operator_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat_allocation_tb`
--

DROP TABLE IF EXISTS `seat_allocation_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat_allocation_tb` (
  `bus_schedule_schedule_id` bigint NOT NULL,
  `is_booked` bit(1) DEFAULT NULL,
  `seat_no` int DEFAULT NULL,
  `traveller_gender` int DEFAULT NULL,
  KEY `FKjx648ca8yqya778cwf0blvu04` (`bus_schedule_schedule_id`),
  CONSTRAINT `FKjx648ca8yqya778cwf0blvu04` FOREIGN KEY (`bus_schedule_schedule_id`) REFERENCES `bus_schedule_tb` (`schedule_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat_allocation_tb`
--

LOCK TABLES `seat_allocation_tb` WRITE;
/*!40000 ALTER TABLE `seat_allocation_tb` DISABLE KEYS */;
INSERT INTO `seat_allocation_tb` VALUES (1,_binary '\0',0,3),(1,_binary '',1,1),(1,_binary '',2,1),(1,_binary '\0',3,3),(1,_binary '',4,1),(1,_binary '',5,2),(1,_binary '\0',6,3),(1,_binary '\0',7,3),(1,_binary '\0',8,3),(1,_binary '\0',9,3),(1,_binary '',10,2),(1,_binary '\0',11,3),(1,_binary '\0',12,3),(1,_binary '\0',13,3),(1,_binary '\0',14,3),(1,_binary '',15,2),(1,_binary '\0',16,3),(1,_binary '\0',17,3),(1,_binary '\0',18,3),(1,_binary '\0',19,3),(1,_binary '\0',20,3),(1,_binary '\0',21,3),(1,_binary '\0',22,3),(1,_binary '\0',23,3),(1,_binary '\0',24,3),(1,_binary '\0',25,3),(1,_binary '\0',26,3),(1,_binary '\0',27,3),(1,_binary '\0',28,3),(1,_binary '\0',29,3),(1,_binary '\0',30,3),(1,_binary '\0',31,3),(1,_binary '\0',32,3),(1,_binary '\0',33,3),(1,_binary '\0',34,3),(1,_binary '\0',35,3),(1,_binary '\0',36,3),(1,_binary '\0',37,3),(1,_binary '\0',38,3),(1,_binary '\0',39,3),(1,_binary '\0',40,3),(1,_binary '\0',41,3),(1,_binary '\0',42,3),(1,_binary '\0',43,3),(1,_binary '',44,1),(3,_binary '\0',0,3),(3,_binary '\0',1,3),(3,_binary '\0',2,3),(3,_binary '\0',3,3),(3,_binary '\0',4,3),(3,_binary '\0',5,3),(3,_binary '\0',6,3),(3,_binary '\0',7,3),(3,_binary '\0',8,3),(3,_binary '\0',9,3),(3,_binary '\0',10,3),(3,_binary '\0',11,3),(3,_binary '\0',12,3),(3,_binary '\0',13,3),(3,_binary '\0',14,3),(3,_binary '\0',15,3),(3,_binary '\0',16,3),(3,_binary '\0',17,3),(3,_binary '\0',18,3),(3,_binary '\0',19,3),(3,_binary '\0',20,3),(3,_binary '\0',21,3),(3,_binary '\0',22,3),(3,_binary '\0',23,3),(3,_binary '\0',24,3),(3,_binary '\0',25,3),(3,_binary '\0',26,3),(3,_binary '\0',27,3),(3,_binary '\0',28,3),(3,_binary '\0',29,3),(3,_binary '\0',30,3),(3,_binary '\0',31,3),(3,_binary '\0',32,3),(3,_binary '\0',33,3),(3,_binary '\0',34,3),(3,_binary '\0',35,3),(3,_binary '\0',36,3),(3,_binary '\0',37,3),(3,_binary '\0',38,3),(3,_binary '\0',39,3),(3,_binary '\0',40,3),(3,_binary '\0',41,3),(3,_binary '\0',42,3),(3,_binary '\0',43,3),(3,_binary '\0',44,3),(5,_binary '\0',0,3),(5,_binary '\0',1,3),(5,_binary '\0',2,3),(5,_binary '\0',3,3),(5,_binary '\0',4,3),(5,_binary '\0',5,3),(5,_binary '\0',6,3),(5,_binary '\0',7,3),(5,_binary '\0',8,3),(5,_binary '\0',9,3),(5,_binary '\0',10,3),(5,_binary '\0',11,3),(5,_binary '\0',12,3),(5,_binary '\0',13,3),(5,_binary '\0',14,3),(5,_binary '\0',15,3),(5,_binary '\0',16,3),(5,_binary '\0',17,3),(5,_binary '\0',18,3),(5,_binary '\0',19,3),(5,_binary '\0',20,3),(5,_binary '\0',21,3),(5,_binary '\0',22,3),(5,_binary '\0',23,3),(5,_binary '\0',24,3),(5,_binary '\0',25,3),(5,_binary '\0',26,3),(5,_binary '\0',27,3),(5,_binary '\0',28,3),(5,_binary '\0',29,3),(5,_binary '\0',30,3),(5,_binary '\0',31,3),(5,_binary '\0',32,3),(5,_binary '\0',33,3),(5,_binary '\0',34,3),(5,_binary '\0',35,3),(5,_binary '\0',36,3),(5,_binary '\0',37,3),(5,_binary '\0',38,3),(5,_binary '\0',39,3),(5,_binary '\0',40,3),(5,_binary '\0',41,3),(5,_binary '\0',42,3),(5,_binary '\0',43,3),(5,_binary '\0',44,3);
/*!40000 ALTER TABLE `seat_allocation_tb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-01 11:28:05
