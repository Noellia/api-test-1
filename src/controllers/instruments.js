// eslint-disable-next-line lodash/import-scope
const {
    isEmpty, head
} = require('lodash');

const {Instrument} = include('models');

class InstrumentsController {
    static async fetch(req, res, next) {
        try {
            const instruments = await Instrument.find(req.query);
            const total = await Instrument.countDocuments();
            console.log(total);
            res.send({
                instruments,
                total: 129,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }

    static async create(req, res, next) {
        try {
            const result = await Instrument.insertOne(req.body);
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
            const instrument = await Instrument.findById(req.params.id);

            if(isEmpty(instrument)){
                return res.status(404).send({code: 'INSTRUMENT_NOT_FOUND'});

            }

            res.send(head(instrument));
        }catch(err){
            next(err);
        }
    }

    static async save(req, res, next) {
        try {
            const result = await Instrument.updateOne({id: req.params.id}, req.body);
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
            const result = await Instrument.deletedOne({id: req.params.id});
            res.send({
                success: true,
                result

            });

        } catch(err){
            next(err);
        }
    }

}

module.exports = InstrumentsController;
