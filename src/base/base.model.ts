// import {
//   Column,
//   CreatedAt,
//   DataType,
//   Model,
//   UpdatedAt,
// } from 'sequelize-typescript';

// export default class BaseModel<T, C = any> extends Model<T, C> {
//   @Column({
//     type: DataType.BIGINT,
//     primaryKey: true,
//     autoIncrement: true,
//     autoIncrementIdentity: true,
//   })
//   public readonly id: number;

//   @CreatedAt
//   public createdAt: Date;

//   @UpdatedAt
//   public updatedAt: Date;
// }
