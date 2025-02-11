import { DataTypes } from "sequelize";
import { sequelize } from "@/app/db/connection";
import Experience from "@/app/db/models/experience";
import Technology from "@/app/db/models/technology";

const ExperienceXTechnology = sequelize.define(
    'experienceXtechnology',
    {
        id_experience: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: Experience,
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

Experience.belongsToMany(Technology, { through: ExperienceXTechnology })
Technology.belongsToMany(Experience, { through: ExperienceXTechnology })

export default ExperienceXTechnology;