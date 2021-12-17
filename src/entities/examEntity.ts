import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm'

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

  @OneToOne(() => SubjectEntity, { eager: true })
  @JoinColumn({ name: 'teacher_id' })
  teacher: TeacherEntity

  @OneToOne(() => SubjectEntity, { eager: true })
  @JoinColumn({ name: 'subject_id' })
  subject: SubjectEntity

  getExam() {
    return {
      id: this.id,
      name: this.name,
      category: this.category,
      teacher: this.teacher.name,
      subject: this.subject.name,
    }
  }
}
