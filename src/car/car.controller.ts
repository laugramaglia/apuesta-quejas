import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarService } from './car.service'
import { CarDto } from './cat.dto';

@Controller('car')
export class CarController {
    constructor ( private carService: CarService ) {}

    @Get()
    async getCars(){
        return this.carService.getCars();
    }

    @Post()
    public postCar(@Body() car: CarDto){
        return this.carService.postCar(car)
    }

    @Delete(':id')
    public async deleteCar(@Param('id') id: number){
        const result = this.carService.deleteCarsById(id)
        return result
    }
}
