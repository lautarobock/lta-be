import { BaseHttpController, controller, httpGet, queryParam, httpPost, requestBody, httpPut, requestParam } from 'inversify-express-utils';
import { MatchDAO, Match } from '../model/model';

@controller('/api/matches')
export class MatchRoutes extends BaseHttpController {

    @httpGet('/:id')
    async byId(
        @requestParam('id') id: string
    ) {
        return await MatchDAO.findById(id);
    }

    @httpGet('/')
    async all() {
        return await MatchDAO.find();
    }

    @httpPost('/')
    async create(
        @requestBody() data: Match
    ) {
        return await MatchDAO.create(data);
    }

    @httpPut('/:id')
    async update(
        @requestParam('id') id: string,
        @requestBody() data: Match
    ) {
        return await MatchDAO.findByIdAndUpdate(id, data);
    }
}