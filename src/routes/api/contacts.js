const {ContactsController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(ContactsController.fetch)
        .post(ContactsController.create);

    return router;
};
