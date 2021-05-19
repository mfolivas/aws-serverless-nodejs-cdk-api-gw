const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const ApiGateway = require('../lib/api-gateway-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new ApiGateway.ApiGatewayStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
