//612cf80f848ef918d41727e568cbe06ae658b106
//sonar-scanner.bat -D"sonar.projectKey=Practica6" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=612cf80f848ef918d41727e568cbe06ae658b106"

const request =  require('supertest')
const server =  require('../src/index')
describe('Get Endpoints', () => {
    it('Get', async (done) => {
        const res =  await  request(server)
        .get('/')
        .send({
            userId:  1,
            title:  'test is cool',
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('nome');
        done();
    })
})
afterAll(async  done  => {
    // close server conection
    server.close();
    done();
});