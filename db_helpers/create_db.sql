DROP DATABASE IF EXISTS `cafe_antonia`;
create database IF NOT exists `cafe_antonia`;
USE `cafe_antonia`;

CREATE TABLE `users` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(255),
   `email` VARCHAR(255),
   `birth_date` DATE,
   `adress` VARCHAR(255),
   `pass` VARCHAR(255),
   `image` VARCHAR(255),
   `product_interest_id` INT,
   `profile_id` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(255),
   `description` VARCHAR(255),
   `image` VARCHAR(255),
   `price` INT,
   `offer` TINYINT,
   `category_id` INT,
   `presentation_id` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `profile_user` (
   `id` INT AUTO_INCREMENT,
   `profile` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT AUTO_INCREMENT,
   `category` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `presentations` (
   `id` INT,
   `quantity` INT,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_924198b9-f6a5-43d1-b163-f762cb17b32f` FOREIGN KEY (`profile_id`) REFERENCES `profile_user`(`id`)  ;

ALTER TABLE `users` ADD CONSTRAINT `FK_f62d63fd-1921-4ebd-84c9-0c24bfa0bfc0` FOREIGN KEY (`product_interest_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_634c73db-5876-4f19-bb3f-60b7189766ae` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_9696e775-162f-4157-9870-56342a8f965b` FOREIGN KEY (`presentation_id`) REFERENCES `presentations`(`id`)  ;

