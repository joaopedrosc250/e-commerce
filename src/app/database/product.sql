CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    type VARCHAR(255),
    url VARCHAR(255),
    size VARCHAR(10),
    image VARCHAR(255),
    price DECIMAL(10, 2)
  );
  
  INSERT INTO products (title, type, url, size, image, price) VALUES
    ("t-shirt-1", "best", "/pageproduct", "G", "/t-shirt-1.jpg", 54.95),
    ("t-shirt-2", "best", "/pageproduct", "G", "/t-shirt-2.jpg", 60.95),
    ("t-shirt-3", "best", "/pageproduct", "G", "/t-shirt-3.jpg", 54.95),
    ("t-shrit-4", "best", "/pageproduct", "G", "/cap-1.jpg", 60.95),
    ("t-shirt-1", "tshirt", "/pageproduct", "G", "/t-shirt-1.jpg", 54.95),
    ("t-shrit-2", "tshirt", "/pageproduct", "G", "/t-shirt-2.jpg", 60.95),
    ("t-shirt-3", "tshirt", "/pageproduct", "M", "/t-shirt-3.jpg", 67.8),
    ("t-shirt-4", "tshirt", "/pageproduct", "G", "/t-shirt-1.jpg", 150),
    ("t-shirt-5", "tshirt", "/pageproduct", "G", "/t-shirt-1.jpg", 130.99),
    ("t-shirt-6", "tshirt", "/pageproduct", "G", "/t-shirt-3.jpg", 130),
    ("t-shirt-7", "tshirt", "/pageproduct", "G", "/t-shirt-2.jpg", 155),
    ("t-shirt-8", "tshirt", "/pageproduct", "G", "/t-shirt-3.jpg", 130),
    ("t-shirt-9", "tshirt", "/pageproduct", "G", "/t-shirt-2.jpg", 125),
    ("t-shirt-10", "tshirt", "/pageproduct", "G", "/t-shirt-2.jpg", 125),
    ("t-shirt-11", "tshirt", "/pageproduct", "G", "/t-shirt-3.jpg", 130),
    ("t-shirt-12", "tshirt", "/pageproduct", "G", "/t-shirt-3.jpg", 129.9),
    ("t-shirt-13", "tshirt", "/pageproduct", "G", "/t-shirt-2.jpg", 137),
    ("cap-1", "cap", "/pageproduct", "/cap-1.jpg", 69.9),
    ("cap-2", "cap", "/pageproduct", "/cap-1.jpg", 74.95),
    ("cap-3", "cap", "/pageproduct", "/cap-1.jpg", 89.99),
    ("cap-4", "cap", "/pageproduct", "/cap-1.jpg", 67.8);
  