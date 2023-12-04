createPurchase = 
`
INSERT INTO purchase (sellerId)
VALUES (1); -- Substitua 1 pelo ID do vendedor

SET @last_order_id = LAST_INSERT_ID();

INSERT INTO purchaseItem (qty, orderId, productId)
VALUES (1, @last_order_id, 1); -- Substitua 1 pela quantidade e 1 pelo ID do produto

UPDATE purchase
SET price = (
    SELECT SUM(p.price * pi.qty)
    FROM product p
    JOIN purchaseItem pi ON p.id = pi.productId
    WHERE pi.orderId = @last_order_id
)
WHERE id = @last_order_id;`