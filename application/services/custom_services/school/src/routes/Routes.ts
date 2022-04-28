import { Request, Response, NextFunction } from "express";
import { studentController } from '../controller/studentController';


export class Routes {
    private student: studentController = new studentController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/student').post(this.student.GpCreate);
     }

}