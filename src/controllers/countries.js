// eslint-disable-next-line lodash/import-scope
const {
    isEmpty, head
} = require('lodash');

const {Country} = include('models');

class CountriesController {
    static async fetch(req, res, next) {
        try {
            const countries = await Country.find(req.query);
            const [{count}] = await Country.countDocuments();
            res.send({
                countries,
                total: count || 174,
                limit: parseInt(process.env.PAGE_SIZE)
            });
        } catch(err) {
            next(err);
        }
    }

    static async fetchOne(req, res, next){
        try{
            const country = await Country.findById(req.params.id);

            if(isEmpty(country)){
                return res.status(404).send({code: 'COUNTRY_NOT_FOUND'});

            }

            res.send(head(country));
        }catch(err){
            next(err);
        }
    }

    static async save(req, res, next) {
        try {
            const result = await Country.updateOne({id: req.params.id}, req.body);
            res.send({
                success: true,
                result
            });
        } catch (err) {
            next(err);
        }
    }

    static async delete(req, res, next){
        try{
            const result = await Country.deletedOne({id: req.params.id});
            res.send({
                success: true,
                result

            });

        } catch(err){
            next(err);
        }
    }

}

module.exports = CountriesController;
