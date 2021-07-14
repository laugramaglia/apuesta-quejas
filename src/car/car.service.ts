import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './car.mock';

@Injectable()
export class CarService {
    private cars = CARS

    public getCars() {
        return this.cars
    }

    public postCar(car) {
        return this.cars.push(car)
    }

    public async deleteCarsById(id: number): Promise<any> {
        const carId = Number(id)

        return new Promise((resolve) => {
            const index = this.cars.findIndex(car => car.id === carId)
            if (index === -1) {
                throw new HttpException('Not Found', 404)
            }
            this.cars.slice(index, 1)
            return resolve("car deleted")
        })
    }
}
