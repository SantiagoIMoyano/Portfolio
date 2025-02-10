import { DataTypes } from "sequelize";
import { sequelize } from "@/app/db/connection";
import Profile from "@/app/db/models/profile";

const Experience = sequelize.define(
    "experience",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING(3000),
            allowNull: false
        },
        seniority: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        workplace: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        role: {
            type: DataTypes.STRING(45),
            allowNull: false,
            references: {
                model: Profile,
                key: 'role'
            }
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)


Profile.hasMany(Experience, {
    foreignKey: 'role',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Experience.belongsTo(Profile)

export default Experience;