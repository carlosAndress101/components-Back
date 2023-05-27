const express = require("express")
const appController = require("../controllers/appController.js")

const router = express.Router();


/**Post methods*/
router.post('/newComponents', appController.createComponent)
router.post('/newCategory', appController.createCategory)

/**Get methods*/
router.get('/components', appController.findComponent)
router.get('/components/:id', appController.findOneComponent)

/**Patch methods*/
router.put('/components/:id', appController.updateComponent)

/**Delete methods*/
router.delete('/components/:id', appController.deleteComponent)


module.exports = router;