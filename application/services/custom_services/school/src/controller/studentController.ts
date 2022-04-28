import { Request, Response } from 'express';
import { studentService } from '../service/studentService';
import { CustomLogger } from '../config/Logger'
let student = new studentService();

export class studentController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
student.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentController.ts: GpCreate');
    })}


}