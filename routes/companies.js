const express = require('express')
const router = express.Router()
const authentication = require('../middleware/authentication');
const isAdmin = require('../middleware/is-admin');


const {
    createCompany,
    getAllCompanies,
    getCompany,
    updateCompany,
    deleteCompany,
    approveCompany,
    getUnapprovedCompanies,
} = require('../controllers/companies')

router.route('/').post(createCompany).get(getAllCompanies).delete(authentication, deleteCompany).patch(authentication, updateCompany)
router.route('/approves').get(authentication, isAdmin, getUnapprovedCompanies)
router.route('/:companyID').get(getCompany).post(authentication, isAdmin, approveCompany)


module.exports = router
