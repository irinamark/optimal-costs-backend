import { Entity, Column, PrimaryColumn, ManyToOne, RelationId } from 'typeorm'
import { Project } from '../projects/projects.entity'

@Entity()
export class Other {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'character varying' })
  value: number;

  @Column({ type: 'character varying' })
  title: string;

  @ManyToOne(type => Project, project => project.others)
  project: Project;

  @Column({ type: 'character varying' })
  @RelationId((other: Other) => other.project)
  projectId: string;
}