const {Contact} = include('models');

class ContactsController {
    static async fetch(req, res, next) {
        try {
            const contacts = await Contact.find(req.query);
            const total = await Contact.countDocuments();
            console.log(total);
            res.send({
                contacts,
                total: 174,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }
}

module.exports = ContactsController;
