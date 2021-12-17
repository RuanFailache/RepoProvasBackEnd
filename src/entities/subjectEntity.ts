import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm'

import ExamEntity from './examEntity'
import TeacherEntity from './teacherEntity'

@Entity('subjects')
export default class Subject {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public name: string

  @OneToMany(() => ExamEntity, (exam) => exam.id)
  public exams: ExamEntity[]

  @ManyToMany(() => TeacherEntity, (teacher) => teacher.id, { eager: true })
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
  private teachers: TeacherEntity[]

  getSubject() {
    return {
      id: this.id,
      name: this.name,
      exams: this.exams,
      teachers: this.teachers,
    }
  }
}
