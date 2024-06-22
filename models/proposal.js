"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Proposal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Proposal.belongsToMany(models.User, { through: "UserProposal" });
      Proposal.belongsToMany(models.Skill, { through: "SkillProposal" });
      Proposal.belongsTo(models.Status, { foreignKey: "statusId" });
    }
  }
  Proposal.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      statusId: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Proposal",
      paranoid: true,
      timestamps: true,
    }
  );
  return Proposal;
};
