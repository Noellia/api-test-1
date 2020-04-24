// eslint-disable-next-line lodash/import-scope
const {
    isEmpty, head
} = require('lodash');

const {Car} = include('models');

class CarController {
    static async fetch(req, res, next) {
        try {
            const {
                skip, ...filter
            } = req.query;
            //const [{count}] = await Country.countDocuments();
            const cars = await Car.find({
                skip,
                filter
            });

            res.send({
                cars,
                total: 100,
                limit: parseInt(process.env.PAGE_SIZE)
            });
        } catch(err) {
            next(err);
        }
    }

    static async create(req, res, next) {
        try {
            const result = await Car.insertOne(req.body);
            res.send({
                success: true,
                result
            });
        } catch (err) {
            next(err);
        }
    }

    static async fetchOne(req, res, next){
        try{
            const car = await Car.findById(req.params.id);

            if(isEmpty(car)){
                return res.status(404).send({code: 'CAR_NOT_FOUND'});

            }

            res.send(head(car));
        }catch(err){
            next(err);
        }
    }

    static async save(req, res, next) {
        try {
            const result = await Car.updateOne({id: req.params.id}, req.body);
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
            const result = await Car.deletedOne(req.params.id);
            res.send({
                success: true,
                result

            });

        } catch(err){
            next(err);
        }
    }
}

module.exports = CarController;
