import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm'

import Exam from './examEntity'
import Teacher from './teacherEntity'

@Entity('subjects')
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Exam, (exam) => exam.subject)
  exams: Exam[]

  @ManyToMany(() => Teacher, (teacher) => teacher.subjects)
  @JoinTable({
    name: 'subjects_teachers',
    joinColumn: {
      name: 'subject_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'teacher_id',
      referencedColumnName: 'id',
    },
  })
  teachers: Teacher[]

  getSubject() {
    return {
      id: this.id,
      name: this.name,
      exams: this.exams,
    }
  }
}
