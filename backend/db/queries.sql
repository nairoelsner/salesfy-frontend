-- Realizar uma venda
INSERT INTO pedido (vendedor_id)
VALUES ([ID_DO_VENDEDOR]);

SET @pedido_id = LAST_INSERT_ID();

INSERT INTO pedido_item (quantidade, pedido_id, produto_id)
VALUES
    ([QUANTIDADE_1], @pedido_id, [ID_PRODUTO_1]),
    ([QUANTIDADE_2], @pedido_id, [ID_PRODUTO_2]);

UPDATE pedido
SET preco = (
    SELECT SUM(p.preco * pi.quantidade)
    FROM pedido_item pi
    JOIN produto p ON pi.produto_id = p.id
    WHERE pi.pedido_id = @pedido_id
)
WHERE id = @pedido_id;


-- Criar um kit
INSERT INTO kit (nome)
VALUES ('Kit Médio');

SET @kit_id = LAST_INSERT_ID();

INSERT INTO kit_item (quantidade, produto_id, kit_id)
VALUES
    (1, 2, @kit_id),
    (3, 1, @kit_id);

UPDATE kit
SET preco = (
    SELECT SUM(p.preco * ki.quantidade)
    FROM kit_item ki
    JOIN produto p ON ki.produto_id = p.id
    WHERE ki.kit_id = @kit_id
)
WHERE id = @kit_id;