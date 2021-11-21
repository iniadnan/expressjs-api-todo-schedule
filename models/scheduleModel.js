// IMPORT CONNECTION
import DB from '../configs/database.js'

// GET ALL SCHEDULE
export const MODGetAllSchedule = (result) => {
    DB.query("SELECT * FROM schedule", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}

// GET SINGLE SCHEDULE
export const MODGetSingleSchedule = (slug, result) => {
    DB.query("SELECT * FROM schedule WHERE slug = ?", [slug], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    })
}

// DELETE SCHEDULE
export const MODDeleteProductById = (id, result) => {
    DB.query("DELETE FROM schedule WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}