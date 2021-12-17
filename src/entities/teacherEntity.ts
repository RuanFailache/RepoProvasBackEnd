import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm'

import SubjectEntity from './subjectEntity'

@Entity('teachers')
export default class Teacher {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(() => SubjectEntity, (subject) => subject.id, { eager: true })
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
  subjects: SubjectEntity[]

  getTeacher() {
    return {
      id: this.id,
      name: this.name,
      subjects: this.subjects,
    }
  }
}
