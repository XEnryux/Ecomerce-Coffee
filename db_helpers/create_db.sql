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

/* presentacion del producto */
INSERT INTO cafe_antonia.presentations (id, quantity) VALUES
(1, 500),(2, 1000),(3, 20), (4, 50), (5,200);

INSERT INTO cafe_antonia.categories (Id, category) VALUES
(1,"Premium"),(2,"Molido"),(3,"Grano"),(4,"Saquitos"),(5, "Chocolate");

INSERT INTO cafe_antonia.profile_user (id, profile) VALUES
(1,"Seller"),(2,"Buyer"); 

INSERT INTO cafe_antonia.products (id, name, description, image, price, offer, category_id, presentation_id) VALUES
(1, "Café Sensaciones Torrado Suave", "El café ideal para disfrutar todos los días.", "1A-cafe.webp", 1065, 1, 2, 1),
(2, "Café Sensaciones Torrado Intenso", "El café ideal para disfrutar todos los días.", "2A-cafe.jpg", 1150, 1, 2, 1),
(3, "Café Blanco", "Sabor intenso, aroma fuerte y persistente. Ideal para los amantes del café.", "3A-cafe.jpg", 3242.28, 1, 3, 1),
(4, "Café Sensaciones saquitos", "Café tostado con azúcar blanco molido", "4A-cafe.jpg", 640, 0, 4, 3),
(5, "Café Molido Intenso saquitos", "El café ideal para la oficina", "5A-cafe.jpg", 530, 0, 4, 3),
(6, "Café Franja Blanca", "Blend de Colombia y Brasil con un tostado natural tipo suizo y un torrado español. Sabor fino, fuerte y natural con un aroma fino, pronunciado y fuerte. Ideal para tomar solo o con leche.", "6B-cafe.jpg", 5820, 0, 1, 2),
(7, "Fluminense", "Blend de Brasil con un tostado natural tipo suizo y un torrado español. Sabor y aroma fuerte. Ideal para tomar solo o con leche.", "7A-cafe.jpg", 5310, 0, 1, 2),
(8, "Express", "Blend de Brasil con un tostado natural tipo suizo. Sabor delicado, profundo y pronunciado con un aroma fuerte y persistente. Para tomar solo o con leche.", "8A-cafe.jpg", 9400, 0, 1, 2),
(9, "Descafeinado", "Blend Colombiano con un tostado natural tipo italiano. Sabor delicado y suave, con un aroma fino y persistente. Para tomar solo o con leche.", "9A-cafe.jpg", 5310, 0, 1, 2),
(10, "Cinta Azul", "Blend de Colombia y Brasil con un tostado natural tipo suizo y torrado español. Sabor delicado con un aroma persistente. Ideal para tomar con leche.", "10A-cafe.jpg", 6280, 0, 1, 2),
(11, "Noir", "Blend de Brasil con un torrado tipo español. Sabor y aroma muy fuerte. Para tomar con leche.", "11A-cafe.jpg", 5500, 0, 1, 2),
(12, "Seleccion", "Blend Colombiano y Brasileño, con un tostado natural tipo suizo. Sabor delicado y suave con un aroma profundo, fino y persistente. Ideal para tomar solo.", "12A-cafe.jpg", 10000, 0, 1, 2),
(13, "Barra de chocolate 60% cacao", "Barra de chocolate al 60% de Cacao. Nace de las montañas Andinas de Calda, con su aroma que brinda una experiencia inigualable.", "13-chocolate.jpg", 510, 1, 5, 5),
(14, "Barra de chocolate 70% cacao", "Chocolate negro semiamargo con 70% de Cacao, con las caracteristicas del sabor único de Calda", "14-chocolate.jpg", 800, 1, 5, 5),
(15, "Chocolate 90% Cacao", "Chocolate Santo Aroma semiamargo 90% de cacao", "15-chocolate.jpg", 900, 1, 5, 5);

INSERT INTO cafe_antonia.users (id, name, email, birth_date, adress, pass, image, product_interest_id, profile_id) VALUES  
(1, "Mariana Elstner", "elstnermariana@gmail.com", "1986-10-05", "Camargo 351 PB B", "$2a$10$HTxonUeMcmDtXAH7S..HgOKGjLAsL7RRXCaDzDma77.vUmgz9m1mC", "default-image.jpg", 5, 1),
(2, "Juana", "juana@Juliana.com", "2000-10-05", "Camargo 351 PB B", "$2a$10$5RSarI7vWTnBWQteMofS.upq8J5/VCIn4bjX1Rje3yi3VKfJQORdq", "user-image-default.png", 2, 2),
(3, "David", "djaramm10@gmail.com", "2022-10-05", "CALLE 5A # 33-40", "$2a$10$ubbSyaQcm8m1QH0MocTlme3Nbug54u9IPLcbyeETTEZEzaP61M5p6", "1665622760797-img.jpg", 1, 2),
(4, "Usuario", "usuario@usuario.com", "1992-11-30", "usuario 123", "$2a$10$HTxonUeMcmDtXAH7S..HgOKGjLAsL7RRXCaDzDma77.vUmgz9m1mC", "1666713445226-img.jpeg", 5, 1)

