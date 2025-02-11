import { DataTypes } from "sequelize";
import { sequelize } from "@/app/db/connection";
import Education from "@/app/db/models/education";
import Technology from "@/app/db/models/technology";

const EducationXTechnology = sequelize.define(
    'educationXtechnology',
    {
        id_education: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: Education,
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

Education.belongsToMany(Technology, { through: EducationXTechnology })
Technology.belongsToMany(Education, { through: EducationXTechnology })

export default EducationXTechnology;