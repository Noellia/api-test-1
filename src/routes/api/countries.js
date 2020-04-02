const {CountriesController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(CountriesController.fetch);
    router.route('/:id')
        .put(CountriesController.save)
        .delete(CountriesController.delete)
        .get(CountriesController.fetchOne);

    return router;
};
