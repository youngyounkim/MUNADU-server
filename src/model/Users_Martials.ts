import {
  Model,
  AutoIncrement,
  Column,
  PrimaryKey,
  Table,
  ForeignKey,
} from "sequelize-typescript";
import Martials from "./Martials";
import Users from "./Users";

export interface Users_MartialsI {
  id?: number | null;
}

@Table({
  tableName: "Users_Martials",
  timestamps: true,
})
export default class Users_Martials extends Model implements Users_MartialsI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id?: number;

  @ForeignKey(() => Users)
  @Column
  Users_id!: number;

  @ForeignKey(() => Martials)
  @Column
  Martials_id!: number;
}
