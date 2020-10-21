import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
import { ProjectsModule } from './projects/projects.module';
import { Project } from './projects/projects.entity';
import { WorkersController } from './workers/workers.controller';
import { WorkersService } from './workers/workers.service';
import { WorkersModule } from './workers/workers.module';
import { Worker } from './workers/workers.entity';
import { EquipmentsController } from './equipments/equipments.controller';
import { EquipmentsModule } from './equipments/equipments.module';
import { Equipment } from './equipments/equipments.entity';
import { OthersService } from './others/others.service';
import { OthersModule } from './others/others.module';
import { Other } from './others/others.entity';
import { UtilitiesController } from './utilities/utilities.controller';
import { UtilitiesService } from './utilities/utilities.service';
import { UtilitiesModule } from './utilities/utilities.module';
import { Utility } from './utilities/utilities.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // port: 5432,
      username: 'postgres',
      password: 'example',
      database: 'postgres',
      host: 'db',
      entities: [User, Project, Worker, Equipment, Other, Utility],
      // migrationsTableName: "migration",
      // migrations: ['./dist/migration/*.js'],
      synchronize: true,
      // cli: {
      //   migrationsDir: './src/migration'
      // },
      // migrationsRun: false
    }),
    UsersModule,
    ProjectsModule,
    WorkersModule,
    EquipmentsModule,
    OthersModule,
    UtilitiesModule],
  controllers: [AppController, UsersController, ProjectsController, WorkersController, EquipmentsController, UtilitiesController],
  providers: [AppService, UsersService, ProjectsService, WorkersService, OthersService, UtilitiesService],
})
export class AppModule {}
