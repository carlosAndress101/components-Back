import { Router } from 'express';
import * as controller from "../controllers/appController.js"

const router = Router();


/**Post methods*/
router.route('/newComponents').post(controller.createComponent)
router.route('/newCategory').post(controller.createCategory)

/**Get methods*/
router.route('/components').get(controller.findComponent)
router.route('/components/:id').get(controller.findOneComponent)

/**Patch methods*/
router.route('/components/:id').put(controller.updateComponent)

/**Delete methods*/
router.route('/components/:id').delete(controller.deleteComponent)

export default router