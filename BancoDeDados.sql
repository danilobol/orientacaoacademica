CREATE TABLE `Usuário` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(255) NOT NULL,
	`sobrenome` VARCHAR(255) NOT NULL,
	`CPF` VARCHAR(255) NOT NULL,
	`senha` varchar(500) NOT NULL,
	`matricula` varchar(255) NOT NULL,
	`endereco` TEXT(500) NOT NULL,
	`sexo` varchar(255) NOT NULL,
	`data_nascimento` DATETIME(255) NOT NULL,
	`id_rank` INT(500) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Rank` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Aluno` (
	`id_usuario` TEXT NOT NULL,
	`curso` VARCHAR(255) NOT NULL,
	`renda` FLOAT NOT NULL,
	`deficiencias` TEXT NOT NULL
);

CREATE TABLE `Orientações` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`data` DATETIME NOT NULL AUTO_INCREMENT,
	`semestre` varchar(255) NOT NULL,
	`id_disciplinas` INT(255) NOT NULL,
	`id_aluno` INT(255) NOT NULL,
	`id_orientador` INT(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Disciplinas` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Usuário` ADD CONSTRAINT `Usuário_fk0` FOREIGN KEY (`id_rank`) REFERENCES `Rank`(`id`);

ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_fk0` FOREIGN KEY (`id_usuario`) REFERENCES `Usuário`(`id`);

ALTER TABLE `Orientações` ADD CONSTRAINT `Orientações_fk0` FOREIGN KEY (`id_disciplinas`) REFERENCES `Disciplinas`(`id`);

ALTER TABLE `Orientações` ADD CONSTRAINT `Orientações_fk1` FOREIGN KEY (`id_aluno`) REFERENCES `Aluno`(`id_usuario`);

ALTER TABLE `Orientações` ADD CONSTRAINT `Orientações_fk2` FOREIGN KEY (`id_orientador`) REFERENCES `Usuário`(`id`);
