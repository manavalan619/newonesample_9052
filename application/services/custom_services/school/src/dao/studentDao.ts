import * as mongoose from 'mongoose';
import studentModel from '../models/student';
import { CustomLogger } from '../config/Logger'


export class studentDao {
    private student = studentModel;
    constructor() { }
    
    public async GpCreate(studentData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentDao.ts: GpCreate');

    let temp = new studentModel(studentData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}