import { prop, getModelForClass } from '@typegoose/typegoose';

export class User {

    @prop()
    public nick: string;
}

export enum MatchState {
    New = 'new',
    Playing = 'playing',
    Done = 'done'
}

export class Match {

    @prop()
    public date: Date;

    @prop()
    public team1: User[];
    
    @prop()
    public team2: User[];

    @prop()
    public score1: number;

    @prop()
    public score2: number;

    @prop()
    public state: MatchState;
}

export const UserDAO = getModelForClass(User);
export const MatchDAO = getModelForClass(Match);