const db = require('../../db/db');
const adminServices = require('../services/adminServices');

const getResume = async (managerId) => {
    const [salesValue, managerGoal, managersBestSeller, managersWorstSeller] = await Promise.all([
        adminServices.getManagerSalesValue(managerId),
        adminServices.getManagerGoal(managerId),
        adminServices.getManagersBestSeller(managerId),
        adminServices.getManagersWorstSeller(managerId)
    ]);
    return {salesValue, managerGoal, bestSeller: managersBestSeller.name, worstSeller: managersWorstSeller.name};
};

const getSellersTable = async (managerId) => {
    const sellers = await adminServices.searchManagerSellers(managerId);
    return sellers;
}

const getPurchasesTable = async (managerId) => {
    const purchases = await adminServices.getManagerPurchases(managerId);
    return purchases;
}


module.exports = { getResume, getSellersTable, getPurchasesTable };