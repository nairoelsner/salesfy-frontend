const db = require('../../db/db')

const getManagerGoal = async (managerId) => {
    const queryResponse = await db.queryDatabase(`SELECT goal FROM manager WHERE id = ${managerId};`);
    const managerGoal = queryResponse[0].goal;
    return managerGoal;
}

const searchManagerSellers = async (managerId) => {
    const queryResponse = await db.queryDatabase(`SELECT s.id AS 'key',
                                                    u.name AS 'name',
                                                    m.goal AS 'goal',
                                                    COALESCE(SUM(p.price), 0) AS 'salesValue',
                                                    ROUND((COALESCE(SUM(p.price), 0) / m.goal) * 100, 2) AS 'progressPercent',
                                                    ROUND(COALESCE(SUM(p.price), 0) * 0.1, 2) AS 'commission'
                                                FROM seller s
                                                JOIN user u ON s.id = u.id
                                                JOIN manager m ON s.managerId = m.id
                                                LEFT JOIN purchase p ON s.id = p.sellerId
                                                WHERE s.managerId = ${managerId}
                                                GROUP BY s.id, u.name, m.goal;`);
    const sellers = queryResponse;
    return sellers;
}

const getManagerSalesValue = async (managerId) => {
    const queryResponse = await db.queryDatabase(`SELECT COALESCE(SUM(p.price), 0) AS 'salesValue'
                                                FROM seller s
                                                LEFT JOIN purchase p ON s.id = p.sellerId
                                                WHERE s.managerId = ${managerId}
                                                GROUP BY s.managerId;`);
    const managerSalesValue = queryResponse[0].salesValue;
    return managerSalesValue
}


const getManagersBestSeller = async (managerId) => {
    const queryResponse = await db.queryDatabase(`SELECT s.id AS 'id',
                                                    u.name AS 'name',
                                                    COALESCE(SUM(p.price), 0) AS 'salesValue'
                                                FROM seller s
                                                JOIN user u ON s.id = u.id
                                                LEFT JOIN purchase p ON s.id = p.sellerId
                                                WHERE s.managerId = ${managerId}
                                                GROUP BY s.id, u.name
                                                ORDER BY COALESCE(SUM(p.price), 0) DESC
                                                LIMIT 1;`)
    const bestSeller = queryResponse[0];
    return bestSeller;
}

const getManagersWorstSeller = async (managerId) => {
    const queryResponse = await db.queryDatabase(`SELECT 
                                                    s.id AS 'id',
                                                    u.name AS 'name',
                                                    COALESCE(SUM(p.price), 0) AS 'salesValue'
                                                FROM seller s
                                                JOIN user u ON s.id = u.id
                                                LEFT JOIN purchase p ON s.id = p.sellerId
                                                WHERE s.managerId = ${managerId}
                                                GROUP BY s.id, u.name
                                                ORDER BY COALESCE(SUM(p.price), 0) ASC
                                                LIMIT 1;`);

    const worstSeller = queryResponse[0];
    return worstSeller;
}

const getManagerPurchases = async (managerId) => {
    const queryResponse = await db.queryDatabase(`SELECT 
                                                    purchase.id AS 'key',
                                                    user.name AS 'seller',
                                                    purchase.price AS 'purchaseValue',
                                                    DATE_FORMAT(purchase.createdAt, '%d/%m/%Y') AS 'purchaseDate'
                                                FROM purchase
                                                JOIN seller ON purchase.sellerId = seller.id
                                                JOIN user ON seller.id = user.id
                                                WHERE seller.managerId = ${managerId}
                                                ORDER BY purchase.createdAt DESC;`);
    const purchases = queryResponse;
    return purchases
}

module.exports = { getManagerGoal, searchManagerSellers, getManagerSalesValue, getManagersBestSeller, getManagersWorstSeller, getManagerPurchases }