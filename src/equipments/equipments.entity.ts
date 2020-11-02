import { Entity, Column, PrimaryColumn, ManyToOne, RelationId } from 'typeorm'
import { Project } from '../projects/projects.entity'

@Entity()
export class Equipment {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'character varying' })
  value: number;

  @Column({ type: 'character varying' })
  title: string;

  @ManyToOne(type => Project, project => project.equipments)
  project: Project;

  @Column({ type: 'character varying' })
  @RelationId((equipment: Equipment) => equipment.project)
  projectId: string;
}