import { BaseHttpController, controller, httpGet, queryParam, httpPost, requestBody, httpPut } from 'inversify-express-utils';
import { UserDAO, User } from '../model/model';

@controller('/api/users')
export class UserRoutes extends BaseHttpController {

    @httpGet('/:id')
    async byId(
        @queryParam('id') id: number
    ) {
        return await UserDAO.findById(id);
    }

    @httpGet('/')
    async all() {
        return await UserDAO.find();
    }

    @httpPost('/')
    async create(
        @requestBody() data: User
    ) {
        return await UserDAO.create(data);
    }

    @httpPut('/:id')
    async update(
        @queryParam('id') id: number,
        @requestBody() data: User
    ) {
        return await UserDAO.findByIdAndUpdate(id, data);
    }
}