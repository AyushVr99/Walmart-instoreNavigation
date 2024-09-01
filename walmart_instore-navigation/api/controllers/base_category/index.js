import categoryLocation from '../../models/base_category.js';
import groceriesListing from '../../models/Products/groceries.js';
import electronicsListing from '../../models/Products/electronics.js';
import toysListing from '../../models/Products/toys.js';
import clothesListing from '../../models/Products/clothes.js';
import ecoListing from '../../models/Products/eco.js';
import homeappListing from '../../models/Products/homeapp.js';
import gameslisting from '../../models/Products/videogames.js';
import { errorHandler } from '../../utils/error.js';


export const addCategoryLoc = async(req,res,next) => {
    if(!req.body) return errorHandler(404, 'Location not found');
    try {
        const listing = await categoryLocation.create(req.body);
        return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
}

export const directSearch = async (req, res, next) => {
    const { query } = req.query;
    const models = [groceriesListing, electronicsListing, toysListing, clothesListing, ecoListing, homeappListing, gameslisting];
    try {
      const results = await Promise.all(
        models.map(async (model) => {
          return model.find({
            name: { $regex: query, $options: 'i' }
          });
        })
      );
      const allResults = results.flat();
  
      if (allResults.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'No products found',
        });
      }
      res.status(200).json(allResults);
      
    } catch (error) {
      next(error);
    }
  };

  export const getLocation = async(req,res,next) => {
    const { query } = req.query;
    if(!query) return errorHandler(404, 'No query found');
    try {

      const results = await categoryLocation.find(
        {name: { $regex: query, $options: 'i' }}
      )

      if (results.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'No data found',
        });
      }
      res.status(200).json(results);
    } catch (error) {
        next(error);
    }
}


  