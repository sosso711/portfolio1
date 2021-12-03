CREATE TABLE Projects ( 
    id INT NOT NULL AUTO_INCREMENT,
    mainPictureUrl TEXT NOT NULL,
    title VARCHAR (200) NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (id));

    INSERT INTO Projects (id, mainPictureUrl, title, description) VALUES (1, 'https://imagizer.imageshack.com/img922/8820/TbGbHA.jpg', 'Projet 1', 'Notre 1er projet'),(2,'https://www.echosciences-grenoble.fr/uploads/article/image/attachment/1005418938/xl_lens-1209823_1920.jpg ', 'Projet 2','Notre 2e projet'); 