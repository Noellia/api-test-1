const {Instrument} = include('models');

class InstrumentsController {
    static async fetch(req, res, next) {
        try {
            const instruments = await Instrument.find(req.query);
            const total = await Instrument.countDocuments();
            console.log(total);
            res.send({
                instruments,
                total: 100,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }
}

module.exports = InstrumentsController;
