import { prop, getModelForClass } from '@typegoose/typegoose';

export class User {

    @prop()
    public nick: string;
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
}

export const UserDAO = getModelForClass(User);
export const MatchDAO = getModelForClass(Match);