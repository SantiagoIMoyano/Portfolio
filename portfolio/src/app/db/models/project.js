import { DataTypes } from "sequelize";
import { sequelize } from "@/app/db/connection";
import Profile from "@/app/db/models/profile";

const Project = sequelize.define(
    "project",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        link: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(255),
            defaultValue: null
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

Profile.hasMany(Project, {
    foreignKey: 'role',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Project.belongsTo(Profile)


export default Project;