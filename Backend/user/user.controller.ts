import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUser } from './dto/Create-user.dto';

@Controller('user')
export class UserController {
    constructor( private readonly userservice: UserService){}

    @Get()
    getAllUsers() {

        return  this.userservice.findAll();
    }

    
@Get(':id')
getUser(@param('id') id :string);{
    return  this.userservice.findOne(+id);
}

@Post
CreateUser(@Body() dto: CreateUser) {
    return this.userservice.create(dto);
}

@Delete(:id)
delete(@param('id') id : string){
 return this.userservice.remove(+id);   
}
}
 