const {InstrumentsController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(InstrumentsController.fetch)
        .post(InstrumentsController.create);
    router.route('/:id')
        .put(InstrumentsController.save)
        .delete(InstrumentsController.delete)
        .get(InstrumentsController.fetchOne);

    return router;
};
