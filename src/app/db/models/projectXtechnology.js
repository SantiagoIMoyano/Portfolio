import { DataTypes } from "sequelize";
import { sequelize } from "@/app/db/connection";
import Project from "@/app/db/models/project";
import Technology from "@/app/db/models/technology";

const ProjectXTechnology = sequelize.define(
    'projectXtechnology',
    {
        id_project: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: Project,
                key: 'id'
            }
        },
        id_technology: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: Technology,
                key: 'id'
            }
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

Project.belongsToMany(Technology, { through: ProjectXTechnology })
Technology.belongsToMany(Project, { through: ProjectXTechnology })

export default ProjectXTechnology;