import { DataTypes } from "sequelize";
import { sequelize } from "@/app/db/connection";

const Profile = sequelize.define(
    'profile',
    {
        role: {
            type: DataTypes.STRING(45),
            allowNull: false,
            primaryKey: true
        },
        presentation: {
            type: DataTypes.STRING(700),
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

export default Profile;