
import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany, RelationId } from 'typeorm'
import { User } from '../users/users.entity'
import { Worker } from '../workers/workers.entity'
import { Equipment } from '../equipments/equipments.entity'
import { Other } from '../others/others.entity'
import { Utility } from '../utilities/utilities.entity'
// import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Project {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'character varying' })
  balance: number;

  @Column({ type: 'character varying' })
  title: string;

  @Column({ type: 'character varying' })
  date: string;

  @ManyToOne(type => User, user => user.projects)
  user: User;

  @Column({ type: 'character varying' })
  @RelationId((project: Project) => project.user)
  userId: string;

  @OneToMany(type => Worker, worker => worker.project, { eager: true })
  workers: Worker[];

  @OneToMany(type => Equipment, equipment => equipment.project, { eager: true })
  equipments: Equipment[];

  @OneToMany(type => Other, other => other.project, { eager: true })
  others: Other[];

  @OneToMany(type => Utility, utility => utility.project, { eager: true })
  utilities: Utility[];
}