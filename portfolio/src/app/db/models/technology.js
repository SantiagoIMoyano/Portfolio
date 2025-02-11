import { DataTypes } from "sequelize";
import { sequelize } from "@/app/db/connection";
import Education from "@/app/db/models/education";
import Experience from "@/app/db/models/experience";
import Project from "@/app/db/models/project";
import EducationXTechnology from "@/app/db/models/educationXtechnology";
import ExperienceXTechnology from "@/app/db/models/experienceXtechnology";
import ProjectXTechnology from "@/app/db/models/projectXtechnology";

const Technology = sequelize.define(
    "technology",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        level: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        sizeImage: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stack: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)



Education.belongsToMany(Technology, { 
    through: EducationXTechnology,
    foreignKey: 'id_technology',
    foreignKey: 'id_education'
})
Technology.belongsToMany(Education, { 
    through: EducationXTechnology,
    foreignKey: 'id_education',
    foreignKey: 'id_technology'
})




Experience.belongsToMany(Technology, { 
    through: ExperienceXTechnology,
    foreignKey: 'id_technology',
    foreignKey: 'id_experience'})

Technology.belongsToMany(Experience, { 
    through: ExperienceXTechnology,
    foreignKey: 'id_experience',
    foreignKey: 'id_technology'})




Project.belongsToMany(Technology, { 
    through: ProjectXTechnology,
    foreignKey: 'id_technology',
    foreignKey: 'id_project'})

Technology.belongsToMany(Project, { 
    through: ProjectXTechnology,
    foreignKey: 'id_project',
    foreignKey: 'id_technology'})




export default Technology;