'use strict';

const assert = require('assert');
const app = require('../../../index');

describe('Answer Model', () => {
    it('should exist', () => {
        assert(app.api.models.Answer);
    });
});
