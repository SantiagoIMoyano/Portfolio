import { DataTypes } from "sequelize";
import { sequelize } from "@/app/db/connection";

const ExperienceXTechnology = sequelize.define(
    'experienceXtechnology',
    {
        id_experience: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'experience',
                key: 'id'
            }
        },
        id_technology: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'technology',
                key: 'id'
            }
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)


export default ExperienceXTechnology;