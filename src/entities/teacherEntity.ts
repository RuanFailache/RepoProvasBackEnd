import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import ExamEntity from './examEntity'

@Entity('teachers')
export default class Teacher {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public name: string

  @OneToMany(() => ExamEntity, (exam) => exam.teacher)
  public exams: ExamEntity[]

  getTeacher() {
    return {
      id: this.id,
      name: this.name,
      exams: this.exams,
    }
  }
}
