import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "./index";

class Todo extends Model {
    public id!: number;
    public task!: string;
    public done!: boolean;
}

Todo.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        task: { type: DataTypes.STRING, allowNull: false }, 
        done: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
        sequelize,
        tableName: 'todos',
        timestamps: false,
    }
);



export default Todo;
