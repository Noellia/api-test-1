const {
    request,
    Sinon
} = require('..');

const {Contact} = include('models');

describe('api/contacts', () => {
    // Descripcion de lo que estamos haciendo
    let modelFunction;
    let modelFunction2;
    let mockResult;

    beforeEach(() => {
        // se ejecuta antes de cada it << iteracion
        mockResult = [
            {
                id: '00000000-0000-0000-0000-000000000000',
                first_name: 'fake-first_name'
            },
            {
                id: '00000000-0000-0000-0000-000000000001',
                first_name: 'fake-first_name-2'
            }
        ];
        modelFunction = Sinon.stub(Contact, 'find').returns(Promise.resolve(mockResult));
        modelFunction2 = Sinon.stub(Contact, 'countDocuments').returns(Promise.resolve([{count: 110}]));
    });

    afterEach(() => {
        // se ejecuta dsp de cada it << iteracion
        Contact.find.restore();
        Contact.countDocuments.restore();
    });

    // Lo bueno
    // Lo Malo
    // Y Lo Prohibido -- Roles | <<<  >>>
    it('contacts response', done => {
        request
            .get('/api/contacts')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            /**
             *  Esto es tu body que se envia para post / put
                .send(JSON.stringify({
                    username: 'fake-user',
                    password: 'fake-password'
                }))
             */
            .expect(200)
            .end((err, res) => {
                const result = modelFunction.calledWith();
                const result2 = modelFunction2.calledWith();

                res.body.should.have.property('contacts').which.is.an.Array();
                res.body.should.have.property('total').which.is.a.Number();
                res.body.should.have.property('limit').which.is.a.Number();
                res.body.cars.should.be.deepEqual(mockResult);
                console.log(result, result2);
                done();
            });
    });

});
