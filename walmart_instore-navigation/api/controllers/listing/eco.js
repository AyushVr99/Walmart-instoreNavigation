import ecoListing from '../../models/Products/eco.js';
import { errorHandler } from '../../utils/error.js';

export const addItem = async(req,res,next) => {
    if(!req.body) return errorHandler(404, 'Item not found');
    try {
        const listing = await ecoListing.create(req.body);
        return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
}