const {CarController} = include('controllers');

module.exports = router => {
    router.get('/', CarController.fetch);
    return router;
};
