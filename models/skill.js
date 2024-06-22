"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Skill.belongsTo(models.Level, { foreignKey: "levelId" });
      Skill.belongsToMany(models.User, { through: "UserSkills" });
      Skill.belongsToMany(models.Proposal, { through: "SkillProposal" });
    }
  }
  Skill.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      levelId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Skill",
      paranoid: true,
      timestamps: true,
    }
  );
  return Skill;
};
