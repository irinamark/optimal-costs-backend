import { Entity, Column, PrimaryColumn, ManyToOne, RelationId } from 'typeorm'
import { Project } from '../projects/projects.entity'

@Entity()
export class Utility {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'character varying' })
  value: number;

  @Column({ type: 'character varying' })
  title: string;

  @ManyToOne(type => Project, project => project.utilities)
  project: Project;

  @Column({ type: 'character varying' })
  @RelationId((utility: Utility) => utility.project)
  projectId: string;
}