// IMPORT EXPRESS
import express from 'express'

// IMPORT * CONTROLLER
import { CONGetAllSchedule, CONGetSingleSchedule, CONDeleteSchedule } from '../controllers/scheduleController.js'

// INIT EXPRESS ROUTER
const ROUSchedule = express.Router();

// GET ALL SCHEDULE
ROUSchedule.get('/', CONGetAllSchedule);
 
// GET SINGLE SCHEDULE
ROUSchedule.get('/:slug', CONGetSingleSchedule);

// DELETE SCHEDULE
ROUSchedule.delete('/:id', CONDeleteSchedule);

// export default router
export default ROUSchedule;