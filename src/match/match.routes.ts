import { BaseHttpController, controller, httpGet, queryParam, httpPost, requestBody, httpPut } from 'inversify-express-utils';
import { MatchDAO, Match } from '../model/model';

@controller('/api/matches')
export class MatchRoutes extends BaseHttpController {

    @httpGet('/:id')
    async byId(
        @queryParam('id') id: number
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
        @queryParam('id') id: number,
        @requestBody() data: Match
    ) {
        return await MatchDAO.findByIdAndUpdate(id, data);
    }
}