import { DataTypes } from "sequelize";
import { sequelize } from "@/app/db/connection";

const EducationXTechnology = sequelize.define(
    'educationXtechnology',
    {
        id_education: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'education',
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


export default EducationXTechnology;