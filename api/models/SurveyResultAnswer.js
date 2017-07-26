'use strict';

const Model = require('trails-model');

/**
 * @module SurveyResultAnswer
 * @description Model describing a Survey Result Answer
 */
module.exports = class SurveyResultAnswer extends Model {

    static config (app, Sequelize) {
        return {
            options: {
                classMethods: {
                    associate: (models) => {
                        models.SurveyResultAnswer.belongsTo(models.SurveyResult);
                        models.Question.hasOne(models.SurveyResultAnswer, {
                            onDelete: 'CASCADE',
                            foreignKey: {
                                allowNull: false
                            }
                        });
                        models.Answer.hasOne(models.SurveyResultAnswer, {
                            onDelete: 'CASCADE',
                            foreignKey: {
                                allowNull: true
                            }
                        });
                    }
                }
            }
        };
    }

    static schema (app, Sequelize) {
        return {
            intensity: {
                type: Sequelize.INTEGER,
                allowNull: true
            }
        };
    }

};
