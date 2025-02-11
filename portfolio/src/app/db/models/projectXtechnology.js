import { DataTypes } from "sequelize";
import { sequelize } from "@/app/db/connection";

const ProjectXTechnology = sequelize.define(
    'projectXtechnology',
    {
        id_project: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'project',
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

export default ProjectXTechnology;