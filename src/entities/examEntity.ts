import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

import Teacher from './teacherEntity'
import Subject from './subjectEntity'

@Entity('exams')
export default class Exam {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  category: string

  @Column()
  link: string

  @ManyToOne(() => Subject, (subject) => subject.exams)
  subject: Subject

  @ManyToOne(() => Teacher, (teacher) => teacher.exams)
  teacher: Teacher

  getExam() {
    return {
      id: this.id,
      name: this.name,
      category: this.category,
      link: this.link,
      teacher: this.teacher,
      subject: this.subject,
    }
  }
}
