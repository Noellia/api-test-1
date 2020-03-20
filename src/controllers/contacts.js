const {Contact} = include('models');

class ContactsController {
    static async fetch(req, res, next) {
        try {
            const contacts = await Contact.find(req.query);

            res.send(contacts);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = ContactsController;
