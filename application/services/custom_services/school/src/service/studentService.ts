import { Request, Response } from 'express';
import {studentDao} from '../dao/studentDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let student = new studentDao();

export class studentService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: GpCreate')
     let  studentData = req.body;
     student.GpCreate(studentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}