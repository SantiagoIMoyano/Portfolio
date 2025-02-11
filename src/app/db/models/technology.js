import { DataTypes } from "sequelize";
import { sequelize } from "@/app/db/connection";

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

export default Technology;