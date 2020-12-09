DROP DATABASE IF EXISTS `vacation`;
CREATE DATABASE `vacation`; 
USE `vacation`;

CREATE TABLE `Vacations` (
  `vacation_id` text(500) NOT NULL,
  `description` text(500) NOT NULL,
  `destination` varchar(50) NOT NULL, 
  `images` text(500) NOT NULL, 
  `from_date` DATE NOT NULL,
  `to_date` DATE NOT NULL, 
  `price` int(11) NOT NULL,
    PRIMARY KEY (`vacation_id`(768))
);


INSERT INTO `Vacations` VALUES('0c3988f2-f8fb-443f-8747-75eec0ecc92c', 'nice vication to italy', 'italy', 'https://media.timeout.com/images/105237804/image.jpg', '2020-11-18', '2020-11-20', '800');
INSERT INTO `Vacations` VALUES('25883fb5-8fe3-4b9c-a05a-74e5c3cdb396', 'russia suprised me', 'russia', 'https://www.state.gov/wp-content/uploads/2018/11/Russia-2499x1406.jpg', '2020-11-27', '2020-11-28', '370');
INSERT INTO `Vacations` VALUES('5ad890cb-0006-493d-a660-5a9e4e0dc20c', 'you must see hungary', 'hungary', 'https://www.eaie.org/.imaging/mte/eaie-theme/full-width-large/dam/images/blog-images/2018/1000x667_Ferencz_Hungary.jpg/jcr:content/1000x667_Ferencz_Hungary.jpg', '2021-01-10', '2021-01-21', '460');
INSERT INTO `Vacations` VALUES('a5bb4dd3-beb7-42da-878b-e05ee6978b03', 'do you want to find yourself in paradise', 'greece', 'https://cdn.kimkim.com/files/a/content_articles/featured_photos/0e3794a0b646d638627afb626bf9ee46f472feb1/big-0bb2a2bea537c680f141d40cb484d888.jpg', '2020-11-30', '2020-12-04', '680');
INSERT INTO `Vacations` VALUES('a8a736b9-397c-4c48-ae3a-b0b6d590145b', 'germany at night', 'germany', 'https://assets.kpmg/content/dam/kpmg/xx/images/2019/04/berlin-skyline-with-spree-river-at-sunset-germany.jpg/jcr:content/renditions/original', '2020-11-28', '2020-11-29', '560');
INSERT INTO `Vacations` VALUES('e5eb76d7-cb86-45ab-8212-31b59ee672a6', 'the beauty of paris', 'paris', 'https://www.uwa.edu.au/study/-/media/UWAFS/Teasers/ImgBtn-French-studies.jpg', '2020-11-30', '2020-12-06', '999');
INSERT INTO `Vacations` VALUES('fedf324c-ccd9-45c3-884b-4c798e6ee9e0', 'the snow and beauty of swiss', 'swiss', 'https://bitcoinist.com/wp-content/uploads/2020/01/shutterstock_1176449773.jpg', '2020-11-26', '2020-11-28', '850');
INSERT INTO `Vacations` VALUES('ecc3e430-477e-4ef8-b19b-b82c76e8703a', 'kolololo morocco', 'morocco', 'https://i2-prod.hulldailymail.co.uk/news/uk-world-news/article4367519.ece/ALTERNATES/s615/0_kyriacos-georgiou-CMmgfHQiYsc-unsplash.jpg', '2020-12-19', '2020-12-21', '360');

CREATE TABLE `Users` (
  `id` text(500) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL, 
  `user_name` varchar(50) NOT NULL, 
  `password` text(500) NOT NULL,
  `role` varchar(10) NOT NULL, 
    PRIMARY KEY (`id`(768))
);

-- insert admin
INSERT INTO `Users` VALUES ('000fc588-936b-49d3-ac13-e206cc251781', 'sofia' , 'rubenchik' ,'sofi','$2b$10$8vHyRylbYmy1A6tJAvkTDutlZvbMrXysbvCX7wyreHyr6b0NWpMby','admin');
INSERT INTO `Users` VALUES ('28256a4e-7256-444d-b13c-d73823b56815', 'orel', 'asper', 'osper', '$2b$10$xcj99z6x.24rNk2lrrgrtOEMd182VMA9DPBZar6Gun6k5J.gvD2pu', 'user');
INSERT INTO `Users` VALUES ('ba01200a-9b00-4b3d-a184-1ee3b29a5293', 'anton', 'rubenchik', 'anton', '$2b$10$MX8Up996MXLCYcI/phmx9egS9gtvzEDfyNImFG3A3FF9aiAvtUE1i', 'user');
INSERT INTO `Users` VALUES ('d6948a57-d224-4237-a75b-613188f6759a', 'igor', 'rubenchik', 'igor', '$2b$10$xGDvCmHBtuRuvLMiX9LYN.nJTvDZZVZZ.6Mzd4ECpfQl9XFJvr9XS', 'user');
INSERT INTO `Users` VALUES ('eb662df6-1a1d-46e8-9e9b-468734fd270c', 'natalia', 'rubenchik', 'natali', '$2b$10$l5g3Fq3x73NS81lbkW0XmuxwYafaHPmHnHRLva66Tivc91bboJUHi', 'user');


CREATE TABLE `followers` (
  `follower_vacation_id` text(500) NOT NULL,
  `user_name` varchar(50) NOT NULL
);

INSERT INTO `followers` VALUES ('5ad890cb-0006-493d-a660-5a9e4e0dc20c', 'osper');
INSERT INTO `followers` VALUES ('25883fb5-8fe3-4b9c-a05a-74e5c3cdb396', 'osper');
INSERT INTO `followers` VALUES ('a8a736b9-397c-4c48-ae3a-b0b6d590145b', 'osper');
INSERT INTO `followers` VALUES ('5ad890cb-0006-493d-a660-5a9e4e0dc20c', 'igor');
INSERT INTO `followers` VALUES ('e5eb76d7-cb86-45ab-8212-31b59ee672a6', 'igor');
INSERT INTO `followers` VALUES ('fedf324c-ccd9-45c3-884b-4c798e6ee9e0', 'igor');
INSERT INTO `followers` VALUES ('5ad890cb-0006-493d-a660-5a9e4e0dc20c', 'natali');
INSERT INTO `followers` VALUES ('a5bb4dd3-beb7-42da-878b-e05ee6978b03', 'natali');
INSERT INTO `followers` VALUES ('25883fb5-8fe3-4b9c-a05a-74e5c3cdb396', 'natali');
INSERT INTO `followers` VALUES ('5ad890cb-0006-493d-a660-5a9e4e0dc20c', 'anton');
INSERT INTO `followers` VALUES ('a8a736b9-397c-4c48-ae3a-b0b6d590145b', 'anton');
INSERT INTO `followers` VALUES ('fedf324c-ccd9-45c3-884b-4c798e6ee9e0', 'anton');