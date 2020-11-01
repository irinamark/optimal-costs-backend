
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
import { Project } from '../projects/projects.entity'
// import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'character varying' })
  name: string;

  @Column({ type: 'character varying' })
  password: string;

  @OneToMany(type => Project, project => project.user, { eager: true })
    projects: Project[];
}