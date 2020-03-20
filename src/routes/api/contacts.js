const {ContactsController} = include('controllers');

module.exports = router => {
    router.get('/', ContactsController.fetch);
    return router;
};
