// eslint-disable-next-line lodash/import-scope
const {
    isEmpty, head
} = require('lodash');

const {Contact} = include('models');

class ContactsController {
    static async fetch(req, res, next) {
        try {
            const {
                skip, ...filter
            } = req.query;
            //const [{count}] = await Country.countDocuments();
            const contacts = await Contact.find({
                skip,
                filter
            });
            res.send({
                contacts,
                total: 100,
                limit: parseInt(process.env.PAGE_SIZE)
            });
        } catch(err) {
            next(err);
        }
    }
    static async create(req, res, next) {
        try {
            const result = await Contact.insertOne(req.body);
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
            const contact = await Contact.findById(req.params.id);

            if(isEmpty(contact)){
                return res.status(404).send({code: 'CONTACT_NOT_FOUND'});

            }

            res.send(head(contact));
        }catch(err){
            next(err);
        }
    }

    static async save(req, res, next) {
        try {
            const result = await Contact.updateOne({id: req.params.id}, req.body);
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
            const result = await Contact.deletedOne({id: req.params.id});
            res.send({
                success: true,
                result

            });

        } catch(err){
            next(err);
        }
    }

}

module.exports = ContactsController;
