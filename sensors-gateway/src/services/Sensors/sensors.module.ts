import { Module } from "@nestjs/common";
import { SensorsController } from "./sensors.controller";
import { SensorsService } from "./sensors.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Sensor } from "shared/entities/Sensor/sensor.entity";
import { CacheModule } from "@nestjs/cache-manager";
import { KafkaService } from "../kafka/kafka.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Sensor]),
    CacheModule.register({ ttl: 0 }),
  ],
  controllers: [SensorsController],
  providers: [SensorsService, KafkaService],
})
export class SensorsModule {}
