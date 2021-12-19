import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm'

import Exam from './examEntity'
import Subject from './subjectEntity'

@Entity('teachers')
export default class Teacher {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public name: string

  @OneToMany(() => Exam, (exam) => exam.teacher)
  public exams: Exam[]

  @ManyToMany(() => Subject, (subject) => subject.teachers)
  @JoinTable({
    name: 'subjects_teachers',
    joinColumn: {
      name: 'teacher_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'subject_id',
      referencedColumnName: 'id',
    },
  })
  public subjects: Subject[]

  getTeacher() {
    return {
      id: this.id,
      name: this.name,
      exams: this.exams,
    }
  }
}
