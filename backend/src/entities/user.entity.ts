import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Marks this class as an entity for TypeORM
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  address: string;

  @Column()
  city: string;


  @Column()
  gender: string;

  @Column()
  password: string;

  @Column()
  confirmPassword: string;
}
