CREATE TABLE Projects ( 
    id INT NOT NULL AUTO_INCREMENT,
    mainPictureUrl TEXT NOT NULL,
    title VARCHAR (200) NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (id));

    INSERT INTO Projects (id, mainPictureUrl, title, description) VALUES (1, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.referenseo.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fimage-attractive-960x540.jpg&imgrefurl=https%3A%2F%2Fwww.referenseo.com%2Fblog%2F10-banques-images-gratuites-libre-droits%2F&tbnid=7dmpjfGEZoXSVM&vet=12ahUKEwi-s5Lz8sL0AhUE3hoKHX8rCpsQMygAegUIARDMAQ..i&docid=6NiCcD1_F05BmM&w=960&h=540&itg=1&q=image%20libre%20de%20droit&ved=2ahUKEwi-s5Lz8sL0AhUE3hoKHX8rCpsQMygAegUIARDMAQ', 'Projet 1', 'Notre 1er projet'),(2,'https://www.echosciences-grenoble.fr/uploads/article/image/attachment/1005418938/xl_lens-1209823_1920.jpg ', 'Projet 2','Notre 2e projet'); 