const {Car} = include('models');

class CarController {
    static async fetch(req, res, next) {
        try {
            const cars = await Car.find(req.query);
            const total = await Car.countDocuments();
            console.log(total);
            res.send({
                cars,
                total: 100,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }
}

module.exports = CarController;
