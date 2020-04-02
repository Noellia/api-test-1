const {CarController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(CarController.fetch)
        .post(CarController.create);
    router.route('/:id')
        .put(CarController.save)
        .delete(CarController.delete)
        .get(CarController.fetchOne);

    return router;
};
