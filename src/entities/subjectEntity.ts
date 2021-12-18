import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import ExamEntity from './examEntity'

@Entity('subjects')
export default class Subject {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public name: string

  @OneToMany(() => ExamEntity, (exam) => exam.subject)
  public exams: ExamEntity[]

  getSubject() {
    return {
      id: this.id,
      name: this.name,
      exams: this.exams,
    }
  }
}
