import { UserSession } from "Dao/UserSession";

export class SessionHelper {

    public static async isValidSession(sessionID: string): Promise<UserSession> {

        let session = await this.validateSession(sessionID);
        return session;
    }

    public static async validateSession(sessionID: string): Promise<UserSession> {

        let session = new UserSession();
        session.age = 13;
        session.dob = "12-20-1993";
        session.mobile = "9562204905";
        session.name = "pkv";

        return session;
    }

}