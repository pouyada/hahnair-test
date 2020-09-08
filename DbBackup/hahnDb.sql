CREATE DATABASE hahn_test CHARACTER SET utf8 COLLATE utf8_general_ci;
USE hahn_test;

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `id` varchar(255) NOT NULL,
  `url` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `service_email` varchar(128) DEFAULT NULL,
  `service_phone` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `terms` varchar(50) DEFAULT NULL,
  `bill_country` varchar(4) DEFAULT NULL,
  `country_of_residence` varchar(4) DEFAULT NULL,
  `activation_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`id`);
COMMIT;
