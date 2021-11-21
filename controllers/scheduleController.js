// IMPORT * MODEL
import { MODGetAllSchedule, MODGetSingleSchedule, MODDeleteProductById } from '../models/scheduleModel.js'

// GET ALL SCHEDULE
export const CONGetAllSchedule = (req, res) => {
    MODGetAllSchedule((err, results) => {
        if(err) {
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

// GET SINGE SCHEDULE
export const CONGetSingleSchedule = (req, res) => {
    const slug = req.params.slug;
    MODGetSingleSchedule(slug, (err, results) => {
        if(err) {
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

// DELETE SCHEDULE
export const CONDeleteSchedule = (req, res) => {
    const id = req.params.id;
    MODDeleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}