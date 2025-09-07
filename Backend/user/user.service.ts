import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUser } from './dto/Create-user.dto';

@Injectable()
export class UserService {
constructor(
    @InjectRepository(User)
    private userrepo :Repository<Post>;
)
 create(data: CreateUser){
    return this.userrepo.save(data);

 }
 findUser( id:Number){
    return this.userrepo.findOne({where:{id}});
 }
   
 findAll(){
    return this.userrepo.find();

 }
 updateUser(id:number,data:CreateUser){
    return this.userrepo.update(id,data);
 }
 DeleteUser(id:number){
    return this.userrepo.remove(id);
 }
}
