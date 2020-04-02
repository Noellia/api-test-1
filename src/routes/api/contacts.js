const {ContactsController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(ContactsController.fetch)
        .post(ContactsController.create);
    router.route('/:id')
        .put(ContactsController.save)
        .delete(ContactsController.delete)
        .get(ContactsController.fetchOne);

    return router;
};
