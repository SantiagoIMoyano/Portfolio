import { DataTypes } from "sequelize";
import { sequelize } from "@/app/db/connection";
import Project from "@/app/db/models/project";
import Experience from "@/app/db/models/experience";
import Education from "@/app/db/models/education";

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
        },
        id_project: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Project,
                key: 'id'
            }
        },
        id_experience: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Experience,
                key: 'id'
            }
        },
        id_education: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Education,
                key: 'id'
            }
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

Project.hasMany(Technology, {
    foreignKey: 'id_project',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Technology.belongsTo(Project)

Experience.hasMany(Technology, {
    foreignKey: 'id_experience',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Technology.belongsTo(Experience)

Education.hasMany(Technology, {
    foreignKey: 'id_education',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Technology.belongsTo(Education)

export default Technology;