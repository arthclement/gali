-- MySQL Script generated by MySQL Workbench
-- ven. 13 avril 2018 17:35:18 CEST
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema gali
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gali
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gali` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `gali` ;

-- -----------------------------------------------------
-- Table `gali`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gali`.`user` (
  `iduser` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `create_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `active` TINYINT(1) NULL,
  `email_token` VARCHAR(255) NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `iduser_UNIQUE` (`iduser` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `gali`.`userinfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gali`.`userinfo` (
  `iduser` INT UNSIGNED NOT NULL,
  `firstname` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `birthdate` DATETIME NOT NULL,
  `gender` VARCHAR(1) NOT NULL,
  `street` VARCHAR(255) BINARY NULL,
  `postcode` VARCHAR(255) NULL,
  `city` VARCHAR(255) NULL,
  `street_number` VARCHAR(255) NULL,
  `country` VARCHAR(255) NULL,
  `phone` VARCHAR(255) NULL,
  PRIMARY KEY (`iduser`),
  CONSTRAINT `userTouserinfo`
    FOREIGN KEY (`iduser`)
    REFERENCES `gali`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `gali`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gali`.`role` (
  `idrole` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(255) NULL,
  PRIMARY KEY (`idrole`),
  UNIQUE INDEX `idrole_UNIQUE` (`idrole` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `gali`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gali`.`user_role` (
  `iduser_role` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `iduser` INT UNSIGNED NOT NULL,
  `idrole` INT UNSIGNED NOT NULL,
  INDEX `role_idx` (`iduser` ASC, `idrole` ASC),
  PRIMARY KEY (`iduser_role`),
  UNIQUE INDEX `iduser_role_UNIQUE` (`iduser_role` ASC),
  CONSTRAINT `userTouser_role`
    FOREIGN KEY (`iduser`)
    REFERENCES `gali`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `role`
    FOREIGN KEY (`idrole`)
    REFERENCES `gali`.`role` (`idrole`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `gali`.`appointment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gali`.`appointment` (
  `idappointment` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idcustomer` INT UNSIGNED NOT NULL,
  `idpro` INT UNSIGNED NULL,
  `date` DATETIME NULL,
  `description` TEXT NULL,
  `duration` TIME NULL,
  `approved` TINYINT(1) NULL,
  PRIMARY KEY (`idappointment`),
  INDEX `customer_idx` (`idcustomer` ASC),
  INDEX `pro_idx` (`idpro` ASC),
  UNIQUE INDEX `idappointment_UNIQUE` (`idappointment` ASC),
  UNIQUE INDEX `idcustomer_UNIQUE` (`idcustomer` ASC),
  UNIQUE INDEX `idpro_UNIQUE` (`idpro` ASC),
  CONSTRAINT `customerToappointment`
    FOREIGN KEY (`idcustomer`)
    REFERENCES `gali`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `proToappointment`
    FOREIGN KEY (`idpro`)
    REFERENCES `gali`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `gali`.`unavailability`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gali`.`unavailability` (
  `idunavailability` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `iduser` INT UNSIGNED NOT NULL,
  `start_time` DATETIME NULL,
  `end_time` DATETIME NULL,
  `description` TEXT NULL,
  PRIMARY KEY (`idunavailability`),
  UNIQUE INDEX `idunavailability_UNIQUE` (`idunavailability` ASC),
  INDEX `user_idx` (`iduser` ASC),
  UNIQUE INDEX `iduser_UNIQUE` (`iduser` ASC),
  CONSTRAINT `userTounavailability`
    FOREIGN KEY (`iduser`)
    REFERENCES `gali`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
