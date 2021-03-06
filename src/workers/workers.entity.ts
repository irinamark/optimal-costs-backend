import { Entity, Column, PrimaryColumn, ManyToOne, RelationId } from 'typeorm'
import { Project } from '../projects/projects.entity'

@Entity()
export class Worker {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'character varying' })
  value: number;

  @Column({ type: 'character varying' })
  title: string;

  @ManyToOne(type => Project, project => project.workers)
  project: Project;

  @Column({ type: 'character varying' })
  @RelationId((worker: Worker) => worker.project)
  projectId: string;
}