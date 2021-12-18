import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

import TeacherEntity from './teacherEntity'
import SubjectEntity from './subjectEntity'

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

  @ManyToOne(() => SubjectEntity, (subject) => subject.exams)
  subject: SubjectEntity

  @ManyToOne(() => SubjectEntity, (teacher) => teacher.exams)
  teacher: TeacherEntity

  getExam() {
    return {
      id: this.id,
      name: this.name,
      category: this.category,
      teacher: this.teacher,
      subject: this.subject,
    }
  }
}
