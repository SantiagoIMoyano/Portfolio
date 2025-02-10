import { DataTypes } from "sequelize";
import { sequelize } from "@/app/db/connection";
import Profile from "@/app/db/models/profile";

const Education = sequelize.define(
    'education',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        degree: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(3000),
            allowNull: false
        },
        institution: {
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

Profile.hasMany(Education, {
    foreignKey: 'role',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Education.belongsTo(Profile)

export default Education;